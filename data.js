var APP_DATA = {
  "scenes": [
    {
      "id": "0-tennessee-state-university",
      "name": "Tennessee State University",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.016193776564893625,
        "pitch": -0.0204585208675212,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 0.047454144264648335,
          "pitch": -0.044983881997859854,
          "rotation": 7.853981633974483,
          "target": "1-wilson-entrance"
        },
        {
          "yaw": -0.08197546653722299,
          "pitch": -0.1463061712275504,
          "rotation": 5.497787143782138,
          "target": "11-rudolph-entrance"
        },
        {
          "yaw": -0.09243732765555279,
          "pitch": -0.033832430736257635,
          "rotation": 5.497787143782138,
          "target": "20-hale-entrance"
        },
        {
          "yaw": -0.09254320298225593,
          "pitch": 0.07917820387556418,
          "rotation": 4.71238898038469,
          "target": "30-new-hall-entrance"
        },
        {
          "yaw": -0.09516941864277761,
          "pitch": 0.19959915272982443,
          "rotation": 4.71238898038469,
          "target": "43-eppse-entrance"
        },
        {
          "yaw": -0.1013035103432145,
          "pitch": 0.4124171529700984,
          "rotation": 4.71238898038469,
          "target": "50-boyd-entrance"
        },
        {
          "yaw": -0.09483598860274611,
          "pitch": 0.307238015637326,
          "rotation": 4.71238898038469,
          "target": "61-watson-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wilson-entrance",
      "name": "Wilson Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.131431106337363,
          "pitch": 0.1889897782475618,
          "rotation": 0,
          "target": "0-tennessee-state-university"
        },
        {
          "yaw": -0.006032253880807303,
          "pitch": 0.04684906616611961,
          "rotation": 0,
          "target": "2-wilson-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wilson-lobby",
      "name": "Wilson Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4508243768438511,
          "pitch": 0.11930535952309995,
          "rotation": 0,
          "target": "1-wilson-entrance"
        },
        {
          "yaw": 2.1698345010650293,
          "pitch": 0.20924477410065556,
          "rotation": 5.497787143782138,
          "target": "3-wilson-lounge"
        },
        {
          "yaw": 2.6623163579415614,
          "pitch": 0.28656730433421806,
          "rotation": 0.7853981633974483,
          "target": "5-wilson-elevator"
        },
        {
          "yaw": -1.3861269132737775,
          "pitch": 0.21615090049216867,
          "rotation": 0.7853981633974483,
          "target": "4-wilson-lobby-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wilson-lounge",
      "name": "Wilson Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.26700921622921214,
          "pitch": 0.2657586427226519,
          "rotation": 0.7853981633974483,
          "target": "2-wilson-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wilson-lobby-right",
      "name": "Wilson Lobby (right)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.22172824795402946,
          "pitch": 0.3487585871252996,
          "rotation": 5.497787143782138,
          "target": "2-wilson-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wilson-elevator",
      "name": "Wilson Elevator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4163374586030404,
          "pitch": 0.4214321508529384,
          "rotation": 0,
          "target": "2-wilson-lobby"
        },
        {
          "yaw": 1.4808517138584874,
          "pitch": 0.26714759723692794,
          "rotation": 1.5707963267948966,
          "target": "6-wilson-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-wilson-hallway",
      "name": "Wilson Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0818964950974195,
          "pitch": 0.15541153616957892,
          "rotation": 4.71238898038469,
          "target": "5-wilson-elevator"
        },
        {
          "yaw": 0.08672126761432963,
          "pitch": -0.030125443559160914,
          "rotation": 7.853981633974483,
          "target": "7-wilson-shower"
        },
        {
          "yaw": -0.0751602521947099,
          "pitch": -0.030857263312856986,
          "rotation": 4.71238898038469,
          "target": "10-wilson-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-wilson-shower",
      "name": "Wilson Shower",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0044001416113062,
          "pitch": 0.1531035855542182,
          "rotation": 0,
          "target": "6-wilson-hallway"
        },
        {
          "yaw": -0.018832571298416312,
          "pitch": 0.47117981722205116,
          "rotation": 0,
          "target": "8-wilson-shower-sink-side"
        },
        {
          "yaw": -2.560990688338709,
          "pitch": 0.500596254439218,
          "rotation": 0,
          "target": "9-wilson-shower-shower-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-wilson-shower-sink-side",
      "name": "Wilson Shower (Sink Side)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7727877488688657,
          "pitch": 0.4474528129660058,
          "rotation": 0.7853981633974483,
          "target": "7-wilson-shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-wilson-shower-shower-side",
      "name": "Wilson Shower (Shower Side)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9337526367551483,
          "pitch": 0.556206248505104,
          "rotation": 0,
          "target": "7-wilson-shower"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-wilson-room",
      "name": "Wilson Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.969493482708728,
        "pitch": 0.11434278493146621,
        "fov": 1.327739774821954
      },
      "linkHotspots": [
        {
          "yaw": 0.5986986945668686,
          "pitch": 0.1411439351127335,
          "rotation": 0,
          "target": "6-wilson-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-rudolph-entrance",
      "name": "Rudolph Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1335358075076645,
          "pitch": 0.07738781639914905,
          "rotation": 0,
          "target": "0-tennessee-state-university"
        },
        {
          "yaw": -0.0022320219036888744,
          "pitch": 0.04238294985081836,
          "rotation": 0,
          "target": "12-rudolph-lobby-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-rudolph-lobby-3",
      "name": "Rudolph Lobby 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.546823139292357,
          "pitch": 0.09683619504109586,
          "rotation": 0,
          "target": "11-rudolph-entrance"
        },
        {
          "yaw": -1.4447274739669496,
          "pitch": 0.16693794482064384,
          "rotation": 0,
          "target": "13-rudolph-lobby-2"
        },
        {
          "yaw": 1.4264132800799025,
          "pitch": 0.1978183190417635,
          "rotation": 0.7853981633974483,
          "target": "14-rudolph-lobby"
        },
        {
          "yaw": -0.3028702068378806,
          "pitch": 0.11033259106555171,
          "rotation": 0,
          "target": "16-rudolph-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-rudolph-lobby-2",
      "name": "Rudolph Lobby 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6022069942763224,
          "pitch": 0.1988234709540997,
          "rotation": 0,
          "target": "12-rudolph-lobby-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-rudolph-lobby",
      "name": "Rudolph Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07574406184585669,
          "pitch": 0.20623316229368704,
          "rotation": 5.497787143782138,
          "target": "12-rudolph-lobby-3"
        },
        {
          "yaw": -2.971305577851796,
          "pitch": 0.16488653057700198,
          "rotation": 0,
          "target": "15-rudolph-lounge-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-rudolph-lounge-2",
      "name": "Rudolph Lounge 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8717333282589905,
          "pitch": 0.128489716301722,
          "rotation": 0,
          "target": "14-rudolph-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-rudolph-upstairs",
      "name": "Rudolph Upstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.820350940218363,
          "pitch": 0.0394347003178126,
          "rotation": 3.141592653589793,
          "target": "12-rudolph-lobby-3"
        },
        {
          "yaw": 0.3800897544074111,
          "pitch": 0.2261325057417416,
          "rotation": 0.7853981633974483,
          "target": "17-rudolph-upstairs-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-rudolph-upstairs-01",
      "name": "Rudolph Upstairs-01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5169570364853646,
          "pitch": 0.20581961143704497,
          "rotation": 5.497787143782138,
          "target": "16-rudolph-upstairs"
        },
        {
          "yaw": -0.057559937663782534,
          "pitch": 0.018588927566490554,
          "rotation": 4.71238898038469,
          "target": "18-rudoloph-room"
        },
        {
          "yaw": 0.053572735130716254,
          "pitch": 0.014045578174101792,
          "rotation": 1.5707963267948966,
          "target": "19-rudolph-community-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-rudoloph-room",
      "name": "Rudolph Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6627998231042653,
          "pitch": 0.133129143858282,
          "rotation": 0,
          "target": "17-rudolph-upstairs-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-rudolph-community-bathroom",
      "name": "Rudolph Community Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9342151228274407,
          "pitch": 0.11044727734433835,
          "rotation": 0,
          "target": "17-rudolph-upstairs-01"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.031970640116252724,
          "pitch": 0.003116197573787005,
          "title": "Rudolph Community Shower",
          "text": "This is one of many community showers for Rudolph Hall. Rudolph is Jack &amp; Jill style meaning each room has their own personal sink/shower shared with the adjacent room."
        }
      ]
    },
    {
      "id": "20-hale-entrance",
      "name": "Hale Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.044500083712556204,
          "pitch": 0.005579596600227887,
          "rotation": 0,
          "target": "21-hale-hall-lobby"
        },
        {
          "yaw": -1.0171185412977692,
          "pitch": 0.09771491145293609,
          "rotation": 4.71238898038469,
          "target": "0-tennessee-state-university"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-hale-hall-lobby",
      "name": "Hale Hall Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -3.009937575079121,
        "pitch": 0.09612188905228436,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -1.0359846116001936,
          "pitch": 0.11452843517582423,
          "rotation": 0,
          "target": "22-hall-hall-lounge"
        },
        {
          "yaw": -2.3525600786029006,
          "pitch": 0.35325117671450457,
          "rotation": 0,
          "target": "23-hale-hall-lobby-2"
        },
        {
          "yaw": 2.4271087877806865,
          "pitch": 0.3415931900421576,
          "rotation": 5.497787143782138,
          "target": "24-hale-hall-hallway"
        },
        {
          "yaw": -3.1167989148433684,
          "pitch": 0.05869017247361619,
          "rotation": 0,
          "target": "25-hale-upstairs"
        },
        {
          "yaw": 0.08672573875263012,
          "pitch": 0.01825467193520325,
          "rotation": 0,
          "target": "20-hale-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-hall-hall-lounge",
      "name": "Hale Hall Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.131326031387241,
          "pitch": 0.07626226587695584,
          "rotation": 0,
          "target": "21-hale-hall-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-hale-hall-lobby-2",
      "name": "Hale Hall Lobby 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.7063306867518389,
        "pitch": 0.12103756462887816,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 2.2060253814367883,
          "pitch": 0.3073640516266707,
          "rotation": 6.283185307179586,
          "target": "21-hale-hall-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-hale-hall-hallway",
      "name": "Hale Hall Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.15290177045376474,
        "pitch": 0.43631286213094356,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -3.0043251155628035,
          "pitch": 0.4066677583888776,
          "rotation": 0.7853981633974483,
          "target": "21-hale-hall-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-hale-upstairs",
      "name": "Hale Upstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -1.5468152297301536,
        "pitch": 0.11475513090167055,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -0.6427323184849953,
          "pitch": 0.06225507193743596,
          "rotation": 3.141592653589793,
          "target": "21-hale-hall-lobby"
        },
        {
          "yaw": -1.636915457208211,
          "pitch": 0.3800028235348023,
          "rotation": 0,
          "target": "26-hale-upstairs-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-hale-upstairs-01",
      "name": "Hale Upstairs-01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.9550865878913157,
        "pitch": 0.08979876461178904,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 0.037764261244083386,
          "pitch": 0.14487328273161282,
          "rotation": 0,
          "target": "28-hale-room-front"
        },
        {
          "yaw": 1.5691589806727722,
          "pitch": 0.48635021814316914,
          "rotation": 0,
          "target": "25-hale-upstairs"
        },
        {
          "yaw": 2.7946599166995885,
          "pitch": 0.14802463955550493,
          "rotation": 4.71238898038469,
          "target": "29-hale-community-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-hale-room",
      "name": "Hale Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8470371692949783,
          "pitch": 0.32531243764959505,
          "rotation": 0,
          "target": "28-hale-room-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-hale-room-front",
      "name": "Hale Room Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.3623224576912145,
        "pitch": -0.028072584790216126,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 1.9005182081099008,
          "pitch": 0.3964634091723447,
          "rotation": 0,
          "target": "27-hale-room"
        },
        {
          "yaw": -1.4697530454539613,
          "pitch": 0.15420170372027542,
          "rotation": 0,
          "target": "26-hale-upstairs-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-hale-community-bathroom",
      "name": "Hale Community Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9150982217617667,
          "pitch": 0.15645487455071105,
          "rotation": 0,
          "target": "26-hale-upstairs-01"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5828946601258531,
          "pitch": 0.2579244261496374,
          "title": "Hale Community Shower",
          "text": "This is one of many community showers in Hale Hall. Hale is Jack &amp; Jill style meaning that each room shares a shower and sink with the room adjacent."
        }
      ]
    },
    {
      "id": "30-new-hall-entrance",
      "name": "New Hall Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.116493779404804,
          "pitch": 0.4169912379469416,
          "rotation": 0,
          "target": "0-tennessee-state-university"
        },
        {
          "yaw": 0.03328583652118411,
          "pitch": 0.007273032293767301,
          "rotation": 0,
          "target": "31-new-hall-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-new-hall-lobby",
      "name": "New Hall Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.080566069236543,
          "pitch": 0.08452073531846693,
          "rotation": 0,
          "target": "30-new-hall-entrance"
        },
        {
          "yaw": 1.4543564525598507,
          "pitch": 0.45122333426037287,
          "rotation": 0,
          "target": "33-new-hall-lounge"
        },
        {
          "yaw": -1.4360482721790877,
          "pitch": 0.12941183254184807,
          "rotation": 0,
          "target": "35-new-hall-food-area"
        },
        {
          "yaw": -0.1549888870562519,
          "pitch": 0.15961500084338098,
          "rotation": 0.7853981633974483,
          "target": "32-new-hall-lobby-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-new-hall-lobby-2",
      "name": "New Hall Lobby 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 1.0407585055578572,
        "pitch": 0.15209190923496152,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -2.863742449501249,
          "pitch": 0.28070040130161367,
          "rotation": 0,
          "target": "31-new-hall-lobby"
        },
        {
          "yaw": 1.2048537069910275,
          "pitch": 0.375119147661378,
          "rotation": 0,
          "target": "38-new-hall-elevator"
        },
        {
          "yaw": 0.4672212440687744,
          "pitch": 0.34274957711458853,
          "rotation": 5.497787143782138,
          "target": "34-new-hall-lounge-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-new-hall-lounge",
      "name": "New Hall Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.700443918043474,
          "pitch": 0.3453919602393931,
          "rotation": 0,
          "target": "31-new-hall-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-new-hall-lounge-2",
      "name": "New Hall Lounge 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.113565457762494,
          "pitch": 0.18204465465413655,
          "rotation": 10.995574287564278,
          "target": "32-new-hall-lobby-2"
        },
        {
          "yaw": 0.8731413037888291,
          "pitch": 0.35520382313990595,
          "rotation": 4.71238898038469,
          "target": "38-new-hall-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-new-hall-food-area",
      "name": "New Hall Food Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.020008828680183,
          "pitch": 0.09451854171653196,
          "rotation": 0,
          "target": "36-new-hall-food-area-1"
        },
        {
          "yaw": -0.10437711047437759,
          "pitch": 0.06063247568322261,
          "rotation": 0,
          "target": "31-new-hall-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-new-hall-food-area-1",
      "name": "New Hall Food Area 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3830914892381756,
          "pitch": 0.23389465003269194,
          "rotation": 0,
          "target": "35-new-hall-food-area"
        },
        {
          "yaw": 1.6813853766883788,
          "pitch": 0.377027539038469,
          "rotation": 0,
          "target": "37-new-hall-food-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-new-hall-food-area-2",
      "name": "New Hall Food Area 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7076457790742232,
          "pitch": 0.2373230112290372,
          "rotation": 0,
          "target": "36-new-hall-food-area-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-new-hall-elevator",
      "name": "New Hall Elevator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5260948261763723,
          "pitch": 0.11956212097195618,
          "rotation": 0,
          "target": "39-new-hall-upstairs"
        },
        {
          "yaw": -1.1728867507310454,
          "pitch": 0.2911377666423043,
          "rotation": 0.7853981633974483,
          "target": "34-new-hall-lounge-2"
        },
        {
          "yaw": -1.6742974494236336,
          "pitch": 0.3099355256080898,
          "rotation": 5.497787143782138,
          "target": "32-new-hall-lobby-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-new-hall-upstairs",
      "name": "New Hall Upstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.76357619583764,
          "pitch": 0.0767252659649138,
          "rotation": 3.141592653589793,
          "target": "38-new-hall-elevator"
        },
        {
          "yaw": 1.65397140407278,
          "pitch": 0.1489077308171627,
          "rotation": 0,
          "target": "40-new-hall-upstairs-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-new-hall-upstairs-01",
      "name": "New Hall Upstairs-01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5111864620981859,
          "pitch": 0.4542717218227903,
          "rotation": 0,
          "target": "39-new-hall-upstairs"
        },
        {
          "yaw": -2.921180685728256,
          "pitch": 0.37104176269371436,
          "rotation": 1.5707963267948966,
          "target": "41-new-hall-room"
        },
        {
          "yaw": -0.5041141725290537,
          "pitch": 0.47866776114732446,
          "rotation": 4.71238898038469,
          "target": "42-new-hall-community-shower-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-new-hall-room",
      "name": "New Hall Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.939527006645676,
          "pitch": 0.17692159722383316,
          "rotation": 0,
          "target": "40-new-hall-upstairs-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-new-hall-community-shower-01",
      "name": "New Hall Community Shower-01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5642241029990558,
          "pitch": 0.6642004164450075,
          "rotation": 0,
          "target": "40-new-hall-upstairs-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-eppse-entrance",
      "name": "Eppse Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.593324450083351,
          "pitch": 0.22701310491673787,
          "rotation": 0,
          "target": "0-tennessee-state-university"
        },
        {
          "yaw": 0.0572400751136346,
          "pitch": -0.024900169340455136,
          "rotation": 0,
          "target": "45-eppse-lobby-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-eppse-lobby",
      "name": "Eppse Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04306300164346588,
          "pitch": 0.47994771425328864,
          "rotation": 0,
          "target": "45-eppse-lobby-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-eppse-lobby-2",
      "name": "Eppse Lobby 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 3.1029362378478744,
        "pitch": 0.05232698010169301,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 2.947129102365963,
          "pitch": 0.12653590326126007,
          "rotation": 0,
          "target": "43-eppse-entrance"
        },
        {
          "yaw": -2.8172355899155264,
          "pitch": 0.2509766732171279,
          "rotation": 1.5707963267948966,
          "target": "44-eppse-lobby"
        },
        {
          "yaw": 2.8026869825632907,
          "pitch": 0.24802459765900586,
          "rotation": 4.71238898038469,
          "target": "46-eppse-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-eppse-hallway",
      "name": "Eppse Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0108971176156327,
          "pitch": 0.3311469665120512,
          "rotation": 0.7853981633974483,
          "target": "45-eppse-lobby-2"
        },
        {
          "yaw": -0.16844526485836653,
          "pitch": 0.12040521023028816,
          "rotation": 4.71238898038469,
          "target": "47-eppse-room"
        },
        {
          "yaw": -0.03531479920170533,
          "pitch": 0.12374438391982068,
          "rotation": 7.853981633974483,
          "target": "48-eppse-shower-sink-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-eppse-room",
      "name": "Eppse Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.441687002049324,
          "pitch": 0.4845804815067396,
          "rotation": 1.5707963267948966,
          "target": "46-eppse-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-eppse-shower-sink-side",
      "name": "Eppse Shower Sink Side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5335600035007175,
          "pitch": 0.4434989526438571,
          "rotation": 0.7853981633974483,
          "target": "49-eppse-shower-shower-side"
        },
        {
          "yaw": 0.034660263830282645,
          "pitch": 0.4054699837917237,
          "rotation": 0,
          "target": "46-eppse-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-eppse-shower-shower-side",
      "name": "Eppse Shower Shower Side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6210341742439613,
          "pitch": 0.48076028034635954,
          "rotation": 0,
          "target": "48-eppse-shower-sink-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-boyd-entrance",
      "name": "Boyd Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0397233112220032,
          "pitch": 0.18472994793675923,
          "rotation": 0,
          "target": "0-tennessee-state-university"
        },
        {
          "yaw": -0.1660617968709044,
          "pitch": 0.07475792373709922,
          "rotation": 0,
          "target": "51-boyd-lobby-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-boyd-lobby-4",
      "name": "Boyd Lobby 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1130221590859097,
          "pitch": 0.37524641832271044,
          "rotation": 0,
          "target": "50-boyd-entrance"
        },
        {
          "yaw": -0.17886194284283974,
          "pitch": 0.1310298629431763,
          "rotation": 0,
          "target": "52-boyd-lobby-3"
        },
        {
          "yaw": 0.9262416528434123,
          "pitch": 0.12066992298174739,
          "rotation": 0.7853981633974483,
          "target": "53-boyd-lobby-2"
        },
        {
          "yaw": -0.7953168734668097,
          "pitch": 0.11819994872733197,
          "rotation": 5.497787143782138,
          "target": "54-boyd-lobby"
        },
        {
          "yaw": -1.3937403630797256,
          "pitch": 0.17608507360230163,
          "rotation": 0,
          "target": "55-boyd-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-boyd-lobby-3",
      "name": "Boyd Lobby 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3553089830916303,
          "pitch": 0.28480912510593015,
          "rotation": 0,
          "target": "51-boyd-lobby-4"
        },
        {
          "yaw": 0.24686481837613528,
          "pitch": 0.2614209386913604,
          "rotation": 0,
          "target": "56-boyd-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-boyd-lobby-2",
      "name": "Boyd Lobby 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.872827668872967,
          "pitch": 0.4389401311628003,
          "rotation": 4.71238898038469,
          "target": "51-boyd-lobby-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-boyd-lobby",
      "name": "Boyd Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8441180902304453,
          "pitch": 0.4923797806064094,
          "rotation": 0.7853981633974483,
          "target": "51-boyd-lobby-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-boyd-lounge",
      "name": "Boyd Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9978927530638515,
          "pitch": 0.3519813409910224,
          "rotation": 0,
          "target": "51-boyd-lobby-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-boyd-upstairs",
      "name": "Boyd Upstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4040748072995175,
          "pitch": 0.1563165051570543,
          "rotation": 3.141592653589793,
          "target": "52-boyd-lobby-3"
        },
        {
          "yaw": 1.587495136907764,
          "pitch": 0.4555194761468577,
          "rotation": 0,
          "target": "57-boyd-upstairs-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-boyd-upstairs-01",
      "name": "Boyd Upstairs-01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5533021962219387,
          "pitch": 0.4453708819704456,
          "rotation": 1.5707963267948966,
          "target": "56-boyd-upstairs"
        },
        {
          "yaw": -0.02011317389459144,
          "pitch": 0.0721909649063619,
          "rotation": 4.71238898038469,
          "target": "58-boyd-room"
        },
        {
          "yaw": 3.091399837841868,
          "pitch": 0.08036972869871661,
          "rotation": 4.71238898038469,
          "target": "59-boyd-restroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-boyd-room",
      "name": "Boyd Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3799518824993786,
          "pitch": 0.22767869310111166,
          "rotation": 0,
          "target": "57-boyd-upstairs-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-boyd-restroom",
      "name": "Boyd Restroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8523610120082488,
          "pitch": 0.24255107728499326,
          "rotation": 0,
          "target": "57-boyd-upstairs-01"
        },
        {
          "yaw": 1.5054685869259172,
          "pitch": 0.4906175558707915,
          "rotation": 0,
          "target": "60-boyd-restroom-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-boyd-restroom-01",
      "name": "Boyd Restroom-01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.669619250489415,
          "pitch": 0.6146098430928006,
          "rotation": 0,
          "target": "59-boyd-restroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-watson-entrance",
      "name": "Watson Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07246388021515848,
          "pitch": -0.01996682392853799,
          "rotation": 0,
          "target": "63-watson-lounge-2"
        },
        {
          "yaw": 1.6066848252070471,
          "pitch": 0.09473543920622696,
          "rotation": 0.7853981633974483,
          "target": "0-tennessee-state-university"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-watson-lounge",
      "name": "Watson Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6450316476329352,
          "pitch": 0.14450267061082478,
          "rotation": 0,
          "target": "63-watson-lounge-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-watson-lounge-2",
      "name": "Watson Lounge 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6050882341189752,
          "pitch": 0.28022220500088935,
          "rotation": 0,
          "target": "62-watson-lounge"
        },
        {
          "yaw": 2.484078723407377,
          "pitch": 0.38856828044240643,
          "rotation": 0,
          "target": "61-watson-entrance"
        },
        {
          "yaw": -0.2741536698250808,
          "pitch": 0.20135723067312483,
          "rotation": 0,
          "target": "64-watson-elevator"
        },
        {
          "yaw": -0.7742219154630057,
          "pitch": 0.11758541965187064,
          "rotation": 4.71238898038469,
          "target": "65-watson-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-watson-elevator",
      "name": "Watson Elevator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.672453251865285,
          "pitch": 0.34996296378779235,
          "rotation": 0,
          "target": "63-watson-lounge-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-watson-hallway",
      "name": "Watson Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.120123352139803,
          "pitch": 0.5517085132097943,
          "rotation": 0,
          "target": "63-watson-lounge-2"
        },
        {
          "yaw": -0.10589224524801288,
          "pitch": 0.10485982523453075,
          "rotation": 4.71238898038469,
          "target": "66-watson-room-01"
        },
        {
          "yaw": 0.02535106678849175,
          "pitch": 0.10742953549471324,
          "rotation": 1.5707963267948966,
          "target": "67-watson-shower-sink-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "66-watson-room-01",
      "name": "Watson Room-01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.931202012409564,
          "pitch": 0.4588744430939009,
          "rotation": 0,
          "target": "65-watson-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "67-watson-shower-sink-side",
      "name": "Watson Shower Sink Side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8590110394673207,
          "pitch": 0.4023342968677266,
          "rotation": 0,
          "target": "65-watson-hallway"
        },
        {
          "yaw": -1.7266336117645764,
          "pitch": 0.47674578510324217,
          "rotation": 0,
          "target": "68-watson-shower-shower-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "68-watson-shower-shower-side",
      "name": "Watson Shower Shower Side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.596423453803042,
          "pitch": 0.5037111637202614,
          "rotation": 0,
          "target": "67-watson-shower-sink-side"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Tennessee State University Residence Hall Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
