/* Tennessee State University — 360° Virtual Tour site
 * Drives the Marzipano viewer using the scene data exported by the
 * Marzipano Tool (data.js) and builds the stop list and hall cards from it.
 */
(function () {
  'use strict';

  var Marzipano = window.Marzipano;
  var data = window.APP_DATA;
  var $ = function (sel) { return document.querySelector(sel); };

  // ---------------------------------------------------------------
  // Hall definitions. Scenes are grouped by matching their id.
  // ---------------------------------------------------------------
  var HALLS = [
    { key: 'campus',  name: 'Campus Gateway', match: /tennessee-state-university/, strip: null },
    { key: 'wilson',  name: 'Wilson Hall',    match: /wilson/,          strip: /^Wilson\s+/i },
    { key: 'rudolph', name: 'Rudolph Hall',   match: /rudol/,           strip: /^Rudolo?ph\s+/i },
    { key: 'hale',    name: 'Hale Hall',      match: /hale|hall-hall/,  strip: /^Hale\s+(Hall\s+)?/i },
    { key: 'new',     name: 'New Hall',       match: /new-hall/,        strip: /^New Hall\s+/i },
    { key: 'eppse',   name: 'Eppse Hall',     match: /eppse/,           strip: /^Eppse\s+/i },
    { key: 'boyd',    name: 'Boyd Hall',      match: /boyd/,            strip: /^Boyd\s+/i },
    { key: 'watson',  name: 'Watson Hall',    match: /watson/,          strip: /^Watson\s+/i }
  ];

  var FEATURES = [
    { key: 'room',      label: 'Dorm room',      test: /\broom\b/i },
    { key: 'lounge',    label: 'Lounge',         test: /lounge/i },
    { key: 'elevator',  label: 'Elevator',       test: /elevator/i },
    { key: 'dining',    label: 'Food area',      test: /food/i },
    { key: 'community', label: 'Community bath', test: /community/i },
    { key: 'bath',      label: 'Bathroom',       test: /shower|restroom|bathroom/i },
    { key: 'floors',    label: 'Multiple floors', test: /upstairs|elevator/i }
  ];

  function thumb(id) { return 'tiles/' + id + '/1/f/0/0.jpg'; }

  function hallFor(id) {
    for (var i = 0; i < HALLS.length; i++) {
      if (HALLS[i].match.test(id)) return HALLS[i];
    }
    return HALLS[0];
  }

  // Turn raw scene names ("Rudolph Upstairs-01") into friendly stop labels.
  function cleanLabel(name, hall, siblings) {
    var label = hall.strip ? name.replace(hall.strip, '') : name;
    label = label.replace(/^Hall\s+/i, '');
    label = label.replace(/Shower (Sink|Shower) Side/i, 'Shower ($1 Side)');
    label = label.replace(/\s*\((right|left)\)/i, function (m, s) { return ' (' + s.charAt(0).toUpperCase() + s.slice(1) + ')'; });
    var dup = label.match(/^(.*)-0*(\d+)$/);
    if (dup) {
      var base = dup[1];
      label = siblings.indexOf(base) !== -1 ? base + ' ' + (Number(dup[2]) + 1) : base;
    }
    return label || name;
  }

  // ---------------------------------------------------------------
  // Build the model
  // ---------------------------------------------------------------
  var stops = data.scenes.map(function (s, i) {
    return { index: i, id: s.id, name: s.name, hall: hallFor(s.id), data: s };
  });

  HALLS.forEach(function (h) {
    h.stops = stops.filter(function (s) { return s.hall === h; });
    var raw = h.stops.map(function (s) { return h.strip ? s.name.replace(h.strip, '').replace(/^Hall\s+/i, '') : s.name; });
    h.stops.forEach(function (s) { s.label = cleanLabel(s.name, h, raw); });
    h.features = FEATURES.filter(function (f) {
      if (f.key === 'bath' && h.stops.some(function (s) { return /community/i.test(s.name); })) return false;
      return h.stops.some(function (s) { return f.test.test(s.name); });
    });
    h.entrance = h.stops[0];
    h.room = h.stops.filter(function (s) { return /\broom\b/i.test(s.name); })[0] || null;
    h.cover = h.room || h.entrance;
  });
  HALLS[0].stops.forEach(function (s) { s.label = 'Campus Gateway'; });

  var residenceHalls = HALLS.filter(function (h) { return h.key !== 'campus' && h.stops.length; });
  $('#statHalls').textContent = residenceHalls.length;
  $('#statStops').textContent = stops.length;
  $('#year').textContent = new Date().getFullYear();

  // ---------------------------------------------------------------
  // Viewer
  // ---------------------------------------------------------------
  var viewerEl = $('#viewer');
  var viewer = new Marzipano.Viewer($('#pano'), {
    controls: { mouseViewMode: data.settings.mouseViewMode || 'drag' }
  });

  stops.forEach(function (stop) {
    var d = stop.data;
    var source = Marzipano.ImageUrlSource.fromString(
      'tiles/' + d.id + '/{z}/{f}/{y}/{x}.jpg',
      { cubeMapPreviewUrl: 'tiles/' + d.id + '/preview.jpg' });
    var geometry = new Marzipano.CubeGeometry(d.levels);
    var limiter = Marzipano.RectilinearView.limit.traditional(d.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
    var view = new Marzipano.RectilinearView(d.initialViewParameters, limiter);
    var scene = viewer.createScene({ source: source, geometry: geometry, view: view, pinFirstLevel: true });

    d.linkHotspots.forEach(function (hs) {
      scene.hotspotContainer().createHotspot(createLinkHotspot(hs), { yaw: hs.yaw, pitch: hs.pitch });
    });
    d.infoHotspots.forEach(function (hs) {
      scene.hotspotContainer().createHotspot(createInfoHotspot(hs), { yaw: hs.yaw, pitch: hs.pitch });
    });

    stop.scene = scene;
    stop.view = view;
  });

  function createLinkHotspot(hs) {
    var target = findStop(hs.target);
    var el = document.createElement('button');
    el.className = 'hs-link';
    el.type = 'button';
    el.setAttribute('aria-label', 'Go to ' + (target ? target.name : 'next stop'));
    el.innerHTML =
      '<span class="hs-ring"></span>' +
      '<svg class="hs-arrow" viewBox="0 0 24 24" style="transform:rotate(' + hs.rotation + 'rad)"><path d="M6 15l6-6 6 6"/></svg>' +
      '<span class="hs-label"></span>';
    el.querySelector('.hs-label').textContent = target ? target.name : '';
    el.addEventListener('click', function () { if (target) goTo(target); });
    stopPropagation(el);
    return el;
  }

  function createInfoHotspot(hs) {
    var el = document.createElement('div');
    el.className = 'hs-link';
    el.innerHTML = '<span class="hs-ring"></span><span class="hs-label"></span>';
    el.querySelector('.hs-label').textContent = hs.title;
    stopPropagation(el);
    return el;
  }

  function stopPropagation(el) {
    ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'wheel', 'mousewheel', 'mousedown', 'pointerdown'].forEach(function (evt) {
      el.addEventListener(evt, function (e) { e.stopPropagation(); });
    });
  }

  function findStop(id) {
    for (var i = 0; i < stops.length; i++) if (stops[i].id === id) return stops[i];
    return null;
  }

  // Let the page scroll normally over the viewer (pinch still zooms).
  viewerEl.addEventListener('wheel', function (e) {
    if (!e.target.closest('.stops-panel')) e.stopPropagation();
  }, true);

  // Slow autorotate while the intro is showing; hold still once touring.
  var autorotate = Marzipano.autorotate({ yawSpeed: 0.03, targetPitch: 0, targetFov: Math.PI / 2 });
  var touring = false;

  function applyRotation() {
    if (!touring) {
      viewer.startMovement(autorotate);
      viewer.setIdleMovement(3000, autorotate);
    } else {
      viewer.stopMovement();
      viewer.setIdleMovement(Infinity);
    }
  }

  // ---------------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------------
  var current = null;

  function goTo(stop, opts) {
    opts = opts || {};
    viewer.stopMovement();
    stop.view.setParameters(stop.data.initialViewParameters);
    stop.scene.switchTo({ transitionDuration: opts.instant ? 0 : 900 });
    current = stop;
    applyRotation();

    $('#npHall').textContent = stop.hall.name;
    $('#npName').textContent = stop.hall.key === 'campus' ? stop.name : stop.label;
    $('#npCount').textContent = (stop.index + 1) + ' / ' + stops.length;

    document.querySelectorAll('.stop-items button').forEach(function (b) {
      var on = b.dataset.id === stop.id;
      b.classList.toggle('current', on);
      if (on) b.setAttribute('aria-current', 'location'); else b.removeAttribute('aria-current');
    });
    document.querySelectorAll('.hall-group').forEach(function (g) {
      var on = g.dataset.hall === stop.hall.key;
      g.classList.toggle('active', on);
      if (on && !searchInput.value) g.open = true;
    });
    var btn = document.querySelector('.stop-items button[data-id="' + stop.id + '"]');
    if (btn && touring) btn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

    if (touring && history.replaceState) history.replaceState(null, '', '#stop=' + stop.id);
  }

  function startTour(stop) {
    touring = true;
    $('#intro').classList.add('hide');
    viewerEl.classList.remove('previewing');
    $('#tourUi').hidden = false;
    if (window.matchMedia('(max-width: 860px)').matches) $('#stopsPanel').classList.add('collapsed');
    goTo(stop || current || stops[0], { instant: !stop || stop === current });
    if (window.scrollY > 10) $('#tour').scrollIntoView({ behavior: 'smooth' });
  }

  $('#startTour').addEventListener('click', function () { startTour(); });

  // "Roll the dice": jump to a random stop (never the gateway or the current one).
  $('#surpriseMe').addEventListener('click', function () {
    var pool = stops.filter(function (s) { return s.hall.key !== 'campus' && s !== current; });
    startTour(pool[Math.floor(Math.random() * pool.length)]);
  });

  // ---------------------------------------------------------------
  // Stops panel
  // ---------------------------------------------------------------
  var listEl = $('#stopsList');
  var searchInput = $('#stopSearch');
  var chevron = '<svg class="chev" viewBox="0 0 24 24"><path d="M8.6 16.6 10 18l6-6-6-6-1.4 1.4 4.6 4.6z"/></svg>';

  HALLS.forEach(function (h) {
    if (!h.stops.length) return;
    var group = document.createElement('details');
    group.className = 'hall-group';
    group.dataset.hall = h.key;
    var summary = document.createElement('summary');
    summary.innerHTML =
      '<img loading="lazy" alt="" src="' + thumb(h.cover.id) + '">' +
      '<span class="hg-text"><strong></strong><small></small></span>' + chevron;
    summary.querySelector('strong').textContent = h.name;
    summary.querySelector('small').textContent = h.stops.length + (h.stops.length === 1 ? ' stop' : ' stops');
    group.appendChild(summary);

    var ul = document.createElement('ul');
    ul.className = 'stop-items';
    h.stops.forEach(function (s, i) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.dataset.id = s.id;
      b.dataset.search = (h.name + ' ' + s.label + ' ' + s.name).toLowerCase();
      b.innerHTML = '<span class="num">' + String(i + 1).padStart(2, '0') + '</span><span class="lbl"></span>';
      b.querySelector('.lbl').textContent = s.label;
      b.addEventListener('click', function () {
        goTo(s);
        if (window.matchMedia('(max-width: 860px)').matches) $('#stopsPanel').classList.add('collapsed');
      });
      li.appendChild(b);
      ul.appendChild(li);
    });
    group.appendChild(ul);
    listEl.appendChild(group);
  });

  var emptyEl = document.createElement('p');
  emptyEl.className = 'stops-empty';
  emptyEl.textContent = 'No stops match your search.';
  emptyEl.hidden = true;
  listEl.appendChild(emptyEl);

  searchInput.addEventListener('input', function () {
    var q = this.value.trim().toLowerCase();
    var anyVisible = false;
    document.querySelectorAll('.hall-group').forEach(function (g) {
      var hits = 0;
      g.querySelectorAll('.stop-items button').forEach(function (b) {
        var hit = !q || b.dataset.search.indexOf(q) !== -1;
        b.parentNode.hidden = !hit;
        if (hit) hits++;
      });
      g.hidden = hits === 0;
      g.open = q ? hits > 0 : g.classList.contains('active');
      if (hits) anyVisible = true;
    });
    emptyEl.hidden = anyVisible;
  });

  $('#closeStops').addEventListener('click', function () { $('#stopsPanel').classList.add('collapsed'); });
  $('#openStops').addEventListener('click', function () { $('#stopsPanel').classList.remove('collapsed'); });

  // ---------------------------------------------------------------
  // Hall cards
  // ---------------------------------------------------------------
  var grid = $('#hallGrid');
  var camIcon = '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg>';

  HALLS.forEach(function (h) {
    if (!h.stops.length) return;
    var card = document.createElement('article');
    card.className = 'hall-card' + (h.key === 'campus' ? ' featured' : '');
    card.innerHTML =
      '<div class="hc-media"><img loading="lazy" alt=""><span class="hc-badge">' + camIcon + '<span></span></span></div>' +
      '<div class="hc-body"><h3></h3><p class="hc-desc"></p><div class="hc-tags"></div><div class="hc-actions"></div></div>';
    var img = card.querySelector('img');
    img.src = thumb((h.key === 'campus' ? h.entrance : h.cover).id);
    img.alt = h.name + ' 360° preview';
    card.querySelector('.hc-badge span').textContent = h.key === 'campus' ? 'Start here' : h.stops.length + ' stops in 360°';
    card.querySelector('h3').textContent = h.name;
    card.querySelector('.hc-desc').textContent = h.key === 'campus'
      ? 'Begin at the Tennessee State University gateway, then choose any residence hall from the arrows in front of you.'
      : 'Walk from the front entrance through the ' + describe(h) + '.';
    var tags = card.querySelector('.hc-tags');
    h.features.forEach(function (f) {
      var t = document.createElement('span');
      t.textContent = f.label;
      tags.appendChild(t);
    });

    var actions = card.querySelector('.hc-actions');
    actions.appendChild(actionBtn(h.key === 'campus' ? 'Start the tour' : 'Tour ' + h.name.replace(/ Hall$/, ''), 'btn-navy', h.entrance));
    if (h.room) actions.appendChild(actionBtn('See a room', 'btn-outline', h.room));
    grid.appendChild(card);
  });

  function describe(h) {
    var parts = [];
    if (h.stops.some(function (s) { return /lobby/i.test(s.name); })) parts.push('lobby');
    if (h.stops.some(function (s) { return /lounge/i.test(s.name); })) parts.push('lounges');
    if (h.stops.some(function (s) { return /food/i.test(s.name); })) parts.push('food area');
    if (h.room) parts.push('a student room');
    if (h.stops.some(function (s) { return /shower|restroom|bathroom/i.test(s.name); })) parts.push('bathrooms');
    if (!parts.length) return 'hall';
    if (parts.length === 1) return parts[0];
    return parts.slice(0, -1).join(', ') + ' and ' + parts[parts.length - 1];
  }

  function actionBtn(text, cls, stop) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn btn-sm ' + cls;
    b.textContent = text;
    b.addEventListener('click', function () { startTour(stop); });
    return b;
  }

  // ---------------------------------------------------------------
  // Header & mobile nav
  // ---------------------------------------------------------------
  var header = $('#siteHeader');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var navToggle = $('#navToggle');
  var nav = $('#mainNav');
  navToggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    header.classList.toggle('solid', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      header.classList.remove('solid');
    }
  });

  // ---------------------------------------------------------------
  // Initial state: deep link (#stop=<id>) or hero preview
  // ---------------------------------------------------------------
  function stopFromHash() {
    var m = location.hash.match(/^#stop=(.+)$/);
    return m && findStop(decodeURIComponent(m[1]));
  }

  var linked = stopFromHash();
  if (linked && 'scrollRestoration' in history) history.scrollRestoration = 'manual';
  goTo(stops[0], { instant: true });
  if (linked) startTour(linked);
  else applyRotation();

  window.addEventListener('hashchange', function () {
    var s = stopFromHash();
    if (s && s !== current) startTour(s);
  });
})();
