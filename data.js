var APP_DATA = {
  "scenes": [
    {
      "id": "0-pano_chinatown_shophouse_ratio-1",
      "name": "PANO_chinatown_shophouse_ratio (1)",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.457414390250964,
        "pitch": -0.0611700751528339,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": -2.7915066323164446,
          "pitch": 0.0888057512488114,
          "rotation": 4.71238898038469,
          "target": "1-pano_duxton_roof_ratio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5974251245531512,
          "pitch": -0.28519007675657093,
          "title": "Buddah Relic Temple",
          "text": "Worth a visit.&nbsp;"
        },
        {
          "yaw": -0.8494610464927241,
          "pitch": 0.22213124038741583,
          "title": "Jaywalkers",
          "text": "Kids, do not follow.&nbsp;"
        },
        {
          "yaw": -2.8076758886831286,
          "pitch": 0.20512779132040393,
          "title": "Back to Duxton (roof)",
          "text": "This road leads you back to Duxton"
        }
      ]
    },
    {
      "id": "1-pano_duxton_roof_ratio",
      "name": "PANO_duxton_roof_ratio",
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
      "faceSize": 1343,
      "initialViewParameters": {
        "yaw": -1.7667173534977394,
        "pitch": 0.0062732570951773425,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": -1.6381282493036,
          "pitch": 0.0732843584371885,
          "rotation": 0.7853981633974483,
          "target": "0-pano_chinatown_shophouse_ratio-1"
        },
        {
          "yaw": -2.053650511017217,
          "pitch": 0.1221739559090711,
          "rotation": 3.141592653589793,
          "target": "2-pan_playground_ratio-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7826499854814077,
          "pitch": 0.21693019946507697,
          "title": "Blk 1E #49-49",
          "text": "This is my neighbor's unit"
        },
        {
          "yaw": -2.5592226883220803,
          "pitch": -0.09668593593125685,
          "title": "Security Camera",
          "text": "These cameras see everything. No hanky panky!&nbsp;"
        },
        {
          "yaw": -1.7647859135495025,
          "pitch": 0.19781626924786977,
          "title": "Direction to China Town",
          "text": "Follow this direction to lead towards chinatown.&nbsp;"
        },
        {
          "yaw": -2.133809707781417,
          "pitch": 0.21822361640122168,
          "title": "Lift to Playground",
          "text": "Take lift to ground floor playground"
        }
      ]
    },
    {
      "id": "2-pan_playground_ratio-1",
      "name": "PAN_playground_ratio (1)",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.1865608884933998,
        "pitch": -0.15245751904795313,
        "fov": 1.1989879464110744
      },
      "linkHotspots": [
        {
          "yaw": 0.2871440654672366,
          "pitch": -0.17015677104664917,
          "rotation": 0.7853981633974483,
          "target": "1-pano_duxton_roof_ratio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.749672514197199,
          "pitch": -0.9416448914723023,
          "title": "50 story HDB flat",
          "text": "take lift to 50th floor sky garden"
        },
        {
          "yaw": 1.858277286215869,
          "pitch": -0.3542365645669783,
          "title": "Essen@Duxton",
          "text": "Nice eatery at ground floor"
        },
        {
          "yaw": 1.7337352021244588,
          "pitch": 0.03366638162621527,
          "title": "Swing",
          "text": "This is a family enjoying the swing."
        },
        {
          "yaw": -2.4733233796936105,
          "pitch": -0.05570648785239385,
          "title": "Basketball court",
          "text": "sheltered court for bball"
        },
        {
          "yaw": 0.19042176485287854,
          "pitch": -0.31661341681785693,
          "title": "Back to Duxton (Roof)",
          "text": "Take lift back to roof top view."
        }
      ]
    }
  ],
  "name": "WebTour Tanjong Pagar",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
