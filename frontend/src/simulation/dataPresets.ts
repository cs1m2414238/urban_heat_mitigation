// Pre-bundled representative hotspots cache for instant offline rendering
import type { HotspotFeature, CityName } from './types';

const LEGACY_FALLBACK_HOTSPOTS: Record<CityName, HotspotFeature[]> = {
  "Delhi": [
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0001",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.79,
        "predicted_lst": 47.59,
        "city_percentile": 39.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.28,
        "ndvi": 0.355,
        "ndbi": -0.052,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.82743,
        "longitude": 77.05322
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.05321807417299,
          28.82743154080171
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0002",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.12,
        "predicted_lst": 46.23,
        "city_percentile": 19.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.35,
        "ndbi": -0.004,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.5485,
        "longitude": 76.92602
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.92601662994167,
          28.5485046450826
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0003",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.03,
        "predicted_lst": 47.35,
        "city_percentile": 67.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.92,
        "ndvi": 0.423,
        "ndbi": -0.085,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.43963,
        "longitude": 76.94003
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.94003034837394,
          28.439628832647315
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0004",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.35,
        "predicted_lst": 48.95,
        "city_percentile": 72.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.11,
        "ndvi": 0.183,
        "ndbi": 0.071,
        "dist_to_veg": 161.6,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.88861,
        "longitude": 77.06696
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.06696229802002,
          28.88860681165025
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0005",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.55,
        "predicted_lst": 48.55,
        "city_percentile": 58.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.325,
        "ndbi": 0.025,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.45849,
        "longitude": 76.89691
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.89691121473619,
          28.458493453613823
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0006",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.95,
        "predicted_lst": 48.73,
        "city_percentile": 44.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.43,
        "ndvi": 0.24,
        "ndbi": 0.029,
        "dist_to_veg": 153.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.7668,
        "longitude": 76.94946
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.94946265885719,
          28.766795259123644
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0007",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.11,
        "predicted_lst": 47.56,
        "city_percentile": 19.3,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.64,
        "ndvi": 0.238,
        "ndbi": 0.102,
        "dist_to_veg": 240.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.47332,
        "longitude": 77.11143
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.11142890458393,
          28.4733156558018
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0008",
        "city": "Delhi",
        "severity": "Severe",
        "lst": 52.52,
        "predicted_lst": 48.5,
        "city_percentile": 84.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.37,
        "ndvi": 0.29,
        "ndbi": -0.008,
        "dist_to_veg": 174.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.7641,
        "longitude": 77.01657
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.01656681058091,
          28.764100313271285
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0009",
        "city": "Delhi",
        "severity": "Severe",
        "lst": 52.84,
        "predicted_lst": 54.86,
        "city_percentile": 87.3,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.92,
        "ndvi": 0.179,
        "ndbi": 0.121,
        "dist_to_veg": 349.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.43154,
        "longitude": 76.88236
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.88235850713346,
          28.43154399509024
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0010",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.5,
        "predicted_lst": 49.08,
        "city_percentile": 57.6,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.99,
        "ndvi": 0.297,
        "ndbi": 0.067,
        "dist_to_veg": 494.8,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.54419,
        "longitude": 76.92763
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.92763359745308,
          28.544192731718827
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0011",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.03,
        "predicted_lst": 48.07,
        "city_percentile": 46.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.11,
        "ndvi": 0.258,
        "ndbi": 0.024,
        "dist_to_veg": 228.5,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.86759,
        "longitude": 77.07639
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.07639460850328,
          28.86758623400185
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0012",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.31,
        "predicted_lst": 49.67,
        "city_percentile": 71.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.372,
        "ndbi": -0.054,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.47116,
        "longitude": 76.90527
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.90526554687851,
          28.471159699119912
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0013",
        "city": "Delhi",
        "severity": "Severe",
        "lst": 53.92,
        "predicted_lst": 50.99,
        "city_percentile": 94.3,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.99,
        "ndvi": 0.27,
        "ndbi": 0.062,
        "dist_to_veg": 182.5,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.4655,
        "longitude": 76.8802
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.88020255045157,
          28.46550031282996
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0014",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.82,
        "predicted_lst": 45.64,
        "city_percentile": 40.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.84,
        "ndvi": 0.407,
        "ndbi": -0.077,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.58516,
        "longitude": 76.94623
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.94622872383435,
          28.58515590867468
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0015",
        "city": "Delhi",
        "severity": "High",
        "lst": 50.66,
        "predicted_lst": 48.36,
        "city_percentile": 60.6,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.55,
        "ndvi": 0.142,
        "ndbi": 0.141,
        "dist_to_veg": 335.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.6978,
        "longitude": 76.8449
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.84489875978568,
          28.697804645303265
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0016",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.71,
        "predicted_lst": 47.62,
        "city_percentile": 37.2,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.64,
        "ndvi": 0.212,
        "ndbi": 0.07,
        "dist_to_veg": 241.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.49137,
        "longitude": 77.1117
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.11169839916917,
          28.4913717930126
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0017",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.88,
        "predicted_lst": 47.22,
        "city_percentile": 42.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.37,
        "ndvi": 0.399,
        "ndbi": -0.072,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.75709,
        "longitude": 77.0004
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.00039713546677,
          28.757093454055155
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0018",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.66,
        "predicted_lst": 50.54,
        "city_percentile": 35.6,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.8,
        "ndvi": 0.24,
        "ndbi": 0.054,
        "dist_to_veg": 390.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.40783,
        "longitude": 76.97884
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.97883756864789,
          28.40782847158949
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0019",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.71,
        "predicted_lst": 47.52,
        "city_percentile": 5.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.11,
        "ndvi": 0.289,
        "ndbi": -0.021,
        "dist_to_veg": 210.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.89022,
        "longitude": 77.05268
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.05267908500252,
          28.89022377916167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0020",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.1,
        "predicted_lst": 47.21,
        "city_percentile": 19.0,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.55,
        "ndvi": 0.229,
        "ndbi": 0.036,
        "dist_to_veg": 446.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.6652,
        "longitude": 76.84813
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.84813269480851,
          28.665195800489727
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0021",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.75,
        "predicted_lst": 50.09,
        "city_percentile": 77.6,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.37,
        "ndvi": 0.301,
        "ndbi": -0.022,
        "dist_to_veg": 524.8,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.75548,
        "longitude": 76.95404
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.9540440668062,
          28.75547648654374
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0022",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.01,
        "predicted_lst": 48.11,
        "city_percentile": 16.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.51,
        "ndvi": 0.328,
        "ndbi": 0.044,
        "dist_to_veg": 169.7,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.45795,
        "longitude": 77.27932
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.27932403118588,
          28.45795446444336
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0023",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.89,
        "predicted_lst": 48.5,
        "city_percentile": 12.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.65,
        "ndvi": 0.277,
        "ndbi": 0.041,
        "dist_to_veg": 351.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.4151,
        "longitude": 77.27232
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.27231717196975,
          28.41510482539085
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0024",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.12,
        "predicted_lst": 50.15,
        "city_percentile": 48.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.92,
        "ndvi": 0.271,
        "ndbi": 0.004,
        "dist_to_veg": 192.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.44771,
        "longitude": 76.93787
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.93787439169205,
          28.44771367020439
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0025",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.71,
        "predicted_lst": 48.21,
        "city_percentile": 77.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.33,
        "ndvi": 0.139,
        "ndbi": 0.054,
        "dist_to_veg": 212.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.73041,
        "longitude": 77.185
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.18500092635333,
          28.730413490116806
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0026",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.47,
        "predicted_lst": 48.22,
        "city_percentile": 30.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.43,
        "ndvi": 0.268,
        "ndbi": 0.02,
        "dist_to_veg": 180.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.83444,
        "longitude": 76.92224
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.92224370574837,
          28.834438400017845
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0027",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.47,
        "predicted_lst": 51.59,
        "city_percentile": 74.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.8,
        "ndvi": 0.249,
        "ndbi": 0.064,
        "dist_to_veg": 174.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.42615,
        "longitude": 76.97318
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.97317818235794,
          28.426154103385525
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0028",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.74,
        "predicted_lst": 49.26,
        "city_percentile": 77.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.43,
        "ndvi": 0.249,
        "ndbi": 0.048,
        "dist_to_veg": 365.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.81423,
        "longitude": 76.93383
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.93383197291351,
          28.81422630612516
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0029",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.29,
        "predicted_lst": 48.35,
        "city_percentile": 71.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.8,
        "ndvi": 0.232,
        "ndbi": 0.021,
        "dist_to_veg": 241.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.43882,
        "longitude": 77.01818
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.01818377809234,
          28.438820348891607
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0030",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.03,
        "predicted_lst": 47.62,
        "city_percentile": 17.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.51,
        "ndvi": 0.293,
        "ndbi": -0.011,
        "dist_to_veg": 258.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.49541,
        "longitude": 77.30196
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.30196157634569,
          28.49541421179114
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0031",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.64,
        "predicted_lst": 47.55,
        "city_percentile": 3.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.29,
        "ndvi": 0.236,
        "ndbi": 0.028,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.87486,
        "longitude": 76.87481
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.87481265874686,
          28.874862587803225
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0032",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.94,
        "predicted_lst": 46.11,
        "city_percentile": 13.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.64,
        "ndvi": 0.287,
        "ndbi": 0.016,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 5.4,
        "building_density": 0,
        "latitude": 28.50377,
        "longitude": 77.11601
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.11601031253295,
          28.50376854393345
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0033",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.86,
        "predicted_lst": 45.99,
        "city_percentile": 11.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.61,
        "ndvi": 0.265,
        "ndbi": 0.003,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.73041,
        "longitude": 76.88721
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.8872094096677,
          28.730413490116806
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0034",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.57,
        "predicted_lst": 47.15,
        "city_percentile": 33.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.42,
        "ndbi": -0.086,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.48356,
        "longitude": 76.86134
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.86133792948506,
          28.48355645004076
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0035",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.05,
        "predicted_lst": 49.95,
        "city_percentile": 46.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.37,
        "ndvi": 0.327,
        "ndbi": 0.028,
        "dist_to_veg": 234.3,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.75521,
        "longitude": 77.00282
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.00282258673388,
          28.755206991958502
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0036",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.17,
        "predicted_lst": 48.55,
        "city_percentile": 21.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.37,
        "ndvi": 0.297,
        "ndbi": -0.028,
        "dist_to_veg": 169.7,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.81692,
        "longitude": 76.99501
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.99500724376205,
          28.816921251977515
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0037",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.37,
        "predicted_lst": 48.7,
        "city_percentile": 27.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.37,
        "ndvi": 0.322,
        "ndbi": 0.003,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.84522,
        "longitude": 77.00713
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.00713450009766,
          28.84521818342728
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0038",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.35,
        "predicted_lst": 48.81,
        "city_percentile": 27.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.51,
        "ndvi": 0.229,
        "ndbi": 0.02,
        "dist_to_veg": 283.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.52721,
        "longitude": 77.31463
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.31462782185177,
          28.52721457284897
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0039",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.23,
        "predicted_lst": 46.57,
        "city_percentile": 51.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.84,
        "ndvi": 0.396,
        "ndbi": -0.019,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.57842,
        "longitude": 76.93895
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.938952370033,
          28.57841854404378
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0040",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.41,
        "predicted_lst": 49.3,
        "city_percentile": 55.8,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.29,
        "ndvi": 0.202,
        "ndbi": 0.092,
        "dist_to_veg": 212.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.88537,
        "longitude": 76.89907
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.89906717141808,
          28.88537287662742
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0041",
        "city": "Delhi",
        "severity": "Severe",
        "lst": 52.0,
        "predicted_lst": 50.69,
        "city_percentile": 80.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.8,
        "ndvi": 0.13,
        "ndbi": 0.1,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.40513,
        "longitude": 76.96348
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.96347637728945,
          28.405133525737124
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0042",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.87,
        "predicted_lst": 48.64,
        "city_percentile": 42.1,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.28,
        "ndvi": 0.309,
        "ndbi": 0.052,
        "dist_to_veg": 120.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.7738,
        "longitude": 77.14107
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.14107330895988,
          28.773802118339777
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0043",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.59,
        "predicted_lst": 50.52,
        "city_percentile": 59.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.92,
        "ndvi": 0.205,
        "ndbi": 0.033,
        "dist_to_veg": 123.7,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.4275,
        "longitude": 76.94623
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.94622872383435,
          28.427501576311705
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0044",
        "city": "Delhi",
        "severity": "Severe",
        "lst": 53.33,
        "predicted_lst": 46.08,
        "city_percentile": 91.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.65,
        "ndvi": 0.227,
        "ndbi": -0.062,
        "dist_to_veg": 212.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.40136,
        "longitude": 77.26181
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.26180688314554,
          28.401360601543825
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0045",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.64,
        "predicted_lst": 49.1,
        "city_percentile": 3.4,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.43,
        "ndvi": 0.132,
        "ndbi": 0.087,
        "dist_to_veg": 297.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.82555,
        "longitude": 76.91874
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.9187402761403,
          28.825545078705066
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0046",
        "city": "Delhi",
        "severity": "Severe",
        "lst": 54.19,
        "predicted_lst": 52.44,
        "city_percentile": 95.2,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.99,
        "ndvi": 0.27,
        "ndbi": 0.093,
        "dist_to_veg": 234.3,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.45715,
        "longitude": 76.8864
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.886400925912,
          28.457145980687645
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0047",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.12,
        "predicted_lst": 47.34,
        "city_percentile": 19.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.92,
        "ndvi": 0.434,
        "ndbi": -0.098,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.43936,
        "longitude": 76.93814
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.93814388627729,
          28.43935933806208
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0048",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.69,
        "predicted_lst": 47.28,
        "city_percentile": 5.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.16,
        "ndvi": 0.256,
        "ndbi": 0.027,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.81369,
        "longitude": 77.15266
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.15266157612503,
          28.813687316954685
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0049",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.03,
        "predicted_lst": 47.94,
        "city_percentile": 46.2,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.84,
        "ndvi": 0.359,
        "ndbi": -0.039,
        "dist_to_veg": 402.5,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.57249,
        "longitude": 76.89826
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.89825868766238,
          28.5724896631686
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0050",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.2,
        "predicted_lst": 49.03,
        "city_percentile": 50.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.328,
        "ndbi": 0.018,
        "dist_to_veg": 120.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.46146,
        "longitude": 76.8864
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.886400925912,
          28.46145789405142
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0051",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.27,
        "predicted_lst": 47.97,
        "city_percentile": 24.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.61,
        "ndvi": 0.294,
        "ndbi": 0.011,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.67032,
        "longitude": 76.92332
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.92332168408932,
          28.67031619760921
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0052",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.45,
        "predicted_lst": 46.94,
        "city_percentile": 56.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.65,
        "ndvi": 0.249,
        "ndbi": 0.018,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.40082,
        "longitude": 77.26019
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.26018991563413,
          28.40082161237336
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0053",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.31,
        "predicted_lst": 46.31,
        "city_percentile": 25.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.67,
        "ndvi": 0.347,
        "ndbi": 0.008,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.41268,
        "longitude": 77.12679
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.12679009594238,
          28.41267937412373
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0054",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.33,
        "predicted_lst": 49.97,
        "city_percentile": 71.8,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.18,
        "ndvi": 0.178,
        "ndbi": 0.08,
        "dist_to_veg": 210.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.89858,
        "longitude": 77.03678
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0367789044736,
          28.89857811130398
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0055",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.37,
        "predicted_lst": 47.75,
        "city_percentile": 27.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.43,
        "ndvi": 0.22,
        "ndbi": 0.03,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.79617,
        "longitude": 76.93599
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.9359879295954,
          28.796170168914355
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0056",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.43,
        "predicted_lst": 47.98,
        "city_percentile": 29.1,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.51,
        "ndvi": 0.147,
        "ndbi": 0.093,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.47089,
        "longitude": 77.30412
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.30411753302758,
          28.47089020453468
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0057",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.55,
        "predicted_lst": 49.05,
        "city_percentile": 58.5,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.43,
        "ndvi": 0.338,
        "ndbi": -0.044,
        "dist_to_veg": 454.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.75952,
        "longitude": 76.94299
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.94299478881153,
          28.75951890532228
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0058",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.45,
        "predicted_lst": 48.63,
        "city_percentile": 73.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.37,
        "ndvi": 0.206,
        "ndbi": 0.042,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.78243,
        "longitude": 76.96213
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.96212890436327,
          28.782425945067324
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0059",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.69,
        "predicted_lst": 46.65,
        "city_percentile": 5.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.51,
        "ndvi": 0.333,
        "ndbi": -0.022,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.52398,
        "longitude": 77.29657
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.29657168464097,
          28.52398063782614
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0060",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.82,
        "predicted_lst": 46.83,
        "city_percentile": 10.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.28,
        "ndvi": 0.347,
        "ndbi": -0.056,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.78755,
        "longitude": 77.10793
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.10792547497587,
          28.787546342186808
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0061",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.08,
        "predicted_lst": 49.35,
        "city_percentile": 18.4,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.18,
        "ndvi": 0.229,
        "ndbi": 0.069,
        "dist_to_veg": 174.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.88349,
        "longitude": 76.99986
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.99985814629629,
          28.88348641453077
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0062",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.09,
        "predicted_lst": 48.93,
        "city_percentile": 47.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.37,
        "ndvi": 0.321,
        "ndbi": -0.039,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.83848,
        "longitude": 76.97237
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.97236969860224,
          28.838480818796384
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0063",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.55,
        "predicted_lst": 50.32,
        "city_percentile": 32.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.92,
        "ndvi": 0.377,
        "ndbi": -0.021,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.42885,
        "longitude": 76.94057
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.9405693375444,
          28.428849049237883
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0064",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.6,
        "predicted_lst": 48.13,
        "city_percentile": 1.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.28,
        "ndvi": 0.303,
        "ndbi": -0.04,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.7994,
        "longitude": 77.11736
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.11735778545912,
          28.799404103937185
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0065",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.02,
        "predicted_lst": 49.09,
        "city_percentile": 45.9,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.43,
        "ndvi": 0.238,
        "ndbi": 0.071,
        "dist_to_veg": 711.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.81315,
        "longitude": 76.89556
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.89556374181002,
          28.81314832778421
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0066",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.14,
        "predicted_lst": 46.53,
        "city_percentile": 20.3,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.64,
        "ndvi": 0.261,
        "ndbi": 0.12,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.40702,
        "longitude": 77.16102
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.16101590826733,
          28.407019987833777
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0067",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.2,
        "predicted_lst": 49.4,
        "city_percentile": 22.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.92,
        "ndvi": 0.363,
        "ndbi": -0.038,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.42885,
        "longitude": 76.94003
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.94003034837394,
          28.428849049237883
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0068",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.59,
        "predicted_lst": 47.14,
        "city_percentile": 1.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.61,
        "ndvi": 0.293,
        "ndbi": 0.009,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.71344,
        "longitude": 76.8926
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.89259930137243,
          28.713435331246945
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0069",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.76,
        "predicted_lst": 45.04,
        "city_percentile": 7.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.16,
        "ndvi": 0.36,
        "ndbi": -0.056,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.7668,
        "longitude": 77.15643
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.15643450031833,
          28.766795259123644
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0070",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.8,
        "predicted_lst": 47.05,
        "city_percentile": 9.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.51,
        "ndvi": 0.246,
        "ndbi": 0.041,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.46388,
        "longitude": 77.30196
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.30196157634569,
          28.463883345318543
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0071",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.04,
        "predicted_lst": 49.19,
        "city_percentile": 17.2,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.61,
        "ndvi": 0.141,
        "ndbi": 0.071,
        "dist_to_veg": 523.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.72071,
        "longitude": 76.91955
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.919548759896,
          28.720711685048315
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0072",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.35,
        "predicted_lst": 49.11,
        "city_percentile": 54.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.37,
        "ndvi": 0.351,
        "ndbi": -0.028,
        "dist_to_veg": 268.3,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.84225,
        "longitude": 77.03489
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.03489244237696,
          28.842253742989683
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0073",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.82,
        "predicted_lst": 49.37,
        "city_percentile": 10.1,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.51,
        "ndvi": 0.275,
        "ndbi": 0.106,
        "dist_to_veg": 384.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.45256,
        "longitude": 77.27124
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.2712391936288,
          28.45256457273864
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0074",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.08,
        "predicted_lst": 48.33,
        "city_percentile": 47.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.51,
        "ndvi": 0.194,
        "ndbi": 0.026,
        "dist_to_veg": 318.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.5132,
        "longitude": 77.31867
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.31867024063031,
          28.513200854416706
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0075",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.62,
        "predicted_lst": 49.14,
        "city_percentile": 2.7,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.18,
        "ndvi": 0.191,
        "ndbi": 0.086,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.89858,
        "longitude": 76.97803
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.97802908489219,
          28.89857811130398
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0076",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.75,
        "predicted_lst": 48.32,
        "city_percentile": 7.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.43,
        "ndvi": 0.274,
        "ndbi": 0.017,
        "dist_to_veg": 351.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.76976,
        "longitude": 76.86215
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.86214641324077,
          28.76975969956124
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0077",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.82,
        "predicted_lst": 47.72,
        "city_percentile": 40.9,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.51,
        "ndvi": 0.256,
        "ndbi": 0.088,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.49272,
        "longitude": 77.28525
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.28525291206107,
          28.49271926593877
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0078",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.72,
        "predicted_lst": 47.75,
        "city_percentile": 6.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.43,
        "ndvi": 0.33,
        "ndbi": -0.011,
        "dist_to_veg": 276.6,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.76976,
        "longitude": 76.86619
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.8661888320193,
          28.76975969956124
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0079",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.59,
        "predicted_lst": 48.48,
        "city_percentile": 1.5,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.43,
        "ndvi": 0.307,
        "ndbi": -0.017,
        "dist_to_veg": 690.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.79536,
        "longitude": 76.9306
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.93059803789068,
          28.79536168515865
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0080",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.7,
        "predicted_lst": 49.15,
        "city_percentile": 76.9,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.33,
        "ndvi": 0.149,
        "ndbi": 0.079,
        "dist_to_veg": 301.5,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.72907,
        "longitude": 77.18608
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.18607890469427,
          28.729066017190625
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0081",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.46,
        "predicted_lst": 47.79,
        "city_percentile": 56.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.29,
        "ndvi": 0.352,
        "ndbi": -0.015,
        "dist_to_veg": 120.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.87783,
        "longitude": 76.87535
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.87535164791733,
          28.87782702824082
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0082",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.95,
        "predicted_lst": 46.76,
        "city_percentile": 14.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.255,
        "ndbi": 0.009,
        "dist_to_veg": 308.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.53368,
        "longitude": 76.93033
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.93032854330544,
          28.53368244289463
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0083",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.28,
        "predicted_lst": 47.16,
        "city_percentile": 52.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.84,
        "ndvi": 0.263,
        "ndbi": -0.044,
        "dist_to_veg": 366.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.63501,
        "longitude": 76.87212
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.8721177128945,
          28.63501240694331
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0084",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.76,
        "predicted_lst": 46.44,
        "city_percentile": 7.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.41,
        "ndvi": 0.329,
        "ndbi": -0.019,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.56306,
        "longitude": 77.3211
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.32109569189744,
          28.563057352685338
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0085",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.99,
        "predicted_lst": 47.27,
        "city_percentile": 15.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.51,
        "ndvi": 0.234,
        "ndbi": -0.008,
        "dist_to_veg": 228.5,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.51886,
        "longitude": 77.29846
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.29845814673762,
          28.51886024070666
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0086",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.86,
        "predicted_lst": 47.83,
        "city_percentile": 78.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.318,
        "ndbi": 0.011,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.46523,
        "longitude": 76.88209
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.88208901254822,
          28.465230818244724
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0087",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.17,
        "predicted_lst": 46.79,
        "city_percentile": 49.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.37,
        "ndvi": 0.397,
        "ndbi": -0.048,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.75251,
        "longitude": 77.0233
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.02330417521182,
          28.752512046106144
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0088",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.93,
        "predicted_lst": 47.5,
        "city_percentile": 13.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.5,
        "ndvi": 0.254,
        "ndbi": 0.035,
        "dist_to_veg": 161.6,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.83579,
        "longitude": 76.84759
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.84759370563803,
          28.835785872944022
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0089",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.53,
        "predicted_lst": 47.49,
        "city_percentile": 74.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.84,
        "ndvi": 0.206,
        "ndbi": 0.042,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.60537,
        "longitude": 76.92683
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.92682511369738,
          28.605368002567367
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0090",
        "city": "Delhi",
        "severity": "High",
        "lst": 51.21,
        "predicted_lst": 50.57,
        "city_percentile": 69.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.92,
        "ndvi": 0.287,
        "ndbi": -0.009,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.40864,
        "longitude": 76.9023
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.90230110644092,
          28.40863695534519
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0091",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.71,
        "predicted_lst": 47.8,
        "city_percentile": 5.8,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.43,
        "ndvi": 0.268,
        "ndbi": -0.017,
        "dist_to_veg": 740.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.83228,
        "longitude": 76.86861
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.86861428328643,
          28.83228244333596
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0092",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.84,
        "predicted_lst": 48.92,
        "city_percentile": 10.6,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.43,
        "ndvi": 0.105,
        "ndbi": 0.099,
        "dist_to_veg": 361.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.8277,
        "longitude": 76.92844
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.92844208120879,
          28.827701035386948
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0093",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.54,
        "predicted_lst": 47.08,
        "city_percentile": 32.2,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.67,
        "ndvi": 0.258,
        "ndbi": 0.118,
        "dist_to_veg": 276.6,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.44933,
        "longitude": 77.12625
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.1262511067719,
          28.449330637715807
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0094",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.83,
        "predicted_lst": 47.58,
        "city_percentile": 10.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.41,
        "ndvi": 0.356,
        "ndbi": -0.032,
        "dist_to_veg": 84.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.56306,
        "longitude": 77.33268
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.33268395906258,
          28.563057352685338
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0095",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.06,
        "predicted_lst": 48.46,
        "city_percentile": 18.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.377,
        "ndbi": -0.037,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.45472,
        "longitude": 76.91362
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.91361987902081,
          28.454720529420523
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0096",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.39,
        "predicted_lst": 48.36,
        "city_percentile": 28.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.64,
        "ndvi": 0.228,
        "ndbi": 0.096,
        "dist_to_veg": 127.3,
        "impervious_surface_ratio": 4.7,
        "building_density": 6,
        "latitude": 28.52317,
        "longitude": 77.12086
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.1208612150672,
          28.52317215407043
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0097",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.29,
        "predicted_lst": 50.54,
        "city_percentile": 25.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.8,
        "ndvi": 0.226,
        "ndbi": 0.062,
        "dist_to_veg": 276.6,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.4178,
        "longitude": 76.99905
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.99904966254059,
          28.41779977124321
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0098",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.49,
        "predicted_lst": 47.86,
        "city_percentile": 30.6,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.51,
        "ndvi": 0.295,
        "ndbi": -0.043,
        "dist_to_veg": 600.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.52156,
        "longitude": 77.31678
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.31678377853366,
          28.521555186559016
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0099",
        "city": "Delhi",
        "severity": "High",
        "lst": 50.7,
        "predicted_lst": 47.7,
        "city_percentile": 61.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.8,
        "ndvi": 0.338,
        "ndbi": -0.006,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.43262,
        "longitude": 76.97021
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.97021374192035,
          28.432621973431186
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0100",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.05,
        "predicted_lst": 48.75,
        "city_percentile": 46.8,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.37,
        "ndvi": 0.186,
        "ndbi": 0.052,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.82231,
        "longitude": 76.97614
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.97614262279554,
          28.82231114368223
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0101",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.31,
        "predicted_lst": 47.53,
        "city_percentile": 25.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.43,
        "ndvi": 0.237,
        "ndbi": 0.036,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.81962,
        "longitude": 76.89583
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.89583323639525,
          28.81961619782988
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0102",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 50.46,
        "predicted_lst": 48.15,
        "city_percentile": 56.8,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.61,
        "ndvi": 0.278,
        "ndbi": 0.015,
        "dist_to_veg": 785.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.6563,
        "longitude": 76.92197
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.92197421116313,
          28.656302479176944
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0103",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.64,
        "predicted_lst": 46.37,
        "city_percentile": 35.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.28,
        "ndvi": 0.446,
        "ndbi": -0.109,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.82123,
        "longitude": 77.07154
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.07154370596903,
          28.821233165341287
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0104",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.34,
        "predicted_lst": 49.0,
        "city_percentile": 26.7,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.43,
        "ndvi": 0.2,
        "ndbi": 0.085,
        "dist_to_veg": 400.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.76895,
        "longitude": 76.874
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.87400417499114,
          28.768951215805533
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0105",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.85,
        "predicted_lst": 47.72,
        "city_percentile": 10.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.37,
        "ndvi": 0.236,
        "ndbi": 0.023,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.82123,
        "longitude": 76.97453
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.97452565528413,
          28.821233165341287
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0106",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.41,
        "predicted_lst": 47.17,
        "city_percentile": 28.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.51,
        "ndvi": 0.23,
        "ndbi": 0.021,
        "dist_to_veg": 120.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.50727,
        "longitude": 77.28552
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.28552240664631,
          28.50727197354152
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0107",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.97,
        "predicted_lst": 46.56,
        "city_percentile": 14.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.84,
        "ndvi": 0.41,
        "ndbi": -0.057,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.61049,
        "longitude": 76.87912
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.87912457211063,
          28.610488399686847
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0108",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.25,
        "predicted_lst": 48.34,
        "city_percentile": 24.0,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.59,
        "ndvi": 0.234,
        "ndbi": 0.066,
        "dist_to_veg": 421.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.68325,
        "longitude": 77.00228
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.00228359756342,
          28.68325193770053
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0109",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.01,
        "predicted_lst": 47.29,
        "city_percentile": 16.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.5,
        "ndvi": 0.254,
        "ndbi": 0.011,
        "dist_to_veg": 153.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.83498,
        "longitude": 76.84867
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.84867168397898,
          28.83497738918832
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0110",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.83,
        "predicted_lst": 45.67,
        "city_percentile": 10.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.64,
        "ndvi": 0.335,
        "ndbi": 0.014,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 1.6,
        "building_density": 0,
        "latitude": 28.50134,
        "longitude": 77.11466
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.11466283960677,
          28.50134309266633
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0111",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.7,
        "predicted_lst": 49.6,
        "city_percentile": 36.8,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.51,
        "ndvi": 0.204,
        "ndbi": 0.059,
        "dist_to_veg": 256.3,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.52425,
        "longitude": 77.30843
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.30842944639134,
          28.52425013241137
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0112",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.92,
        "predicted_lst": 48.97,
        "city_percentile": 13.6,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 32.61,
        "ndvi": 0.226,
        "ndbi": 0.082,
        "dist_to_veg": 349.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.73661,
        "longitude": 76.90284
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.90284009561138,
          28.73661186557723
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0113",
        "city": "Delhi",
        "severity": "Severe",
        "lst": 53.07,
        "predicted_lst": 52.23,
        "city_percentile": 89.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.92,
        "ndvi": 0.311,
        "ndbi": -0.023,
        "dist_to_veg": 174.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.41052,
        "longitude": 76.88263
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.8826280017187,
          28.410523417441844
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0114",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.16,
        "predicted_lst": 46.71,
        "city_percentile": 21.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.43,
        "ndvi": 0.444,
        "ndbi": -0.097,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.82689,
        "longitude": 76.94219
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.94218630505581,
          28.826892551631243
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0115",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.42,
        "predicted_lst": 47.4,
        "city_percentile": 28.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.48,
        "ndvi": 0.174,
        "ndbi": 0.03,
        "dist_to_veg": 189.7,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.74335,
        "longitude": 77.14026
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.14026482520417,
          28.743349230208125
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0116",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.13,
        "predicted_lst": 48.33,
        "city_percentile": 20.2,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.65,
        "ndvi": 0.299,
        "ndbi": 0.001,
        "dist_to_veg": 1064.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.40352,
        "longitude": 77.25157
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.25156608890659,
          28.40351655822571
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0117",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.78,
        "predicted_lst": 47.31,
        "city_percentile": 8.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.28,
        "ndvi": 0.384,
        "ndbi": -0.047,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.77623,
        "longitude": 77.06535
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0653453305086,
          28.7762275696069
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0118",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 49.34,
        "predicted_lst": 47.11,
        "city_percentile": 26.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.28,
        "ndvi": 0.436,
        "ndbi": -0.08,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.82204,
        "longitude": 77.11493
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.114932334192,
          28.822041649096995
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0119",
        "city": "Delhi",
        "severity": "Moderate",
        "lst": 48.92,
        "predicted_lst": 47.2,
        "city_percentile": 13.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.381,
        "ndbi": -0.085,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.47035,
        "longitude": 76.90473
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.90472655770803,
          28.470351215364204
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_DEL_0120",
        "city": "Delhi",
        "severity": "High",
        "lst": 50.85,
        "predicted_lst": 49.38,
        "city_percentile": 64.1,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 32.43,
        "ndvi": 0.156,
        "ndbi": 0.091,
        "dist_to_veg": 700.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 28.81935,
        "longitude": 76.91227
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.91227240609464,
          28.81934670324464
        ]
      }
    }
  ],
  "Bengaluru": [
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0001",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.34,
        "predicted_lst": 44.17,
        "city_percentile": 53.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.43,
        "ndvi": 0.362,
        "ndbi": 0.04,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 5.9,
        "building_density": 206,
        "latitude": 13.10889,
        "longitude": 77.63775
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.63775182954957,
          13.10889036233515
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0002",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.5,
        "predicted_lst": 44.36,
        "city_percentile": 57.3,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.43,
        "ndvi": 0.35,
        "ndbi": 0.005,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 3.4,
        "building_density": 266,
        "latitude": 13.09003,
        "longitude": 77.64907
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.64907060212947,
          13.090025741368638
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0003",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.39,
        "predicted_lst": 47.09,
        "city_percentile": 54.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.47,
        "ndvi": 0.225,
        "ndbi": 0.132,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 3.5,
        "building_density": 379,
        "latitude": 13.1,
        "longitude": 77.71456
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.71455778634179,
          13.099997041022366
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0004",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.25,
        "predicted_lst": 46.9,
        "city_percentile": 50.8,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.4,
        "ndvi": 0.321,
        "ndbi": 0.171,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 1.6,
        "building_density": 98,
        "latitude": 12.83562,
        "longitude": 77.55232
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5523220460298,
          12.83562285290599
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0005",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.04,
        "predicted_lst": 45.59,
        "city_percentile": 12.8,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.65,
        "ndvi": 0.22,
        "ndbi": 0.031,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 2.1,
        "building_density": 200,
        "latitude": 13.19836,
        "longitude": 77.67602
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.67602006065306,
          13.198362564633452
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0006",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.17,
        "predicted_lst": 47.43,
        "city_percentile": 17.3,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.61,
        "ndvi": 0.239,
        "ndbi": 0.127,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 2.1,
        "building_density": 214,
        "latitude": 13.06658,
        "longitude": 77.4041
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.40410002415008,
          13.06657971245312
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0007",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.51,
        "predicted_lst": 45.47,
        "city_percentile": 28.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.47,
        "ndvi": 0.198,
        "ndbi": 0.135,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 5.7,
        "building_density": 421,
        "latitude": 13.06631,
        "longitude": 77.6806
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.68060146860206,
          13.066310217867883
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0008",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.73,
        "predicted_lst": 45.76,
        "city_percentile": 1.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.4,
        "ndvi": 0.262,
        "ndbi": 0.109,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 4.6,
        "building_density": 311,
        "latitude": 12.81541,
        "longitude": 77.62751
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6275110353106,
          12.8154107590133
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0009",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.53,
        "predicted_lst": 47.1,
        "city_percentile": 29.1,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.53,
        "ndvi": 0.184,
        "ndbi": 0.166,
        "dist_to_veg": 120.0,
        "impervious_surface_ratio": 15.0,
        "building_density": 299,
        "latitude": 13.01484,
        "longitude": 77.47525
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.47524659465235,
          13.014836752087836
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0010",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.9,
        "predicted_lst": 44.78,
        "city_percentile": 7.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 26.66,
        "ndvi": 0.495,
        "ndbi": 0.027,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.8,
        "building_density": 43,
        "latitude": 13.15578,
        "longitude": 77.51405
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.51405381492631,
          13.155782420166188
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0011",
        "city": "Bengaluru",
        "severity": "Severe",
        "lst": 50.23,
        "predicted_lst": 48.74,
        "city_percentile": 86.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.4,
        "ndvi": 0.313,
        "ndbi": 0.124,
        "dist_to_veg": 192.1,
        "impervious_surface_ratio": 0.9,
        "building_density": 107,
        "latitude": 12.83562,
        "longitude": 77.55502
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.55501699188216,
          12.83562285290599
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0012",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.19,
        "predicted_lst": 46.85,
        "city_percentile": 49.2,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.43,
        "ndvi": 0.138,
        "ndbi": 0.14,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 7.5,
        "building_density": 590,
        "latitude": 13.10781,
        "longitude": 77.55448
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.55447800271169,
          13.107812383994204
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0013",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.41,
        "predicted_lst": 44.41,
        "city_percentile": 54.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 27.23,
        "ndvi": 0.437,
        "ndbi": 0.022,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.2,
        "building_density": 22,
        "latitude": 12.83913,
        "longitude": 77.44641
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.44641067403211,
          12.839126282514057
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0014",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.82,
        "predicted_lst": 45.82,
        "city_percentile": 38.3,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.65,
        "ndvi": 0.448,
        "ndbi": 0.003,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 2.9,
        "building_density": 199,
        "latitude": 13.17303,
        "longitude": 77.65958
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.65958089095366,
          13.173030073621282
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0015",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.2,
        "predicted_lst": 46.8,
        "city_percentile": 49.2,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 26.68,
        "ndvi": 0.287,
        "ndbi": 0.11,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 1.0,
        "building_density": 49,
        "latitude": 13.0434,
        "longitude": 77.40437
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.40436951873531,
          13.043403178122835
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0016",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.58,
        "predicted_lst": 44.62,
        "city_percentile": 30.9,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.34,
        "ndvi": 0.269,
        "ndbi": 0.033,
        "dist_to_veg": 120.0,
        "impervious_surface_ratio": 28.2,
        "building_density": 450,
        "latitude": 12.99193,
        "longitude": 77.70863
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.7086289054666,
          12.991929712342786
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0017",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.86,
        "predicted_lst": 46.86,
        "city_percentile": 6.1,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.57,
        "ndvi": 0.225,
        "ndbi": 0.074,
        "dist_to_veg": 123.7,
        "impervious_surface_ratio": 4.8,
        "building_density": 231,
        "latitude": 13.19755,
        "longitude": 77.63694
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.63694334579385,
          13.197554080877746
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0018",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.43,
        "predicted_lst": 43.1,
        "city_percentile": 26.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.57,
        "ndvi": 0.517,
        "ndbi": -0.152,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.5,
        "building_density": 53,
        "latitude": 13.17653,
        "longitude": 77.60811
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.60810742517363,
          13.176533503229347
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0019",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.21,
        "predicted_lst": 46.03,
        "city_percentile": 49.9,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.342,
        "ndbi": 0.111,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 17.3,
        "building_density": 323,
        "latitude": 12.92644,
        "longitude": 77.70378
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.70377800293235,
          12.926442528130474
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0020",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.3,
        "predicted_lst": 45.03,
        "city_percentile": 22.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.56,
        "ndvi": 0.34,
        "ndbi": 0.074,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 1.5,
        "building_density": 131,
        "latitude": 13.10377,
        "longitude": 77.46069
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.4606938870496,
          13.103769965215667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0021",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.11,
        "predicted_lst": 42.82,
        "city_percentile": 15.1,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.47,
        "ndvi": 0.444,
        "ndbi": -0.072,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.7,
        "building_density": 98,
        "latitude": 13.09757,
        "longitude": 77.69515
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.69515417620481,
          13.097571589755242
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0022",
        "city": "Bengaluru",
        "severity": "Severe",
        "lst": 51.05,
        "predicted_lst": 48.07,
        "city_percentile": 93.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.56,
        "ndvi": 0.218,
        "ndbi": 0.148,
        "dist_to_veg": 161.6,
        "impervious_surface_ratio": 10.6,
        "building_density": 422,
        "latitude": 13.06308,
        "longitude": 77.47875
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.4787500242604,
          13.063076282845053
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0023",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.73,
        "predicted_lst": 45.81,
        "city_percentile": 0.9,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.66,
        "ndvi": 0.329,
        "ndbi": 0.123,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 5.1,
        "building_density": 280,
        "latitude": 13.17249,
        "longitude": 77.54289
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.54288973554654,
          13.17249108445081
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0024",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.15,
        "predicted_lst": 42.95,
        "city_percentile": 16.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.43,
        "ndvi": 0.364,
        "ndbi": 0.018,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 49.8,
        "building_density": 1324,
        "latitude": 13.06927,
        "longitude": 77.59463
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.59463269591183,
          13.069274658305478
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0025",
        "city": "Bengaluru",
        "severity": "Severe",
        "lst": 50.58,
        "predicted_lst": 47.19,
        "city_percentile": 89.8,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 26.43,
        "ndvi": 0.285,
        "ndbi": 0.129,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 1.9,
        "building_density": 37,
        "latitude": 13.13692,
        "longitude": 77.5534
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.55340002437075,
          13.136917799199678
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0026",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.74,
        "predicted_lst": 45.2,
        "city_percentile": 35.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.442,
        "ndbi": 0.018,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 3.5,
        "building_density": 431,
        "latitude": 12.87174,
        "longitude": 77.70513
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.70512547585852,
          12.871735127327597
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0027",
        "city": "Bengaluru",
        "severity": "Severe",
        "lst": 49.83,
        "predicted_lst": 48.22,
        "city_percentile": 81.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.34,
        "ndvi": 0.223,
        "ndbi": 0.117,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 18.4,
        "building_density": 147,
        "latitude": 12.99247,
        "longitude": 77.73639
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.73638684774589,
          12.99246870151326
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0028",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.36,
        "predicted_lst": 45.72,
        "city_percentile": 53.3,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.405,
        "ndbi": 0.04,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.8,
        "building_density": 96,
        "latitude": 12.87443,
        "longitude": 77.70701
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.70701193795519,
          12.874430073179951
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0029",
        "city": "Bengaluru",
        "severity": "Severe",
        "lst": 50.63,
        "predicted_lst": 47.06,
        "city_percentile": 90.2,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.53,
        "ndvi": 0.337,
        "ndbi": 0.079,
        "dist_to_veg": 301.5,
        "impervious_surface_ratio": 13.2,
        "building_density": 332,
        "latitude": 12.98411,
        "longitude": 77.49869
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.49869262356786,
          12.984114369370946
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0030",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 49.0,
        "predicted_lst": 45.19,
        "city_percentile": 68.3,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.66,
        "ndvi": 0.423,
        "ndbi": -0.001,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 2.1,
        "building_density": 189,
        "latitude": 13.19728,
        "longitude": 77.49815
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.4981536343974,
          13.19728458629251
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0031",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.41,
        "predicted_lst": 45.0,
        "city_percentile": 26.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 26.25,
        "ndvi": 0.384,
        "ndbi": 0.052,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.5,
        "building_density": 29,
        "latitude": 12.82592,
        "longitude": 77.74717
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.74716663115532,
          12.8259210478375
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0032",
        "city": "Bengaluru",
        "severity": "Severe",
        "lst": 51.04,
        "predicted_lst": 48.85,
        "city_percentile": 93.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.51,
        "ndvi": 0.261,
        "ndbi": 0.237,
        "dist_to_veg": 123.7,
        "impervious_surface_ratio": 3.1,
        "building_density": 109,
        "latitude": 12.92563,
        "longitude": 77.79729
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.79729262400919,
          12.925634044374766
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0033",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.6,
        "predicted_lst": 45.93,
        "city_percentile": 31.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.43,
        "ndvi": 0.267,
        "ndbi": 0.103,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 4.4,
        "building_density": 70,
        "latitude": 13.09191,
        "longitude": 77.5693
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.56930020489966,
          13.09191220346529
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0034",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.94,
        "predicted_lst": 47.55,
        "city_percentile": 41.8,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.43,
        "ndvi": 0.147,
        "ndbi": 0.154,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 2.8,
        "building_density": 142,
        "latitude": 13.1229,
        "longitude": 77.5534
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.55340002437075,
          13.122904080767412
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0035",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 48.79,
        "predicted_lst": 48.68,
        "city_percentile": 63.7,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 26.56,
        "ndvi": 0.159,
        "ndbi": 0.215,
        "dist_to_veg": 456.9,
        "impervious_surface_ratio": 1.4,
        "building_density": 108,
        "latitude": 13.09811,
        "longitude": 77.51028
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.510280890733,
          13.098110578925716
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0036",
        "city": "Bengaluru",
        "severity": "Critical",
        "lst": 54.41,
        "predicted_lst": 49.75,
        "city_percentile": 99.8,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.34,
        "ndvi": 0.181,
        "ndbi": 0.14,
        "dist_to_veg": 192.1,
        "impervious_surface_ratio": 17.8,
        "building_density": 178,
        "latitude": 12.99328,
        "longitude": 77.73881
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.738812299013,
          12.993277185268964
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0037",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.77,
        "predicted_lst": 44.41,
        "city_percentile": 36.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.43,
        "ndvi": 0.383,
        "ndbi": -0.019,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 5.7,
        "building_density": 503,
        "latitude": 13.14258,
        "longitude": 77.63128
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6312839595039,
          13.14257718548963
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0038",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.22,
        "predicted_lst": 45.89,
        "city_percentile": 19.2,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.4,
        "ndvi": 0.175,
        "ndbi": 0.067,
        "dist_to_veg": 153.0,
        "impervious_surface_ratio": 9.0,
        "building_density": 278,
        "latitude": 12.82565,
        "longitude": 77.77439
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.77438558426414,
          12.825651553252264
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0039",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.9,
        "predicted_lst": 47.75,
        "city_percentile": 7.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.4,
        "ndvi": 0.223,
        "ndbi": 0.199,
        "dist_to_veg": 127.3,
        "impervious_surface_ratio": 1.6,
        "building_density": 185,
        "latitude": 12.83374,
        "longitude": 77.56068
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5606763781721,
          12.83373639080934
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0040",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 48.82,
        "predicted_lst": 47.16,
        "city_percentile": 64.3,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 26.4,
        "ndvi": 0.301,
        "ndbi": 0.132,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 1.3,
        "building_density": 33,
        "latitude": 12.83913,
        "longitude": 77.75229
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.75228702827481,
          12.839126282514057
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0041",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.29,
        "predicted_lst": 43.88,
        "city_percentile": 21.8,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.379,
        "ndbi": 0.033,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 17.5,
        "building_density": 547,
        "latitude": 12.94073,
        "longitude": 77.68437
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.68437439279536,
          12.940725741147974
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0042",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 49.61,
        "predicted_lst": 45.4,
        "city_percentile": 77.8,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.57,
        "ndvi": 0.385,
        "ndbi": 0.048,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 9.8,
        "building_density": 165,
        "latitude": 13.18974,
        "longitude": 77.64179
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6417942483281,
          13.189738737905904
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0043",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.04,
        "predicted_lst": 46.15,
        "city_percentile": 44.9,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 27.23,
        "ndvi": 0.305,
        "ndbi": 0.199,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.7,
        "building_density": 41,
        "latitude": 12.82754,
        "longitude": 77.43994
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.43994280398644,
          12.827538015348914
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0044",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.84,
        "predicted_lst": 45.37,
        "city_percentile": 5.1,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.57,
        "ndvi": 0.367,
        "ndbi": 0.021,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 1.5,
        "building_density": 140,
        "latitude": 13.18111,
        "longitude": 77.61296
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.61295832770787,
          13.18111491117836
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0045",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 49.11,
        "predicted_lst": 45.65,
        "city_percentile": 70.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 26.61,
        "ndvi": 0.414,
        "ndbi": 0.003,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.1,
        "building_density": 7,
        "latitude": 13.13153,
        "longitude": 77.42755
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.4275460530656,
          13.13152790749496
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0046",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.21,
        "predicted_lst": 45.95,
        "city_percentile": 18.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.25,
        "ndvi": 0.339,
        "ndbi": -0.008,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 10.6,
        "building_density": 526,
        "latitude": 12.8049,
        "longitude": 77.74312
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.74312421237678,
          12.804900470189102
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0047",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.5,
        "predicted_lst": 45.37,
        "city_percentile": 28.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.338,
        "ndbi": 0.087,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 19.3,
        "building_density": 474,
        "latitude": 12.9251,
        "longitude": 77.70081
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.70081356249476,
          12.925095055204295
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0048",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.87,
        "predicted_lst": 45.96,
        "city_percentile": 6.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.2,
        "ndbi": 0.042,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 1.6,
        "building_density": 66,
        "latitude": 12.93992,
        "longitude": 77.66416
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.66416229890268,
          12.939917257392269
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0049",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.95,
        "predicted_lst": 45.67,
        "city_percentile": 9.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.66,
        "ndvi": 0.193,
        "ndbi": 0.104,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 3.2,
        "building_density": 282,
        "latitude": 13.1547,
        "longitude": 77.50947
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5094724069773,
          13.154704441825244
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0050",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.57,
        "predicted_lst": 44.65,
        "city_percentile": 30.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.65,
        "ndvi": 0.419,
        "ndbi": -0.083,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 5.1,
        "building_density": 79,
        "latitude": 13.19028,
        "longitude": 77.65716
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.65715543968655,
          13.190277727076378
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0051",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.37,
        "predicted_lst": 46.55,
        "city_percentile": 53.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.336,
        "ndbi": 0.151,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 8.3,
        "building_density": 200,
        "latitude": 12.87254,
        "longitude": 77.71698
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.7169832376089,
          12.872543611083302
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0052",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 49.48,
        "predicted_lst": 46.41,
        "city_percentile": 76.1,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.68,
        "ndvi": 0.305,
        "ndbi": 0.197,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.9,
        "building_density": 73,
        "latitude": 13.03855,
        "longitude": 77.44399
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.44398522276498,
          13.03855227558859
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0053",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.85,
        "predicted_lst": 44.74,
        "city_percentile": 5.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.4,
        "ndvi": 0.501,
        "ndbi": -0.052,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 7.2,
        "building_density": 779,
        "latitude": 12.82727,
        "longitude": 77.55744
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.55744244314928,
          12.827268520763678
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0054",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.37,
        "predicted_lst": 45.21,
        "city_percentile": 53.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.51,
        "ndvi": 0.166,
        "ndbi": 0.134,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 6.0,
        "building_density": 494,
        "latitude": 13.05203,
        "longitude": 77.76927
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.76926518714467,
          13.052027004850382
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0055",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.39,
        "predicted_lst": 45.59,
        "city_percentile": 25.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.68,
        "ndvi": 0.338,
        "ndbi": 0.046,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 1.0,
        "building_density": 51,
        "latitude": 13.04286,
        "longitude": 77.40437
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.40436951873531,
          13.042864188952365
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0056",
        "city": "Bengaluru",
        "severity": "Severe",
        "lst": 50.13,
        "predicted_lst": 46.61,
        "city_percentile": 85.4,
        "primary_driver": "High Impervious & Built-up Density",
        "recommended_action": "High-albedo cool pavement retrofitting & pocket park integration",
        "air_temp": 26.28,
        "ndvi": 0.256,
        "ndbi": 0.168,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 63.2,
        "building_density": 1949,
        "latitude": 12.94854,
        "longitude": 77.61484
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.61484478980452,
          12.948541084119814
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0057",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.32,
        "predicted_lst": 47.28,
        "city_percentile": 23.1,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.56,
        "ndvi": 0.194,
        "ndbi": 0.181,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 1.6,
        "building_density": 114,
        "latitude": 13.08625,
        "longitude": 77.47228
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.47228215421475,
          13.086252817175335
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0058",
        "city": "Bengaluru",
        "severity": "Severe",
        "lst": 50.45,
        "predicted_lst": 46.15,
        "city_percentile": 88.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.97,
        "ndvi": 0.39,
        "ndbi": 0.033,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 2.7,
        "building_density": 103,
        "latitude": 12.81918,
        "longitude": 77.50004
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.50004009649405,
          12.819183683206605
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0059",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.86,
        "predicted_lst": 45.6,
        "city_percentile": 39.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.4,
        "ndvi": 0.326,
        "ndbi": 0.085,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 2.4,
        "building_density": 146,
        "latitude": 12.83562,
        "longitude": 77.56822
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.56822222655872,
          12.83562285290599
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0060",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.74,
        "predicted_lst": 45.06,
        "city_percentile": 1.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.66,
        "ndvi": 0.404,
        "ndbi": -0.004,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 5.2,
        "building_density": 103,
        "latitude": 13.16764,
        "longitude": 77.45638
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.45638197368584,
          13.167640181916566
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0061",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.0,
        "predicted_lst": 44.35,
        "city_percentile": 11.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 26.97,
        "ndvi": 0.517,
        "ndbi": -0.063,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 1.7,
        "building_density": 40,
        "latitude": 12.80382,
        "longitude": 77.45342
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.45341753324824,
          12.80382249184816
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0062",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.94,
        "predicted_lst": 46.27,
        "city_percentile": 9.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.61,
        "ndvi": 0.35,
        "ndbi": 0.108,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 4.8,
        "building_density": 455,
        "latitude": 13.08517,
        "longitude": 77.40437
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.40436951873531,
          13.085174838834392
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0063",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.85,
        "predicted_lst": 47.55,
        "city_percentile": 5.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.56,
        "ndvi": 0.206,
        "ndbi": 0.146,
        "dist_to_veg": 174.9,
        "impervious_surface_ratio": 31.5,
        "building_density": 425,
        "latitude": 13.08356,
        "longitude": 77.53022
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.53022349004046,
          13.083557871322975
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0064",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.82,
        "predicted_lst": 44.41,
        "city_percentile": 38.3,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.4,
        "ndvi": 0.322,
        "ndbi": 0.117,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 1.2,
        "building_density": 88,
        "latitude": 12.82457,
        "longitude": 77.5755
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.57549858036008,
          12.82457357491132
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0065",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 48.78,
        "predicted_lst": 45.21,
        "city_percentile": 63.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.56,
        "ndvi": 0.395,
        "ndbi": 0.041,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 2.7,
        "building_density": 159,
        "latitude": 13.12129,
        "longitude": 77.50327
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.50327403151687,
          13.121287113255995
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0066",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.23,
        "predicted_lst": 45.66,
        "city_percentile": 50.3,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.61,
        "ndvi": 0.527,
        "ndbi": -0.053,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 2.4,
        "building_density": 260,
        "latitude": 13.14177,
        "longitude": 77.43051
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.43051049350319,
          13.141768701733923
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0067",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.01,
        "predicted_lst": 43.39,
        "city_percentile": 11.8,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.47,
        "ndvi": 0.374,
        "ndbi": -0.073,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 9.3,
        "building_density": 270,
        "latitude": 13.14473,
        "longitude": 77.68491
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.68491338196584,
          13.144733142171518
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0068",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.26,
        "predicted_lst": 46.12,
        "city_percentile": 20.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 27.23,
        "ndvi": 0.355,
        "ndbi": 0.084,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.8,
        "building_density": 102,
        "latitude": 12.81622,
        "longitude": 77.4324
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.43239695559984,
          12.816219242769009
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0069",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.04,
        "predicted_lst": 46.96,
        "city_percentile": 44.9,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.15,
        "ndbi": 0.165,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 2.5,
        "building_density": 82,
        "latitude": 12.87174,
        "longitude": 77.68976
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.68976428450009,
          12.871735127327597
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0070",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.87,
        "predicted_lst": 47.21,
        "city_percentile": 39.8,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.56,
        "ndvi": 0.164,
        "ndbi": 0.223,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 1.0,
        "building_density": 85,
        "latitude": 13.09164,
        "longitude": 77.51567
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.51567078243772,
          13.091642708880054
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0071",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.97,
        "predicted_lst": 46.34,
        "city_percentile": 42.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.43,
        "ndvi": 0.256,
        "ndbi": 0.061,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 4.3,
        "building_density": 193,
        "latitude": 13.10727,
        "longitude": 77.64018
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.64017728081669,
          13.107273394823734
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0072",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 49.49,
        "predicted_lst": 46.48,
        "city_percentile": 76.1,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.44,
        "ndvi": 0.404,
        "ndbi": 0.133,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 4.3,
        "building_density": 361,
        "latitude": 12.97872,
        "longitude": 77.79487
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.79486717274207,
          12.97872447766623
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0073",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.24,
        "predicted_lst": 46.88,
        "city_percentile": 20.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 26.78,
        "ndvi": 0.279,
        "ndbi": 0.083,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.1,
        "building_density": 4,
        "latitude": 13.1989,
        "longitude": 77.75902
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.7590243929057,
          13.198901553803925
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0074",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.01,
        "predicted_lst": 45.29,
        "city_percentile": 11.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.97,
        "ndvi": 0.324,
        "ndbi": 0.145,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 3.7,
        "building_density": 118,
        "latitude": 12.82619,
        "longitude": 77.52133
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.52133016872767,
          12.826190542422736
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0075",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.8,
        "predicted_lst": 46.31,
        "city_percentile": 37.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.91,
        "ndvi": 0.248,
        "ndbi": 0.113,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 13.4,
        "building_density": 468,
        "latitude": 12.872,
        "longitude": 77.44938
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.4493751144697,
          12.872004621912833
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0076",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.71,
        "predicted_lst": 46.86,
        "city_percentile": 34.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.25,
        "ndvi": 0.245,
        "ndbi": 0.105,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 2.4,
        "building_density": 165,
        "latitude": 12.80059,
        "longitude": 77.72534
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.72533756975122,
          12.800588556825328
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0077",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.16,
        "predicted_lst": 45.86,
        "city_percentile": 17.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.61,
        "ndvi": 0.308,
        "ndbi": 0.108,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 1.3,
        "building_density": 124,
        "latitude": 13.05984,
        "longitude": 77.42458
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.424581612628,
          13.059842347822222
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0078",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 48.78,
        "predicted_lst": 45.67,
        "city_percentile": 63.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.47,
        "ndvi": 0.343,
        "ndbi": 0.042,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 1.3,
        "building_density": 62,
        "latitude": 13.12856,
        "longitude": 77.68222
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.68221843611349,
          13.128563467057369
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0079",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.13,
        "predicted_lst": 46.68,
        "city_percentile": 15.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.97,
        "ndvi": 0.305,
        "ndbi": 0.131,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 2.0,
        "building_density": 184,
        "latitude": 12.81999,
        "longitude": 77.45773
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.457729446612,
          12.81999216696231
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0080",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.48,
        "predicted_lst": 44.77,
        "city_percentile": 28.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.47,
        "ndvi": 0.258,
        "ndbi": 0.07,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 1.8,
        "building_density": 110,
        "latitude": 13.1291,
        "longitude": 77.68357
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.68356590903966,
          13.129102456227836
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0081",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.45,
        "predicted_lst": 42.39,
        "city_percentile": 55.8,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.68,
        "ndvi": 0.625,
        "ndbi": -0.286,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.5,
        "building_density": 65,
        "latitude": 13.02831,
        "longitude": 77.41434
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.41434081838904,
          13.028311481349627
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0082",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.09,
        "predicted_lst": 43.27,
        "city_percentile": 14.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.57,
        "ndvi": 0.501,
        "ndbi": -0.162,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 2.3,
        "building_density": 205,
        "latitude": 13.16683,
        "longitude": 77.60487
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6048734901508,
          13.166831698160856
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0083",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.8,
        "predicted_lst": 45.75,
        "city_percentile": 3.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.51,
        "ndvi": 0.31,
        "ndbi": 0.047,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 4.2,
        "building_density": 314,
        "latitude": 12.90785,
        "longitude": 77.75363
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.75363450120098,
          12.9078474017492
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0084",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 48.79,
        "predicted_lst": 44.91,
        "city_percentile": 63.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.68,
        "ndvi": 0.326,
        "ndbi": 0.048,
        "dist_to_veg": 84.9,
        "impervious_surface_ratio": 7.5,
        "building_density": 461,
        "latitude": 12.87012,
        "longitude": 77.46096
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.46096338163484,
          12.87011815981618
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0085",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.87,
        "predicted_lst": 44.14,
        "city_percentile": 6.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.97,
        "ndvi": 0.482,
        "ndbi": -0.055,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 3.9,
        "building_density": 363,
        "latitude": 12.83347,
        "longitude": 77.48603
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.48602637806178,
          12.833466896224104
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0086",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.46,
        "predicted_lst": 45.4,
        "city_percentile": 27.2,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 26.97,
        "ndvi": 0.38,
        "ndbi": 0.082,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.4,
        "building_density": 31,
        "latitude": 12.82592,
        "longitude": 77.45477
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.45476500617441,
          12.8259210478375
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0087",
        "city": "Bengaluru",
        "severity": "Severe",
        "lst": 49.8,
        "predicted_lst": 47.18,
        "city_percentile": 80.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.66,
        "ndvi": 0.292,
        "ndbi": 0.11,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 1.2,
        "building_density": 83,
        "latitude": 13.15821,
        "longitude": 77.4615
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.46150237080532,
          13.15820787143331
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0088",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.11,
        "predicted_lst": 46.02,
        "city_percentile": 15.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 27.23,
        "ndvi": 0.408,
        "ndbi": 0.049,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 2.6,
        "building_density": 157,
        "latitude": 12.84559,
        "longitude": 77.42835
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.4283545368213,
          12.845594152559716
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0089",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 48.83,
        "predicted_lst": 46.66,
        "city_percentile": 64.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.66,
        "ndvi": 0.306,
        "ndbi": 0.176,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 1.1,
        "building_density": 118,
        "latitude": 13.16387,
        "longitude": 77.52726
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.52725904960286,
          13.163867257723265
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0090",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.74,
        "predicted_lst": 43.78,
        "city_percentile": 1.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.61,
        "ndvi": 0.471,
        "ndbi": -0.103,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 5.1,
        "building_density": 298,
        "latitude": 13.10862,
        "longitude": 77.43563
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.43563089062268,
          13.108620867749911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0091",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.72,
        "predicted_lst": 46.16,
        "city_percentile": 34.9,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.56,
        "ndvi": 0.264,
        "ndbi": 0.159,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 3.1,
        "building_density": 360,
        "latitude": 13.0779,
        "longitude": 77.48171
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.481714464698,
          13.077898485033025
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0092",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.98,
        "predicted_lst": 46.3,
        "city_percentile": 10.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.56,
        "ndvi": 0.233,
        "ndbi": 0.095,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 13.9,
        "building_density": 672,
        "latitude": 13.10161,
        "longitude": 77.54505
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.54504569222843,
          13.10161400853378
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0093",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.99,
        "predicted_lst": 43.51,
        "city_percentile": 10.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 27.23,
        "ndvi": 0.633,
        "ndbi": -0.271,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 1.8,
        "building_density": 168,
        "latitude": 12.83347,
        "longitude": 77.42862
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.42862403140654,
          12.833466896224104
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0094",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.37,
        "predicted_lst": 44.31,
        "city_percentile": 25.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 26.97,
        "ndvi": 0.458,
        "ndbi": -0.018,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.4,
        "building_density": 13,
        "latitude": 12.80463,
        "longitude": 77.47498
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.47497710006711,
          12.804630975603866
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0095",
        "city": "Bengaluru",
        "severity": "Severe",
        "lst": 50.27,
        "predicted_lst": 46.25,
        "city_percentile": 87.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.25,
        "ndvi": 0.283,
        "ndbi": 0.136,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 4.7,
        "building_density": 303,
        "latitude": 12.8332,
        "longitude": 77.70728
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.70728143254041,
          12.833197401638868
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0096",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.75,
        "predicted_lst": 44.3,
        "city_percentile": 1.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.28,
        "ndvi": 0.289,
        "ndbi": 0.089,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 21.7,
        "building_density": 375,
        "latitude": 12.85287,
        "longitude": 77.59706
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.59705814717896,
          12.852870506361084
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0097",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.29,
        "predicted_lst": 46.99,
        "city_percentile": 21.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.56,
        "ndvi": 0.322,
        "ndbi": 0.076,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 1.7,
        "building_density": 99,
        "latitude": 13.14662,
        "longitude": 77.45099
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.45099208198111,
          13.14661960426817
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0098",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.84,
        "predicted_lst": 44.9,
        "city_percentile": 5.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.78,
        "ndvi": 0.422,
        "ndbi": -0.06,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 3.1,
        "building_density": 360,
        "latitude": 13.18704,
        "longitude": 77.75256
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.75255652286005,
          13.187043792053547
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0099",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.3,
        "predicted_lst": 43.75,
        "city_percentile": 22.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.56,
        "ndvi": 0.444,
        "ndbi": -0.038,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 2.5,
        "building_density": 223,
        "latitude": 13.1318,
        "longitude": 77.5181
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.51809623370484,
          13.131797402080196
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0100",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 49.29,
        "predicted_lst": 46.01,
        "city_percentile": 73.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.56,
        "ndvi": 0.331,
        "ndbi": 0.062,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 1.2,
        "building_density": 104,
        "latitude": 13.1229,
        "longitude": 77.541
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.54100327344989,
          13.122904080767412
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0101",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.75,
        "predicted_lst": 45.93,
        "city_percentile": 1.6,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 26.66,
        "ndvi": 0.368,
        "ndbi": 0.065,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.5,
        "building_density": 35,
        "latitude": 13.19782,
        "longitude": 77.47848
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.47848052967518,
          13.197823575462982
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0102",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.97,
        "predicted_lst": 44.42,
        "city_percentile": 42.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.57,
        "ndvi": 0.403,
        "ndbi": 0.016,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 2.7,
        "building_density": 117,
        "latitude": 13.15174,
        "longitude": 77.60164
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.60163955512796,
          13.15174000138765
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0103",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.61,
        "predicted_lst": 44.29,
        "city_percentile": 31.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.34,
        "ndvi": 0.302,
        "ndbi": 0.05,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 29.3,
        "building_density": 951,
        "latitude": 12.99705,
        "longitude": 77.70971
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.70970688380754,
          12.997050109462268
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0104",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.21,
        "predicted_lst": 46.05,
        "city_percentile": 18.6,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.97,
        "ndvi": 0.324,
        "ndbi": 0.118,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.9,
        "building_density": 105,
        "latitude": 12.81703,
        "longitude": 77.45611
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.4561124791006,
          12.817027726524715
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0105",
        "city": "Bengaluru",
        "severity": "Severe",
        "lst": 49.79,
        "predicted_lst": 46.63,
        "city_percentile": 80.3,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 26.35,
        "ndvi": 0.125,
        "ndbi": 0.09,
        "dist_to_veg": 182.5,
        "impervious_surface_ratio": 0.8,
        "building_density": 20,
        "latitude": 12.93075,
        "longitude": 77.65689
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.65688594510131,
          12.930754441494248
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0106",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 48.89,
        "predicted_lst": 48.16,
        "city_percentile": 66.1,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.378,
        "ndbi": 0.126,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 1.9,
        "building_density": 257,
        "latitude": 12.8712,
        "longitude": 77.70728
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.70728143254041,
          12.871196138157122
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0107",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.69,
        "predicted_lst": 44.77,
        "city_percentile": 34.1,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.42,
        "ndbi": -0.0,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 5.6,
        "building_density": 328,
        "latitude": 12.85179,
        "longitude": 77.72884
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.72884099935928,
          12.85179252802014
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0108",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.82,
        "predicted_lst": 45.8,
        "city_percentile": 4.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.47,
        "ndvi": 0.254,
        "ndbi": 0.097,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 2.7,
        "building_density": 190,
        "latitude": 13.14015,
        "longitude": 77.70189
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.7018915408357,
          13.140151734222508
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0109",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.56,
        "predicted_lst": 46.26,
        "city_percentile": 30.2,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.65,
        "ndvi": 0.395,
        "ndbi": -0.006,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 3.8,
        "building_density": 234,
        "latitude": 13.1698,
        "longitude": 77.68249
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.68248793069871,
          13.169796138598452
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0110",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.66,
        "predicted_lst": 44.74,
        "city_percentile": 33.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.53,
        "ndvi": 0.244,
        "ndbi": 0.069,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 31.1,
        "building_density": 718,
        "latitude": 13.04367,
        "longitude": 77.49519
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.4951891939598,
          13.043672672708071
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0111",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.72,
        "predicted_lst": 45.14,
        "city_percentile": 0.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.399,
        "ndbi": 0.024,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 5.2,
        "building_density": 222,
        "latitude": 12.8782,
        "longitude": 77.73477
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.73476988023448,
          12.878202997373256
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0112",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.47,
        "predicted_lst": 46.29,
        "city_percentile": 56.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.343,
        "ndbi": 0.112,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 6.8,
        "building_density": 525,
        "latitude": 12.85664,
        "longitude": 77.68707
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.68706933864773,
          12.856643430554389
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0113",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.79,
        "predicted_lst": 44.08,
        "city_percentile": 37.5,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.43,
        "ndvi": 0.293,
        "ndbi": -0.014,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 8.0,
        "building_density": 151,
        "latitude": 13.1291,
        "longitude": 77.59787
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.59786663093466,
          13.129102456227836
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0114",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 46.84,
        "predicted_lst": 44.94,
        "city_percentile": 5.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 26.65,
        "ndvi": 0.468,
        "ndbi": -0.027,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.2,
        "building_density": 32,
        "latitude": 13.17923,
        "longitude": 77.42862
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.42862403140654,
          13.179228449081709
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0115",
        "city": "Bengaluru",
        "severity": "High",
        "lst": 48.63,
        "predicted_lst": 42.66,
        "city_percentile": 60.4,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.43,
        "ndvi": 0.415,
        "ndbi": -0.061,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 9.1,
        "building_density": 175,
        "latitude": 13.0973,
        "longitude": 77.60757
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.60756843600315,
          13.097302095170006
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0116",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.34,
        "predicted_lst": 46.0,
        "city_percentile": 23.9,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.61,
        "ndvi": 0.316,
        "ndbi": 0.089,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 1.4,
        "building_density": 80,
        "latitude": 13.09542,
        "longitude": 77.4359
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.43590038520792,
          13.095415633073356
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0117",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.49,
        "predicted_lst": 45.61,
        "city_percentile": 28.2,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.97,
        "ndvi": 0.373,
        "ndbi": 0.079,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 4.6,
        "building_density": 109,
        "latitude": 12.81676,
        "longitude": 77.48414
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.48413991596513,
          12.81675823193948
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0118",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.3,
        "predicted_lst": 47.06,
        "city_percentile": 22.7,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.91,
        "ndvi": 0.21,
        "ndbi": 0.173,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 4.3,
        "building_density": 489,
        "latitude": 12.91539,
        "longitude": 77.44614
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.44614117944687,
          12.915393250135804
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0119",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 48.03,
        "predicted_lst": 47.03,
        "city_percentile": 44.8,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.56,
        "ndvi": 0.231,
        "ndbi": 0.087,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 1.4,
        "building_density": 114,
        "latitude": 13.12641,
        "longitude": 77.53696
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.53696085467135,
          13.12640751037548
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_BEN_0120",
        "city": "Bengaluru",
        "severity": "Moderate",
        "lst": 47.44,
        "predicted_lst": 44.62,
        "city_percentile": 27.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 26.35,
        "ndvi": 0.443,
        "ndbi": -0.048,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 1.3,
        "building_density": 157,
        "latitude": 12.872,
        "longitude": 77.70863
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.7086289054666,
          12.872004621912833
        ]
      }
    }
  ],
  "Lucknow": [
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0001",
        "city": "Lucknow",
        "severity": "High",
        "lst": 46.88,
        "predicted_lst": 44.5,
        "city_percentile": 60.9,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.27,
        "ndvi": 0.287,
        "ndbi": 0.075,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 10.4,
        "building_density": 1,
        "latitude": 26.76822,
        "longitude": 80.86764
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.8676444336013,
          26.76822341501453
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0002",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.51,
        "predicted_lst": 44.38,
        "city_percentile": 0.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.24,
        "ndvi": 0.31,
        "ndbi": 0.006,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 5.2,
        "building_density": 0,
        "latitude": 26.70058,
        "longitude": 81.01506
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.01505797172531,
          26.70058027412033
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0003",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.6,
        "predicted_lst": 43.42,
        "city_percentile": 5.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.2,
        "ndvi": 0.296,
        "ndbi": 0.015,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 9.3,
        "building_density": 3,
        "latitude": 26.86282,
        "longitude": 80.96844
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.96843540847952,
          26.86281601443232
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0004",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.52,
        "predicted_lst": 45.76,
        "city_percentile": 0.4,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.19,
        "ndvi": 0.288,
        "ndbi": 0.077,
        "dist_to_veg": 182.5,
        "impervious_surface_ratio": 23.0,
        "building_density": 3,
        "latitude": 26.87575,
        "longitude": 80.9272
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.92720273693843,
          26.87575175452364
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0005",
        "city": "Lucknow",
        "severity": "Severe",
        "lst": 47.84,
        "predicted_lst": 47.37,
        "city_percentile": 83.2,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.28,
        "ndvi": 0.264,
        "ndbi": 0.082,
        "dist_to_veg": 305.9,
        "impervious_surface_ratio": 7.1,
        "building_density": 0,
        "latitude": 26.80407,
        "longitude": 81.01964
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.01963937967433,
          26.804066194850904
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0006",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.6,
        "predicted_lst": 45.11,
        "city_percentile": 50.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.341,
        "ndbi": -0.007,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 5.1,
        "building_density": 0,
        "latitude": 26.95121,
        "longitude": 80.84528
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.84527638302673,
          26.95121023838968
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0007",
        "city": "Lucknow",
        "severity": "High",
        "lst": 47.27,
        "predicted_lst": 45.4,
        "city_percentile": 71.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.15,
        "ndvi": 0.305,
        "ndbi": 0.024,
        "dist_to_veg": 295.5,
        "impervious_surface_ratio": 1.1,
        "building_density": 0,
        "latitude": 26.91537,
        "longitude": 80.80108
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.80107927104805,
          26.915367458553312
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0008",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.53,
        "predicted_lst": 44.07,
        "city_percentile": 1.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.336,
        "ndbi": 0.0,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 14.1,
        "building_density": 0,
        "latitude": 26.82482,
        "longitude": 81.04794
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.04793631112409,
          26.824817277914065
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0009",
        "city": "Lucknow",
        "severity": "High",
        "lst": 47.54,
        "predicted_lst": 46.3,
        "city_percentile": 76.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.232,
        "ndbi": 0.037,
        "dist_to_veg": 270.0,
        "impervious_surface_ratio": 19.1,
        "building_density": 3,
        "latitude": 26.81188,
        "longitude": 81.0129
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.01290201504344,
          26.811881537822742
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0010",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.15,
        "predicted_lst": 44.02,
        "city_percentile": 31.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.389,
        "ndbi": -0.032,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 9.1,
        "building_density": 0,
        "latitude": 26.80083,
        "longitude": 80.98514
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.98514407276414,
          26.80083225982808
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0011",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.93,
        "predicted_lst": 43.85,
        "city_percentile": 21.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.371,
        "ndbi": -0.024,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 4.8,
        "building_density": 5,
        "latitude": 26.82724,
        "longitude": 80.99997
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.99996627495211,
          26.827242729181187
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0012",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.58,
        "predicted_lst": 44.73,
        "city_percentile": 3.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.02,
        "ndvi": 0.346,
        "ndbi": -0.04,
        "dist_to_veg": 240.0,
        "impervious_surface_ratio": 1.3,
        "building_density": 0,
        "latitude": 27.02505,
        "longitude": 80.92073
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.92073486689277,
          27.025051754744304
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0013",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.53,
        "predicted_lst": 43.85,
        "city_percentile": 1.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.278,
        "ndbi": 0.024,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 15.3,
        "building_density": 0,
        "latitude": 26.83721,
        "longitude": 80.83692
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.83692205088441,
          26.837214028834914
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0014",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.85,
        "predicted_lst": 45.61,
        "city_percentile": 17.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.27,
        "ndvi": 0.355,
        "ndbi": 0.004,
        "dist_to_veg": 192.1,
        "impervious_surface_ratio": 1.9,
        "building_density": 0,
        "latitude": 26.75286,
        "longitude": 80.89244
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.892437935443,
          26.75286222365609
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0015",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.78,
        "predicted_lst": 44.98,
        "city_percentile": 57.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.32,
        "ndvi": 0.351,
        "ndbi": -0.021,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 2.8,
        "building_density": 0,
        "latitude": 26.71567,
        "longitude": 80.73128
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.73128017347196,
          26.715671970893546
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0016",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.51,
        "predicted_lst": 43.96,
        "city_percentile": 0.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.27,
        "ndvi": 0.353,
        "ndbi": -0.063,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 8.9,
        "building_density": 0,
        "latitude": 26.7631,
        "longitude": 80.87142
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.87141735779461,
          26.76310301789505
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0017",
        "city": "Lucknow",
        "severity": "High",
        "lst": 47.01,
        "predicted_lst": 44.68,
        "city_percentile": 64.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.02,
        "ndvi": 0.345,
        "ndbi": -0.016,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 3.2,
        "building_density": 0,
        "latitude": 26.96846,
        "longitude": 80.85633
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.8563256610214,
          26.96845789184477
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0018",
        "city": "Lucknow",
        "severity": "Severe",
        "lst": 47.67,
        "predicted_lst": 44.04,
        "city_percentile": 80.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.26,
        "ndvi": 0.342,
        "ndbi": -0.076,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 6.6,
        "building_density": 0,
        "latitude": 26.73238,
        "longitude": 80.83611
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.8361135671287,
          26.732380635178163
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0019",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.71,
        "predicted_lst": 43.5,
        "city_percentile": 10.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.27,
        "ndvi": 0.444,
        "ndbi": -0.12,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 9.7,
        "building_density": 0,
        "latitude": 26.76364,
        "longitude": 80.87142
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.87141735779461,
          26.763642007065524
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0020",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.3,
        "predicted_lst": 43.92,
        "city_percentile": 38.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.304,
        "ndbi": 0.011,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 4.0,
        "building_density": 0,
        "latitude": 26.81107,
        "longitude": 81.04659
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.04658883819792,
          26.81107305406704
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0021",
        "city": "Lucknow",
        "severity": "High",
        "lst": 47.67,
        "predicted_lst": 45.94,
        "city_percentile": 80.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.32,
        "ndvi": 0.3,
        "ndbi": 0.015,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 3.2,
        "building_density": 0,
        "latitude": 26.7057,
        "longitude": 80.73263
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.73262764639814,
          26.70570067123981
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0022",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.13,
        "predicted_lst": 43.24,
        "city_percentile": 30.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.356,
        "ndbi": -0.041,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.7914,
        "longitude": 80.73505
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.73505309766526,
          26.79139994934481
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0023",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.67,
        "predicted_lst": 41.25,
        "city_percentile": 8.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.548,
        "ndbi": -0.192,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.79841,
        "longitude": 80.77386
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.77386031793922,
          26.798406808560948
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0024",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.6,
        "predicted_lst": 44.99,
        "city_percentile": 50.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.02,
        "ndvi": 0.365,
        "ndbi": -0.03,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 3.2,
        "building_density": 0,
        "latitude": 26.95633,
        "longitude": 80.85471
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.85470869350999,
          26.95633063550916
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0025",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.72,
        "predicted_lst": 43.35,
        "city_percentile": 11.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.32,
        "ndvi": 0.461,
        "ndbi": -0.092,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.72564,
        "longitude": 80.73155
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.7315496680572,
          26.72564327054727
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0026",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.69,
        "predicted_lst": 43.4,
        "city_percentile": 10.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.3,
        "ndbi": -0.028,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 3.2,
        "building_density": 0,
        "latitude": 26.79787,
        "longitude": 80.7329
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.73289714098338,
          26.79786781939048
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0027",
        "city": "Lucknow",
        "severity": "High",
        "lst": 47.55,
        "predicted_lst": 44.47,
        "city_percentile": 77.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.32,
        "ndvi": 0.425,
        "ndbi": -0.124,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.7022,
        "longitude": 80.71322
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.71322403626115,
          26.702197241631747
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0028",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.64,
        "predicted_lst": 44.94,
        "city_percentile": 7.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.37,
        "ndbi": -0.049,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 1.7,
        "building_density": 0,
        "latitude": 26.9504,
        "longitude": 80.83584
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.83584407254348,
          26.95040175463397
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0029",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.19,
        "predicted_lst": 45.66,
        "city_percentile": 33.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.26,
        "ndvi": 0.357,
        "ndbi": -0.004,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 3.8,
        "building_density": 0,
        "latitude": 26.7472,
        "longitude": 80.81536
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.81536248406555,
          26.74720283736613
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0030",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.09,
        "predicted_lst": 43.5,
        "city_percentile": 29.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.318,
        "ndbi": -0.037,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.79329,
        "longitude": 80.72562
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.72562078718201,
          26.793286411441468
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0031",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.99,
        "predicted_lst": 44.1,
        "city_percentile": 24.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.19,
        "ndvi": 0.407,
        "ndbi": -0.069,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 3.4,
        "building_density": 0,
        "latitude": 26.94286,
        "longitude": 80.86711
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.86710544443083,
          26.94285590624737
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0032",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.13,
        "predicted_lst": 44.3,
        "city_percentile": 30.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.27,
        "ndvi": 0.339,
        "ndbi": -0.011,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 13.6,
        "building_density": 11,
        "latitude": 26.84126,
        "longitude": 80.89136
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.89135995710205,
          26.84125644761345
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0033",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.23,
        "predicted_lst": 44.89,
        "city_percentile": 35.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.15,
        "ndvi": 0.309,
        "ndbi": 0.01,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 2.3,
        "building_density": 0,
        "latitude": 26.94097,
        "longitude": 80.81348
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.8134760219689,
          26.94096944415072
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0034",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.47,
        "predicted_lst": 43.92,
        "city_percentile": 46.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.287,
        "ndbi": -0.077,
        "dist_to_veg": 127.3,
        "impervious_surface_ratio": 30.5,
        "building_density": 0,
        "latitude": 26.77065,
        "longitude": 80.95334
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.95334371170631,
          26.770648866281658
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0035",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.41,
        "predicted_lst": 45.63,
        "city_percentile": 43.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.27,
        "ndvi": 0.232,
        "ndbi": 0.023,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 5.2,
        "building_density": 13,
        "latitude": 26.80946,
        "longitude": 80.921
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.92100436147801,
          26.80945608655562
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0036",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.28,
        "predicted_lst": 44.64,
        "city_percentile": 37.4,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.26,
        "ndvi": 0.229,
        "ndbi": 0.056,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 4.4,
        "building_density": 0,
        "latitude": 26.71298,
        "longitude": 80.7709
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.77089587750163,
          26.712977025041184
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0037",
        "city": "Lucknow",
        "severity": "Severe",
        "lst": 47.78,
        "predicted_lst": 44.95,
        "city_percentile": 82.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.22,
        "ndvi": 0.32,
        "ndbi": -0.024,
        "dist_to_veg": 174.9,
        "impervious_surface_ratio": 3.8,
        "building_density": 0,
        "latitude": 26.70893,
        "longitude": 80.92639
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.92639425318272,
          26.708934606262645
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0038",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.61,
        "predicted_lst": 44.47,
        "city_percentile": 5.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.27,
        "ndvi": 0.359,
        "ndbi": -0.066,
        "dist_to_veg": 84.9,
        "impervious_surface_ratio": 15.6,
        "building_density": 1,
        "latitude": 26.76337,
        "longitude": 80.86791
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.86791392818654,
          26.763372512480288
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0039",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.52,
        "predicted_lst": 45.04,
        "city_percentile": 0.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.02,
        "ndvi": 0.373,
        "ndbi": -0.037,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 3.1,
        "building_density": 0,
        "latitude": 26.95202,
        "longitude": 80.86737
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.86737493901607,
          26.95201872214539
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0040",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.6,
        "predicted_lst": 45.34,
        "city_percentile": 5.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.27,
        "ndvi": 0.11,
        "ndbi": 0.036,
        "dist_to_veg": 84.9,
        "impervious_surface_ratio": 6.9,
        "building_density": 1,
        "latitude": 26.7631,
        "longitude": 80.87384
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.87384280906173,
          26.76310301789505
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0041",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.97,
        "predicted_lst": 43.9,
        "city_percentile": 23.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.448,
        "ndbi": -0.069,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 4.3,
        "building_density": 0,
        "latitude": 26.79922,
        "longitude": 80.98002
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.98002367564466,
          26.799215292316656
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0042",
        "city": "Lucknow",
        "severity": "High",
        "lst": 46.89,
        "predicted_lst": 44.47,
        "city_percentile": 61.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.2,
        "ndvi": 0.273,
        "ndbi": 0.049,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 8.5,
        "building_density": 0,
        "latitude": 26.92938,
        "longitude": 81.01209
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.01209353128772,
          26.929381176985576
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0043",
        "city": "Lucknow",
        "severity": "Severe",
        "lst": 48.58,
        "predicted_lst": 46.37,
        "city_percentile": 93.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.295,
        "ndbi": 0.041,
        "dist_to_veg": 182.5,
        "impervious_surface_ratio": 16.0,
        "building_density": 2,
        "latitude": 26.80164,
        "longitude": 81.01452
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.01451898255485,
          26.80164074358378
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0044",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.67,
        "predicted_lst": 44.22,
        "city_percentile": 9.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.26,
        "ndvi": 0.406,
        "ndbi": -0.042,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.72942,
        "longitude": 80.77898
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.77898071505871,
          26.72941619474057
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0045",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.01,
        "predicted_lst": 45.02,
        "city_percentile": 25.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.37,
        "ndbi": -0.017,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 2.5,
        "building_density": 0,
        "latitude": 26.95391,
        "longitude": 80.82102
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.82102187035551,
          26.95390518424204
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0046",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.72,
        "predicted_lst": 44.74,
        "city_percentile": 11.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.27,
        "ndvi": 0.222,
        "ndbi": 0.048,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 12.7,
        "building_density": 5,
        "latitude": 26.76607,
        "longitude": 80.90807
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.90806862138669,
          26.76606745833265
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0047",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.77,
        "predicted_lst": 44.91,
        "city_percentile": 13.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.02,
        "ndvi": 0.391,
        "ndbi": -0.034,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 4.3,
        "building_density": 0,
        "latitude": 26.98651,
        "longitude": 80.87465
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.87465129281743,
          26.986514029055577
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0048",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.49,
        "predicted_lst": 42.32,
        "city_percentile": 46.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.467,
        "ndbi": -0.121,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 6.9,
        "building_density": 0,
        "latitude": 26.80595,
        "longitude": 80.76416
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.76415851287074,
          26.80595265694756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0049",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.01,
        "predicted_lst": 44.06,
        "city_percentile": 25.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.24,
        "ndvi": 0.416,
        "ndbi": -0.104,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 2.1,
        "building_density": 0,
        "latitude": 26.70947,
        "longitude": 81.01802
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.0180224121629,
          26.70947359543312
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0050",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.08,
        "predicted_lst": 45.06,
        "city_percentile": 28.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.335,
        "ndbi": 0.013,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 1.8,
        "building_density": 0,
        "latitude": 26.96522,
        "longitude": 80.81132
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.811320065287,
          26.965223956821944
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0051",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.73,
        "predicted_lst": 44.57,
        "city_percentile": 11.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.19,
        "ndvi": 0.321,
        "ndbi": 0.007,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 20.1,
        "building_density": 11,
        "latitude": 26.85042,
        "longitude": 80.90942
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.90941609431286,
          26.85041926351147
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0052",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.66,
        "predicted_lst": 42.84,
        "city_percentile": 53.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.22,
        "ndvi": 0.493,
        "ndbi": -0.131,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 2.8,
        "building_density": 0,
        "latitude": 26.7022,
        "longitude": 80.90268
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.90267872968197,
          26.702197241631747
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0053",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.63,
        "predicted_lst": 43.01,
        "city_percentile": 6.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.2,
        "ndvi": 0.318,
        "ndbi": 0.028,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 8.1,
        "building_density": 0,
        "latitude": 26.94636,
        "longitude": 80.98083
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.98083215940036,
          26.94635933585544
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0054",
        "city": "Lucknow",
        "severity": "Severe",
        "lst": 47.94,
        "predicted_lst": 45.61,
        "city_percentile": 85.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.15,
        "ndvi": 0.27,
        "ndbi": 0.072,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 9.9,
        "building_density": 0,
        "latitude": 26.88923,
        "longitude": 80.84608
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.84608486678243,
          26.889226483785432
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0055",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.18,
        "predicted_lst": 45.0,
        "city_percentile": 33.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.02,
        "ndvi": 0.285,
        "ndbi": 0.017,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 10.0,
        "building_density": 0,
        "latitude": 26.96468,
        "longitude": 80.92639
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.92639425318272,
          26.964684967651472
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0056",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.42,
        "predicted_lst": 44.93,
        "city_percentile": 44.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.26,
        "ndvi": 0.34,
        "ndbi": 0.067,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.73561,
        "longitude": 80.76551
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.76550598579692,
          26.735614570201
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0057",
        "city": "Lucknow",
        "severity": "Severe",
        "lst": 48.23,
        "predicted_lst": 43.9,
        "city_percentile": 89.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.15,
        "ndvi": 0.324,
        "ndbi": -0.04,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 5.8,
        "building_density": 0,
        "latitude": 26.94313,
        "longitude": 80.82911
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.82910670791257,
          26.943125400832603
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0058",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.92,
        "predicted_lst": 45.11,
        "city_percentile": 20.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.32,
        "ndvi": 0.365,
        "ndbi": -0.04,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 2.2,
        "building_density": 0,
        "latitude": 26.70301,
        "longitude": 80.7205
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.72050039006253,
          26.703005725387456
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0059",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.94,
        "predicted_lst": 44.08,
        "city_percentile": 22.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.05,
        "ndvi": 0.307,
        "ndbi": 0.02,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 10.8,
        "building_density": 0,
        "latitude": 26.9911,
        "longitude": 80.96924
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.96924389223523,
          26.99109543700459
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0060",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.2,
        "predicted_lst": 43.79,
        "city_percentile": 34.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.32,
        "ndvi": 0.434,
        "ndbi": -0.09,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 1.9,
        "building_density": 0,
        "latitude": 26.72187,
        "longitude": 80.74475
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.74475490273376,
          26.721870346353967
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0061",
        "city": "Lucknow",
        "severity": "High",
        "lst": 47.47,
        "predicted_lst": 44.12,
        "city_percentile": 75.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.359,
        "ndbi": -0.024,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 3.5,
        "building_density": 0,
        "latitude": 26.96442,
        "longitude": 80.8062
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.80619966816754,
          26.96441547306624
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0062",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.75,
        "predicted_lst": 44.54,
        "city_percentile": 56.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.26,
        "ndvi": 0.355,
        "ndbi": 0.026,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 3.2,
        "building_density": 0,
        "latitude": 26.71352,
        "longitude": 80.76551
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.76550598579692,
          26.713516014211656
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0063",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.94,
        "predicted_lst": 43.54,
        "city_percentile": 22.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.504,
        "ndbi": -0.204,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 28.5,
        "building_density": 16,
        "latitude": 26.84611,
        "longitude": 81.01721
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.0172139284072,
          26.846107350147697
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0064",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.33,
        "predicted_lst": 43.97,
        "city_percentile": 39.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.355,
        "ndbi": -0.022,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.98813,
        "longitude": 80.82965
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.82964569708305,
          26.988130996567
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0065",
        "city": "Lucknow",
        "severity": "High",
        "lst": 47.3,
        "predicted_lst": 46.62,
        "city_percentile": 72.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.32,
        "ndvi": 0.289,
        "ndbi": 0.052,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 2.8,
        "building_density": 0,
        "latitude": 26.73966,
        "longitude": 80.71915
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.71915291713634,
          26.739656988979533
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0066",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.62,
        "predicted_lst": 44.21,
        "city_percentile": 52.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.352,
        "ndbi": -0.014,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 14.1,
        "building_density": 0,
        "latitude": 26.83668,
        "longitude": 80.83773
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.83773053464013,
          26.83667503966444
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0067",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.72,
        "predicted_lst": 44.08,
        "city_percentile": 11.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.24,
        "ndvi": 0.357,
        "ndbi": -0.058,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 4.8,
        "building_density": 0,
        "latitude": 26.73696,
        "longitude": 81.00886
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.0088595962649,
          26.73696204312717
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0068",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.67,
        "predicted_lst": 44.64,
        "city_percentile": 53.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.2,
        "ndvi": 0.287,
        "ndbi": -0.006,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 15.6,
        "building_density": 8,
        "latitude": 26.90459,
        "longitude": 80.99512
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.99511537241787,
          26.90458767514388
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0069",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.67,
        "predicted_lst": 45.85,
        "city_percentile": 8.6,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.32,
        "ndvi": 0.313,
        "ndbi": 0.067,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 2.3,
        "building_density": 0,
        "latitude": 26.71406,
        "longitude": 80.72751
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.72750724927866,
          26.714055003382125
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0070",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.29,
        "predicted_lst": 45.33,
        "city_percentile": 37.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.27,
        "ndvi": 0.246,
        "ndbi": 0.039,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 16.0,
        "building_density": 12,
        "latitude": 26.81808,
        "longitude": 80.87546
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.87545977657315,
          26.818079913283167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0071",
        "city": "Lucknow",
        "severity": "High",
        "lst": 47.25,
        "predicted_lst": 44.06,
        "city_percentile": 70.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.39,
        "ndbi": -0.065,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.76849,
        "longitude": 80.72427
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.72427331425583,
          26.768492909599768
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0072",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.77,
        "predicted_lst": 44.49,
        "city_percentile": 13.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.357,
        "ndbi": -0.001,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 17.7,
        "building_density": 0,
        "latitude": 26.75637,
        "longitude": 80.96682
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.9668184409681,
          26.756365653264155
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0073",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.91,
        "predicted_lst": 44.0,
        "city_percentile": 20.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.375,
        "ndbi": -0.049,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 4.6,
        "building_density": 0,
        "latitude": 26.75475,
        "longitude": 81.01883
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.01883089591863,
          26.75474868575274
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0074",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.77,
        "predicted_lst": 43.88,
        "city_percentile": 13.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.19,
        "ndvi": 0.381,
        "ndbi": -0.037,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 5.7,
        "building_density": 0,
        "latitude": 26.91752,
        "longitude": 80.89971
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.89971428924437,
          26.9175234152352
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0075",
        "city": "Lucknow",
        "severity": "High",
        "lst": 46.88,
        "predicted_lst": 44.5,
        "city_percentile": 60.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.314,
        "ndbi": 0.017,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.98786,
        "longitude": 80.82695
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.8269507512307,
          26.98786150198176
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0076",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.85,
        "predicted_lst": 42.7,
        "city_percentile": 17.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.15,
        "ndvi": 0.434,
        "ndbi": -0.084,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 6.8,
        "building_density": 0,
        "latitude": 26.91725,
        "longitude": 80.8283
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.82829822415687,
          26.91725392064996
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0077",
        "city": "Lucknow",
        "severity": "Critical",
        "lst": 49.47,
        "predicted_lst": 47.86,
        "city_percentile": 98.5,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.28,
        "ndvi": 0.267,
        "ndbi": 0.094,
        "dist_to_veg": 256.3,
        "impervious_surface_ratio": 5.2,
        "building_density": 0,
        "latitude": 26.78844,
        "longitude": 81.03743
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.0374260222999,
          26.788435508907224
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0078",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.13,
        "predicted_lst": 46.05,
        "city_percentile": 31.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.26,
        "ndvi": 0.247,
        "ndbi": 0.033,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 3.1,
        "building_density": 0,
        "latitude": 26.71136,
        "longitude": 80.81806
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.81805742991791,
          26.711360057529767
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0079",
        "city": "Lucknow",
        "severity": "High",
        "lst": 46.92,
        "predicted_lst": 42.79,
        "city_percentile": 62.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.452,
        "ndbi": -0.102,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 3.1,
        "building_density": 0,
        "latitude": 26.77873,
        "longitude": 80.82479
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.82479479454881,
          26.77873370383873
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0080",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.55,
        "predicted_lst": 44.78,
        "city_percentile": 48.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.271,
        "ndbi": 0.025,
        "dist_to_veg": 153.0,
        "impervious_surface_ratio": 7.5,
        "building_density": 2,
        "latitude": 26.81404,
        "longitude": 80.99808
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.99807981285547,
          26.81403749450463
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0081",
        "city": "Lucknow",
        "severity": "Critical",
        "lst": 49.03,
        "predicted_lst": 45.85,
        "city_percentile": 97.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.311,
        "ndbi": 0.037,
        "dist_to_veg": 120.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.81808,
        "longitude": 80.71349
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.71349353084639,
          26.818079913283167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0082",
        "city": "Lucknow",
        "severity": "Critical",
        "lst": 49.01,
        "predicted_lst": 47.85,
        "city_percentile": 96.9,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.28,
        "ndvi": 0.186,
        "ndbi": 0.086,
        "dist_to_veg": 276.6,
        "impervious_surface_ratio": 9.3,
        "building_density": 1,
        "latitude": 26.80191,
        "longitude": 81.01937
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.01936988508909,
          26.80191023816901
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0083",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.62,
        "predicted_lst": 44.01,
        "city_percentile": 6.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.36,
        "ndbi": -0.018,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.76957,
        "longitude": 80.72589
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.72589028176725,
          26.76957088794072
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0084",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.38,
        "predicted_lst": 44.59,
        "city_percentile": 41.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.27,
        "ndvi": 0.308,
        "ndbi": -0.044,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 6.3,
        "building_density": 0,
        "latitude": 26.77523,
        "longitude": 80.86118
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.86117656355565,
          26.775230274230665
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0085",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.81,
        "predicted_lst": 44.2,
        "city_percentile": 15.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.2,
        "ndvi": 0.283,
        "ndbi": 0.023,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 6.3,
        "building_density": 2,
        "latitude": 26.86336,
        "longitude": 80.97005
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.97005237599093,
          26.86335500360279
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0086",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.3,
        "predicted_lst": 44.48,
        "city_percentile": 38.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.26,
        "ndvi": 0.329,
        "ndbi": -0.017,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 3.8,
        "building_density": 0,
        "latitude": 26.71702,
        "longitude": 80.76254
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.76254154535933,
          26.71701944381972
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0087",
        "city": "Lucknow",
        "severity": "High",
        "lst": 47.38,
        "predicted_lst": 46.37,
        "city_percentile": 73.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.32,
        "ndvi": 0.327,
        "ndbi": 0.031,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.71729,
        "longitude": 80.71376
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.71376302543163,
          26.717288938404955
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0088",
        "city": "Lucknow",
        "severity": "Critical",
        "lst": 49.75,
        "predicted_lst": 47.7,
        "city_percentile": 99.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.28,
        "ndvi": 0.26,
        "ndbi": 0.099,
        "dist_to_veg": 362.5,
        "impervious_surface_ratio": 9.6,
        "building_density": 0,
        "latitude": 26.80487,
        "longitude": 81.01775
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.01775291757768,
          26.80487467860661
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0089",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.62,
        "predicted_lst": 44.79,
        "city_percentile": 52.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.19,
        "ndvi": 0.301,
        "ndbi": 0.027,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 14.3,
        "building_density": 0,
        "latitude": 26.91106,
        "longitude": 80.90349
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.90348721343767,
          26.911055545189537
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0090",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.61,
        "predicted_lst": 44.81,
        "city_percentile": 51.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.27,
        "ndvi": 0.224,
        "ndbi": -0.006,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 11.2,
        "building_density": 1,
        "latitude": 26.82536,
        "longitude": 80.89082
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.89082096793159,
          26.825356267084537
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0091",
        "city": "Lucknow",
        "severity": "High",
        "lst": 47.17,
        "predicted_lst": 44.65,
        "city_percentile": 68.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.26,
        "ndvi": 0.363,
        "ndbi": -0.007,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 3.0,
        "building_density": 0,
        "latitude": 26.73561,
        "longitude": 80.75257
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.7525702457056,
          26.735614570201
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0092",
        "city": "Lucknow",
        "severity": "Critical",
        "lst": 49.91,
        "predicted_lst": 47.61,
        "city_percentile": 99.2,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.19,
        "ndvi": 0.23,
        "ndbi": 0.098,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 1.7,
        "building_density": 45,
        "latitude": 26.92803,
        "longitude": 80.89136
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.89135995710205,
          26.928033704059395
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0093",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.65,
        "predicted_lst": 45.55,
        "city_percentile": 53.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.32,
        "ndvi": 0.378,
        "ndbi": -0.045,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 4.0,
        "building_density": 0,
        "latitude": 26.72483,
        "longitude": 80.74556
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.74556338648947,
          26.72483478679156
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0094",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.34,
        "predicted_lst": 41.69,
        "city_percentile": 40.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 32.99,
        "ndvi": 0.59,
        "ndbi": -0.238,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 3.5,
        "building_density": 0,
        "latitude": 26.96549,
        "longitude": 80.84474
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.84473739385626,
          26.96549345140718
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0095",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.83,
        "predicted_lst": 44.6,
        "city_percentile": 16.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.02,
        "ndvi": 0.404,
        "ndbi": -0.052,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 3.7,
        "building_density": 0,
        "latitude": 26.98382,
        "longitude": 80.85309
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.85309172599857,
          26.98381908320322
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0096",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.02,
        "predicted_lst": 42.49,
        "city_percentile": 25.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.439,
        "ndbi": -0.122,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 3.2,
        "building_density": 0,
        "latitude": 26.76957,
        "longitude": 80.77709
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.77709425296206,
          26.76957088794072
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0097",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.33,
        "predicted_lst": 44.49,
        "city_percentile": 39.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.24,
        "ndvi": 0.34,
        "ndbi": -0.032,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 4.9,
        "building_density": 0,
        "latitude": 26.71998,
        "longitude": 81.00509
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.0050866720716,
          26.71998388425732
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0098",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.73,
        "predicted_lst": 43.66,
        "city_percentile": 11.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.13,
        "ndvi": 0.282,
        "ndbi": -0.022,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.93989,
        "longitude": 80.70002
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.7000188015846,
          26.939891465809776
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0099",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.88,
        "predicted_lst": 44.1,
        "city_percentile": 19.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.27,
        "ndvi": 0.378,
        "ndbi": -0.087,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 13.9,
        "building_density": 0,
        "latitude": 26.8011,
        "longitude": 80.8504
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.85039678014621,
          26.80110175441331
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0100",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.25,
        "predicted_lst": 44.31,
        "city_percentile": 36.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.2,
        "ndvi": 0.283,
        "ndbi": 0.025,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 20.2,
        "building_density": 20,
        "latitude": 26.90594,
        "longitude": 80.997
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.99700183451452,
          26.905935148070057
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0101",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.98,
        "predicted_lst": 45.4,
        "city_percentile": 23.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.02,
        "ndvi": 0.27,
        "ndbi": 0.004,
        "dist_to_veg": 216.3,
        "impervious_surface_ratio": 24.5,
        "building_density": 4,
        "latitude": 26.95471,
        "longitude": 80.93879
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.93879100410358,
          26.954713667997748
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0102",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.36,
        "predicted_lst": 45.67,
        "city_percentile": 41.0,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 33.21,
        "ndvi": 0.339,
        "ndbi": -0.016,
        "dist_to_veg": 451.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.81619,
        "longitude": 80.70379
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.7037917257779,
          26.81619345118652
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0103",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.49,
        "predicted_lst": 46.47,
        "city_percentile": 46.6,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 33.21,
        "ndvi": 0.261,
        "ndbi": 0.059,
        "dist_to_veg": 488.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.82643,
        "longitude": 80.70298
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.7029832420222,
          26.82643424542548
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0104",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.67,
        "predicted_lst": 45.82,
        "city_percentile": 8.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.19,
        "ndvi": 0.273,
        "ndbi": 0.047,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 19.1,
        "building_density": 7,
        "latitude": 26.93908,
        "longitude": 80.8981
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.89809732173296,
          26.939082982054067
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0105",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.81,
        "predicted_lst": 46.1,
        "city_percentile": 15.6,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.21,
        "ndvi": 0.263,
        "ndbi": 0.057,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.81538,
        "longitude": 80.70649
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.70648667163026,
          26.81538496743081
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0106",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.09,
        "predicted_lst": 45.52,
        "city_percentile": 29.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.356,
        "ndbi": -0.046,
        "dist_to_veg": 180.0,
        "impervious_surface_ratio": 15.7,
        "building_density": 0,
        "latitude": 26.77334,
        "longitude": 81.01587
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.01586645548103,
          26.773343812134016
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0107",
        "city": "Lucknow",
        "severity": "Severe",
        "lst": 48.73,
        "predicted_lst": 48.62,
        "city_percentile": 94.8,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.15,
        "ndvi": 0.199,
        "ndbi": 0.111,
        "dist_to_veg": 180.0,
        "impervious_surface_ratio": 11.5,
        "building_density": 0,
        "latitude": 26.91294,
        "longitude": 80.84096
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.84096446966295,
          26.912942007286187
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0108",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.51,
        "predicted_lst": 47.14,
        "city_percentile": 47.5,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 33.21,
        "ndvi": 0.255,
        "ndbi": 0.081,
        "dist_to_veg": 589.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.8259,
        "longitude": 80.70217
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.7021747582665,
          26.82589525625501
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0109",
        "city": "Lucknow",
        "severity": "Critical",
        "lst": 51.68,
        "predicted_lst": 47.73,
        "city_percentile": 100.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.2,
        "ndvi": 0.267,
        "ndbi": 0.113,
        "dist_to_veg": 84.9,
        "impervious_surface_ratio": 9.9,
        "building_density": 0,
        "latitude": 26.87413,
        "longitude": 81.04874
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.0487447948798,
          26.874134787012224
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0110",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.27,
        "predicted_lst": 44.31,
        "city_percentile": 37.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.377,
        "ndbi": -0.028,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.81727,
        "longitude": 80.71269
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.71268504709069,
          26.81727142952746
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0111",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.71,
        "predicted_lst": 44.94,
        "city_percentile": 10.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.19,
        "ndvi": 0.269,
        "ndbi": -0.001,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 20.5,
        "building_density": 0,
        "latitude": 26.92803,
        "longitude": 80.91831
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.91830941562564,
          26.928033704059395
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0112",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.5,
        "predicted_lst": 46.42,
        "city_percentile": 47.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.242,
        "ndbi": 0.048,
        "dist_to_veg": 192.1,
        "impervious_surface_ratio": 7.0,
        "building_density": 0,
        "latitude": 26.78143,
        "longitude": 80.82183
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.82183035411121,
          26.78142864969109
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0113",
        "city": "Lucknow",
        "severity": "Critical",
        "lst": 49.7,
        "predicted_lst": 47.71,
        "city_percentile": 98.9,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.2,
        "ndvi": 0.194,
        "ndbi": 0.102,
        "dist_to_veg": 127.3,
        "impervious_surface_ratio": 26.0,
        "building_density": 8,
        "latitude": 26.9089,
        "longitude": 80.95388
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.95388270087678,
          26.90889958850765
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0114",
        "city": "Lucknow",
        "severity": "High",
        "lst": 47.3,
        "predicted_lst": 46.75,
        "city_percentile": 72.1,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.05,
        "ndvi": 0.21,
        "ndbi": 0.073,
        "dist_to_veg": 323.1,
        "impervious_surface_ratio": 4.9,
        "building_density": 0,
        "latitude": 26.96307,
        "longitude": 81.02368
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.02368179845287,
          26.96306800014006
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0115",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.54,
        "predicted_lst": 44.18,
        "city_percentile": 1.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.19,
        "ndvi": 0.346,
        "ndbi": -0.012,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 16.2,
        "building_density": 0,
        "latitude": 26.94259,
        "longitude": 80.9113
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.91130255640951,
          26.94258641166213
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0116",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.41,
        "predicted_lst": 46.53,
        "city_percentile": 43.4,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.28,
        "ndvi": 0.292,
        "ndbi": 0.079,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 3.7,
        "building_density": 0,
        "latitude": 26.79975,
        "longitude": 80.98083
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.98083215940036,
          26.79975428148713
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0117",
        "city": "Lucknow",
        "severity": "Severe",
        "lst": 47.81,
        "predicted_lst": 46.99,
        "city_percentile": 82.9,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.19,
        "ndvi": 0.241,
        "ndbi": 0.138,
        "dist_to_veg": 180.0,
        "impervious_surface_ratio": 10.7,
        "building_density": 0,
        "latitude": 26.88626,
        "longitude": 80.88974
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.88974298959064,
          26.88626204334784
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0118",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.05,
        "predicted_lst": 45.02,
        "city_percentile": 27.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.28,
        "ndvi": 0.342,
        "ndbi": 0.012,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 4.7,
        "building_density": 0,
        "latitude": 26.81053,
        "longitude": 81.04874
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.0487447948798,
          26.81053406489656
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0119",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 46.44,
        "predicted_lst": 45.75,
        "city_percentile": 44.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.21,
        "ndvi": 0.343,
        "ndbi": 0.01,
        "dist_to_veg": 189.7,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.82293,
        "longitude": 80.70676
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.7067561662155,
          26.82293081581741
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_LUC_0120",
        "city": "Lucknow",
        "severity": "Moderate",
        "lst": 45.54,
        "predicted_lst": 45.65,
        "city_percentile": 1.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.19,
        "ndvi": 0.355,
        "ndbi": 0.015,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 22.5,
        "building_density": 11,
        "latitude": 26.88195,
        "longitude": 80.8601
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.8600985852147,
          26.881950129984062
        ]
      }
    }
  ],
  "Kanpur": [
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0001",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.76,
        "predicted_lst": 44.35,
        "city_percentile": 11.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.38,
        "ndvi": 0.44,
        "ndbi": -0.089,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.58631,
        "longitude": 80.19337
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.1933689813412,
          26.58631456998033
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0002",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.65,
        "predicted_lst": 46.99,
        "city_percentile": 52.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.53,
        "ndvi": 0.264,
        "ndbi": 0.02,
        "dist_to_veg": 161.6,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.51274,
        "longitude": 80.47122
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.47121789871936,
          26.51274254821094
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0003",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.71,
        "predicted_lst": 47.13,
        "city_percentile": 8.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.52,
        "ndvi": 0.302,
        "ndbi": 0.0,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 6.2,
        "building_density": 0,
        "latitude": 26.47986,
        "longitude": 80.19714
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.1971419055345,
          26.479864208812167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0004",
        "city": "Kanpur",
        "severity": "High",
        "lst": 49.31,
        "predicted_lst": 48.36,
        "city_percentile": 72.5,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.59,
        "ndvi": 0.252,
        "ndbi": 0.088,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.54131,
        "longitude": 80.33701
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.33700959527191,
          26.541308974245943
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0005",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.63,
        "predicted_lst": 46.31,
        "city_percentile": 3.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.67,
        "ndvi": 0.259,
        "ndbi": -0.004,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 11.2,
        "building_density": 3,
        "latitude": 26.44726,
        "longitude": 80.2532
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.25319677926355,
          26.44725536399863
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0006",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.29,
        "predicted_lst": 45.64,
        "city_percentile": 38.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.66,
        "ndvi": 0.407,
        "ndbi": -0.063,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 4.6,
        "building_density": 1,
        "latitude": 26.44914,
        "longitude": 80.19121
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.1912130246593,
          26.44914182609528
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0007",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.38,
        "predicted_lst": 45.07,
        "city_percentile": 43.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.38,
        "ndbi": -0.039,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.50115,
        "longitude": 80.37743
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.37743378305728,
          26.5011542810458
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0008",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.8,
        "predicted_lst": 47.69,
        "city_percentile": 57.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.45,
        "ndvi": 0.374,
        "ndbi": -0.012,
        "dist_to_veg": 300.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.6386,
        "longitude": 80.41031
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.41031212245606,
          26.638596519516085
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0009",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.22,
        "predicted_lst": 46.87,
        "city_percentile": 35.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.53,
        "ndvi": 0.298,
        "ndbi": 0.016,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.46693,
        "longitude": 80.50356
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.50355724894766,
          26.466928468720845
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0010",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.58,
        "predicted_lst": 46.79,
        "city_percentile": 1.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.43,
        "ndvi": 0.338,
        "ndbi": -0.006,
        "dist_to_veg": 174.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.61057,
        "longitude": 80.32111
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.32110941474299,
          26.61056908265156
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0011",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.82,
        "predicted_lst": 45.12,
        "city_percentile": 15.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.391,
        "ndbi": -0.003,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.51247,
        "longitude": 80.36288
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.36288107545455,
          26.512473053625705
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0012",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.66,
        "predicted_lst": 46.61,
        "city_percentile": 5.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.52,
        "ndvi": 0.334,
        "ndbi": 0.016,
        "dist_to_veg": 84.9,
        "impervious_surface_ratio": 6.6,
        "building_density": 0,
        "latitude": 26.51193,
        "longitude": 80.18555
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.18555363836936,
          26.51193406445524
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0013",
        "city": "Kanpur",
        "severity": "Severe",
        "lst": 49.96,
        "predicted_lst": 47.37,
        "city_percentile": 84.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.66,
        "ndvi": 0.434,
        "ndbi": -0.074,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.35212,
        "longitude": 80.15348
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.15348378272628,
          26.352123775410373
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0014",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.11,
        "predicted_lst": 45.0,
        "city_percentile": 30.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.51,
        "ndvi": 0.399,
        "ndbi": -0.096,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.54293,
        "longitude": 80.1419
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.14189551556115,
          26.54292594175736
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0015",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.65,
        "predicted_lst": 46.11,
        "city_percentile": 5.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.44,
        "ndvi": 0.456,
        "ndbi": -0.097,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.56368,
        "longitude": 80.52781
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.52781176161889,
          26.56367702482052
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0016",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.41,
        "predicted_lst": 46.75,
        "city_percentile": 44.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.44,
        "ndvi": 0.356,
        "ndbi": -0.025,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.61596,
        "longitude": 80.46098
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.46097710448039,
          26.615958974356275
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0017",
        "city": "Kanpur",
        "severity": "High",
        "lst": 49.33,
        "predicted_lst": 46.25,
        "city_percentile": 73.1,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 33.69,
        "ndvi": 0.419,
        "ndbi": -0.097,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 22.3,
        "building_density": 55,
        "latitude": 26.42839,
        "longitude": 80.35857
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.35856916209077,
          26.42839074303212
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0018",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.62,
        "predicted_lst": 46.08,
        "city_percentile": 3.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.67,
        "ndvi": 0.363,
        "ndbi": -0.027,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 2.3,
        "building_density": 0,
        "latitude": 26.35185,
        "longitude": 80.25778
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.25777818721257,
          26.351854280825137
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0019",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.79,
        "predicted_lst": 47.06,
        "city_percentile": 13.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.66,
        "ndvi": 0.292,
        "ndbi": 0.013,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 5.5,
        "building_density": 0,
        "latitude": 26.35401,
        "longitude": 80.23999
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.239991544587,
          26.354010237507023
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0020",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.72,
        "predicted_lst": 46.67,
        "city_percentile": 8.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.45,
        "ndvi": 0.325,
        "ndbi": 0.021,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.59305,
        "longitude": 80.41328
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.41327656289366,
          26.59305193461123
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0021",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.84,
        "predicted_lst": 46.51,
        "city_percentile": 16.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.44,
        "ndvi": 0.187,
        "ndbi": 0.069,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.64021,
        "longitude": 80.50814
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.50813865689668,
          26.640213487027506
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0022",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.74,
        "predicted_lst": 46.71,
        "city_percentile": 10.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.45,
        "ndvi": 0.358,
        "ndbi": -0.021,
        "dist_to_veg": 169.7,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.58497,
        "longitude": 80.44508
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.44507692395148,
          26.58496709705415
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0023",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.85,
        "predicted_lst": 47.66,
        "city_percentile": 16.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.317,
        "ndbi": 0.006,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.53646,
        "longitude": 80.42729
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.42729028132591,
          26.536458071711696
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0024",
        "city": "Kanpur",
        "severity": "Severe",
        "lst": 49.9,
        "predicted_lst": 47.7,
        "city_percentile": 83.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.63,
        "ndvi": 0.383,
        "ndbi": -0.04,
        "dist_to_veg": 212.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.44779,
        "longitude": 80.51434
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.51433703235709,
          26.4477943531691
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0025",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.69,
        "predicted_lst": 45.81,
        "city_percentile": 7.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.65,
        "ndvi": 0.308,
        "ndbi": -0.044,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.42381,
        "longitude": 80.13462
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.13461916175977,
          26.42380933508311
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0026",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.99,
        "predicted_lst": 46.76,
        "city_percentile": 23.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.65,
        "ndvi": 0.302,
        "ndbi": 0.002,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.37287,
        "longitude": 80.11117
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.11117313284426,
          26.372874858473534
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0027",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.74,
        "predicted_lst": 46.31,
        "city_percentile": 10.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.65,
        "ndvi": 0.402,
        "ndbi": -0.069,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.44672,
        "longitude": 80.10524
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.10524425196907,
          26.44671637482816
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0028",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.51,
        "predicted_lst": 47.29,
        "city_percentile": 47.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.24,
        "ndbi": 0.04,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.51166,
        "longitude": 80.43268
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.43268017303063,
          26.51166456987
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0029",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.4,
        "predicted_lst": 45.21,
        "city_percentile": 43.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.37,
        "ndvi": 0.317,
        "ndbi": -0.008,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.58685,
        "longitude": 80.10848
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.1084781869919,
          26.586853559150804
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0030",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.27,
        "predicted_lst": 47.35,
        "city_percentile": 37.9,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.44,
        "ndvi": 0.232,
        "ndbi": 0.072,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.5591,
        "longitude": 80.53778
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.53778306127262,
          26.55909561687151
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0031",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.95,
        "predicted_lst": 47.54,
        "city_percentile": 22.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.69,
        "ndvi": 0.258,
        "ndbi": 0.053,
        "dist_to_veg": 349.9,
        "impervious_surface_ratio": 24.7,
        "building_density": 0,
        "latitude": 26.38285,
        "longitude": 80.41409
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.41408504664936,
          26.382846158127258
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0032",
        "city": "Kanpur",
        "severity": "High",
        "lst": 48.92,
        "predicted_lst": 47.02,
        "city_percentile": 61.9,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 33.38,
        "ndvi": 0.339,
        "ndbi": -0.021,
        "dist_to_veg": 420.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.63994,
        "longitude": 80.2028
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.20280129182444,
          26.639943992442262
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0033",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.62,
        "predicted_lst": 47.61,
        "city_percentile": 51.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.65,
        "ndvi": 0.336,
        "ndbi": -0.009,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.35185,
        "longitude": 80.14621
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.14620742892492,
          26.351854280825137
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0034",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.65,
        "predicted_lst": 46.12,
        "city_percentile": 5.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.44,
        "ndvi": 0.403,
        "ndbi": -0.045,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.63914,
        "longitude": 80.46583
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.46582800701465,
          26.63913550868656
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0035",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.42,
        "predicted_lst": 46.53,
        "city_percentile": 44.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.53,
        "ndvi": 0.345,
        "ndbi": -0.012,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.48148,
        "longitude": 80.46394
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.46394154491799,
          26.481481176323584
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0036",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.59,
        "predicted_lst": 46.48,
        "city_percentile": 50.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.52,
        "ndvi": 0.343,
        "ndbi": 0.023,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 9.8,
        "building_density": 0,
        "latitude": 26.53188,
        "longitude": 80.22706
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.22705580449568,
          26.531876663762688
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0037",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.72,
        "predicted_lst": 47.17,
        "city_percentile": 8.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.316,
        "ndbi": -0.005,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.53376,
        "longitude": 80.43241
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.4324106784454,
          26.533763125859338
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0038",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.75,
        "predicted_lst": 47.14,
        "city_percentile": 10.8,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.43,
        "ndvi": 0.264,
        "ndbi": 0.091,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 5.5,
        "building_density": 0,
        "latitude": 26.61704,
        "longitude": 80.25751
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.25750869262733,
          26.61703695269722
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0039",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.88,
        "predicted_lst": 46.4,
        "city_percentile": 17.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.45,
        "ndvi": 0.312,
        "ndbi": 0.028,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.61731,
        "longitude": 80.40789
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.40788667118893,
          26.617306447282456
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0040",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.93,
        "predicted_lst": 46.64,
        "city_percentile": 20.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.53,
        "ndvi": 0.273,
        "ndbi": 0.003,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.48256,
        "longitude": 80.4599
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.45989912613945,
          26.482559154664525
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0041",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.07,
        "predicted_lst": 46.2,
        "city_percentile": 28.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.52,
        "ndvi": 0.344,
        "ndbi": -0.039,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 39.1,
        "building_density": 0,
        "latitude": 26.47717,
        "longitude": 80.2187
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.21870147235336,
          26.47716926295981
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0042",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.0,
        "predicted_lst": 46.52,
        "city_percentile": 24.6,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.66,
        "ndvi": 0.113,
        "ndbi": 0.076,
        "dist_to_veg": 174.9,
        "impervious_surface_ratio": 5.9,
        "building_density": 0,
        "latitude": 26.44483,
        "longitude": 80.18501
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.18501464919888,
          26.444829912731507
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0043",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.43,
        "predicted_lst": 46.01,
        "city_percentile": 44.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.45,
        "ndvi": 0.38,
        "ndbi": -0.063,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.59575,
        "longitude": 80.37231
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3723133859378,
          26.595746880463587
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0044",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.53,
        "predicted_lst": 47.46,
        "city_percentile": 48.0,
        "primary_driver": "Intense Building Clustered Thermal Trapping",
        "recommended_action": "Cool roof implementation & green wall shading",
        "air_temp": 33.67,
        "ndvi": 0.384,
        "ndbi": -0.055,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 20.6,
        "building_density": 52,
        "latitude": 26.4265,
        "longitude": 80.34186
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.34186049780615,
          26.426504280935468
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0045",
        "city": "Kanpur",
        "severity": "High",
        "lst": 49.06,
        "predicted_lst": 47.42,
        "city_percentile": 66.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.53,
        "ndvi": 0.197,
        "ndbi": 0.056,
        "dist_to_veg": 169.7,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.50924,
        "longitude": 80.4661
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.46609750159988,
          26.50923911860288
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0046",
        "city": "Kanpur",
        "severity": "High",
        "lst": 49.57,
        "predicted_lst": 48.09,
        "city_percentile": 78.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.63,
        "ndvi": 0.217,
        "ndbi": 0.043,
        "dist_to_veg": 212.1,
        "impervious_surface_ratio": 5.3,
        "building_density": 0,
        "latitude": 26.38554,
        "longitude": 80.47257
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.47256537164554,
          26.385541103979616
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0047",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.89,
        "predicted_lst": 46.93,
        "city_percentile": 18.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.66,
        "ndvi": 0.301,
        "ndbi": 0.016,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 10.6,
        "building_density": 0,
        "latitude": 26.3621,
        "longitude": 80.22813
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.22813378283662,
          26.362095075064097
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0048",
        "city": "Kanpur",
        "severity": "Severe",
        "lst": 51.34,
        "predicted_lst": 50.34,
        "city_percentile": 95.3,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.66,
        "ndvi": 0.173,
        "ndbi": 0.094,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 0.9,
        "building_density": 2,
        "latitude": 26.44726,
        "longitude": 80.23083
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.23082872868898,
          26.44725536399863
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0049",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.76,
        "predicted_lst": 45.97,
        "city_percentile": 11.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.45,
        "ndvi": 0.36,
        "ndbi": -0.014,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.63644,
        "longitude": 80.41247
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.41246807913794,
          26.6364405628342
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0050",
        "city": "Kanpur",
        "severity": "Critical",
        "lst": 52.09,
        "predicted_lst": 48.19,
        "city_percentile": 98.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.24,
        "ndbi": -0.025,
        "dist_to_veg": 228.5,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.51813,
        "longitude": 80.4316
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.43160219468969,
          26.518132439915657
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0051",
        "city": "Kanpur",
        "severity": "High",
        "lst": 49.54,
        "predicted_lst": 47.17,
        "city_percentile": 77.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.45,
        "ndvi": 0.245,
        "ndbi": 0.013,
        "dist_to_veg": 169.7,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.56449,
        "longitude": 80.39522
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.39522042568285,
          26.564485508576222
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0052",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.82,
        "predicted_lst": 46.29,
        "city_percentile": 15.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.45,
        "ndvi": 0.32,
        "ndbi": 0.007,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.59009,
        "longitude": 80.3936
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.39360345817143,
          26.59008749417364
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0053",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.99,
        "predicted_lst": 46.76,
        "city_percentile": 23.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.65,
        "ndvi": 0.449,
        "ndbi": -0.091,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.35132,
        "longitude": 80.14405
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.14405147224304,
          26.351315291654664
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0054",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.23,
        "predicted_lst": 46.88,
        "city_percentile": 35.5,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.45,
        "ndvi": 0.227,
        "ndbi": 0.06,
        "dist_to_veg": 84.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.62566,
        "longitude": 80.39845
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.39845436070568,
          26.625660779424766
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0055",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.09,
        "predicted_lst": 47.53,
        "city_percentile": 29.4,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.45,
        "ndvi": 0.234,
        "ndbi": 0.051,
        "dist_to_veg": 201.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.58928,
        "longitude": 80.38363
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.38363215851771,
          26.58927901041793
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0056",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.95,
        "predicted_lst": 46.4,
        "city_percentile": 21.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.43,
        "ndvi": 0.327,
        "ndbi": 0.008,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.62054,
        "longitude": 80.29335
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2933514724637,
          26.620540382305283
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0057",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.16,
        "predicted_lst": 47.82,
        "city_percentile": 32.6,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.69,
        "ndvi": 0.22,
        "ndbi": 0.076,
        "dist_to_veg": 127.3,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.43324,
        "longitude": 80.42648
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.4264817975702,
          26.433241645566365
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0058",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.12,
        "predicted_lst": 47.38,
        "city_percentile": 30.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.66,
        "ndvi": 0.387,
        "ndbi": -0.108,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.35185,
        "longitude": 80.15079
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.15078883687393,
          26.351854280825137
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0059",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.35,
        "predicted_lst": 47.08,
        "city_percentile": 41.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.67,
        "ndvi": 0.283,
        "ndbi": -0.005,
        "dist_to_veg": 365.0,
        "impervious_surface_ratio": 36.8,
        "building_density": 6,
        "latitude": 26.40144,
        "longitude": 80.31653
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.31652800679397,
          26.40144128450853
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0060",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.79,
        "predicted_lst": 46.79,
        "city_percentile": 13.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.67,
        "ndvi": 0.359,
        "ndbi": -0.001,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 1.7,
        "building_density": 0,
        "latitude": 26.35401,
        "longitude": 80.25562
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.25562223053068,
          26.354010237507023
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0061",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.59,
        "predicted_lst": 44.78,
        "city_percentile": 1.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.51,
        "ndvi": 0.457,
        "ndbi": -0.081,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.54885,
        "longitude": 80.13543
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.13542764551548,
          26.548854822632546
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0062",
        "city": "Kanpur",
        "severity": "High",
        "lst": 49.11,
        "predicted_lst": 48.85,
        "city_percentile": 67.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.65,
        "ndvi": 0.238,
        "ndbi": 0.052,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.35671,
        "longitude": 80.1392
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.13920056970879,
          26.35670518335938
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0063",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.22,
        "predicted_lst": 46.82,
        "city_percentile": 35.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.53,
        "ndvi": 0.311,
        "ndbi": -0.028,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.4963,
        "longitude": 80.45828
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.45828215862804,
          26.49630337851156
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0064",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.89,
        "predicted_lst": 47.07,
        "city_percentile": 18.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.67,
        "ndvi": 0.288,
        "ndbi": 0.038,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 2.7,
        "building_density": 0,
        "latitude": 26.40387,
        "longitude": 80.27637
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.27637331359384,
          26.40386673577565
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0065",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.28,
        "predicted_lst": 46.52,
        "city_percentile": 38.3,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.53,
        "ndvi": 0.211,
        "ndbi": 0.076,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.46855,
        "longitude": 80.51029
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.51029461357857,
          26.46854543623226
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0066",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.14,
        "predicted_lst": 45.44,
        "city_percentile": 32.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.67,
        "ndvi": 0.392,
        "ndbi": -0.104,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 9.1,
        "building_density": 7,
        "latitude": 26.43243,
        "longitude": 80.3486
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.34859786243705,
          26.432433161810657
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0067",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.25,
        "predicted_lst": 45.85,
        "city_percentile": 37.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.52,
        "ndvi": 0.356,
        "ndbi": -0.007,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.53161,
        "longitude": 80.17154
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.17153991993709,
          26.53160716917745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0068",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.63,
        "predicted_lst": 46.77,
        "city_percentile": 51.9,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.52,
        "ndvi": 0.193,
        "ndbi": 0.065,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 3.9,
        "building_density": 2,
        "latitude": 26.45157,
        "longitude": 80.23325
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2332541799561,
          26.451567277362404
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0069",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.0,
        "predicted_lst": 46.1,
        "city_percentile": 24.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.53,
        "ndvi": 0.393,
        "ndbi": -0.097,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.53996,
        "longitude": 80.52997
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.52996771830078,
          26.539961501319763
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0070",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.9,
        "predicted_lst": 46.39,
        "city_percentile": 19.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.43,
        "ndvi": 0.348,
        "ndbi": 0.032,
        "dist_to_veg": 84.9,
        "impervious_surface_ratio": 7.7,
        "building_density": 0,
        "latitude": 26.58308,
        "longitude": 80.2567
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.25670020887162,
          26.5830806349575
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0071",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.97,
        "predicted_lst": 46.78,
        "city_percentile": 22.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.52,
        "ndvi": 0.366,
        "ndbi": 0.024,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 7.9,
        "building_density": 0,
        "latitude": 26.53242,
        "longitude": 80.22652
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2265168153252,
          26.53241565293316
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0072",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.6,
        "predicted_lst": 46.43,
        "city_percentile": 2.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.288,
        "ndbi": 0.019,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.45588,
        "longitude": 80.44481
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.44480742936625,
          26.455879190726176
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0073",
        "city": "Kanpur",
        "severity": "High",
        "lst": 48.9,
        "predicted_lst": 48.39,
        "city_percentile": 61.1,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.65,
        "ndvi": 0.2,
        "ndbi": 0.148,
        "dist_to_veg": 120.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.41734,
        "longitude": 80.12626
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.12626482961747,
          26.41734146503745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0074",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.73,
        "predicted_lst": 46.26,
        "city_percentile": 10.1,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.45,
        "ndvi": 0.274,
        "ndbi": 0.057,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.64237,
        "longitude": 80.41274
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.41273757372318,
          26.642369443709388
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0075",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.65,
        "predicted_lst": 46.25,
        "city_percentile": 52.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.53,
        "ndvi": 0.272,
        "ndbi": 0.049,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.52945,
        "longitude": 80.46448
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.46448053408847,
          26.52945121249557
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0076",
        "city": "Kanpur",
        "severity": "Critical",
        "lst": 51.94,
        "predicted_lst": 49.22,
        "city_percentile": 97.5,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.52,
        "ndvi": 0.201,
        "ndbi": 0.095,
        "dist_to_veg": 295.5,
        "impervious_surface_ratio": 12.9,
        "building_density": 0,
        "latitude": 26.45049,
        "longitude": 80.23703
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2370271041494,
          26.45048929902146
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0077",
        "city": "Kanpur",
        "severity": "High",
        "lst": 48.87,
        "predicted_lst": 46.67,
        "city_percentile": 60.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.63,
        "ndvi": 0.397,
        "ndbi": -0.041,
        "dist_to_veg": 189.7,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.39255,
        "longitude": 80.51703
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.51703197820946,
          26.39254796319575
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0078",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.62,
        "predicted_lst": 46.69,
        "city_percentile": 3.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.67,
        "ndvi": 0.312,
        "ndbi": -0.016,
        "dist_to_veg": 313.2,
        "impervious_surface_ratio": 44.7,
        "building_density": 14,
        "latitude": 26.42677,
        "longitude": 80.28985
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.28984804285562,
          26.426773775520704
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0079",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.03,
        "predicted_lst": 45.81,
        "city_percentile": 25.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.38,
        "ndvi": 0.337,
        "ndbi": -0.011,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.56961,
        "longitude": 80.15537
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.15537024482293,
          26.569605905695703
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0080",
        "city": "Kanpur",
        "severity": "High",
        "lst": 49.09,
        "predicted_lst": 49.04,
        "city_percentile": 66.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.65,
        "ndvi": 0.264,
        "ndbi": 0.048,
        "dist_to_veg": 391.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.37934,
        "longitude": 80.14378
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.1437819776578,
          26.379342728519195
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0081",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.59,
        "predicted_lst": 45.27,
        "city_percentile": 1.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.45,
        "ndvi": 0.446,
        "ndbi": -0.087,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.56961,
        "longitude": 80.3715
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3715049021821,
          26.569605905695703
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0082",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.57,
        "predicted_lst": 46.53,
        "city_percentile": 49.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.362,
        "ndbi": -0.04,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.54158,
        "longitude": 80.42001
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.42001392752455,
          26.54157846883118
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0083",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.8,
        "predicted_lst": 47.86,
        "city_percentile": 57.4,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.65,
        "ndvi": 0.173,
        "ndbi": 0.06,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.3532,
        "longitude": 80.14136
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.14135652639067,
          26.35320175375132
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0084",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.2,
        "predicted_lst": 48.67,
        "city_percentile": 34.3,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 33.53,
        "ndvi": 0.166,
        "ndbi": 0.07,
        "dist_to_veg": 442.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.46747,
        "longitude": 80.47688
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.47687728500931,
          26.46746745789132
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0085",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.77,
        "predicted_lst": 46.3,
        "city_percentile": 12.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.53,
        "ndvi": 0.35,
        "ndbi": -0.044,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.46908,
        "longitude": 80.53724
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.53724407210214,
          26.46908442540273
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0086",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.69,
        "predicted_lst": 46.4,
        "city_percentile": 7.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.335,
        "ndbi": 0.021,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 26.2,
        "building_density": 10,
        "latitude": 26.46181,
        "longitude": 80.36126
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.36126410794313,
          26.461808071601364
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0087",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.65,
        "predicted_lst": 46.4,
        "city_percentile": 5.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.44,
        "ndvi": 0.407,
        "ndbi": -0.06,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.63159,
        "longitude": 80.46502
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.46501952325893,
          26.631589660299955
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0088",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.35,
        "predicted_lst": 47.09,
        "city_percentile": 41.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.63,
        "ndvi": 0.281,
        "ndbi": 0.033,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.42327,
        "longitude": 80.53293
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.53293215873838,
          26.42327034591264
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0089",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.95,
        "predicted_lst": 44.52,
        "city_percentile": 21.6,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.413,
        "ndbi": -0.068,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.51813,
        "longitude": 80.36153
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.36153360252837,
          26.518132439915657
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0090",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.44,
        "predicted_lst": 47.2,
        "city_percentile": 45.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.52,
        "ndvi": 0.227,
        "ndbi": 0.032,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.49738,
        "longitude": 80.1516
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.15159732062963,
          26.497381356852497
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0091",
        "city": "Kanpur",
        "severity": "High",
        "lst": 49.31,
        "predicted_lst": 48.08,
        "city_percentile": 72.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.377,
        "ndbi": -0.062,
        "dist_to_veg": 258.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.53134,
        "longitude": 80.42001
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.42001392752455,
          26.531337674592216
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0092",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.25,
        "predicted_lst": 47.03,
        "city_percentile": 36.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.45,
        "ndvi": 0.34,
        "ndbi": -0.019,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.58389,
        "longitude": 80.43052
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.43052421634874,
          26.58388911871321
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0093",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.35,
        "predicted_lst": 46.21,
        "city_percentile": 41.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.67,
        "ndvi": 0.302,
        "ndbi": 0.017,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 2.0,
        "building_density": 0,
        "latitude": 26.35455,
        "longitude": 80.26263
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.26262908974681,
          26.35454922667749
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0094",
        "city": "Kanpur",
        "severity": "High",
        "lst": 49.24,
        "predicted_lst": 46.97,
        "city_percentile": 70.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.238,
        "ndbi": 0.041,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.5467,
        "longitude": 80.43349
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.43348865678634,
          26.54669886595066
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0095",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.59,
        "predicted_lst": 46.63,
        "city_percentile": 50.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.53,
        "ndvi": 0.232,
        "ndbi": 0.02,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.52379,
        "longitude": 80.45963
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.45962963155422,
          26.523791826205613
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0096",
        "city": "Kanpur",
        "severity": "Severe",
        "lst": 49.83,
        "predicted_lst": 47.94,
        "city_percentile": 82.6,
        "primary_driver": "Severe Vegetation & Canopy Deficit",
        "recommended_action": "Dense urban tree canopy plantation & bioswale corridors",
        "air_temp": 33.67,
        "ndvi": 0.264,
        "ndbi": 0.016,
        "dist_to_veg": 426.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.44079,
        "longitude": 80.25508
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2550832413602,
          26.440787493952968
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0097",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.03,
        "predicted_lst": 45.97,
        "city_percentile": 26.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.45,
        "ndvi": 0.341,
        "ndbi": -0.004,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.582,
        "longitude": 80.44184
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.44184298892866,
          26.58200265661656
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0098",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.3,
        "predicted_lst": 46.93,
        "city_percentile": 39.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.66,
        "ndvi": 0.132,
        "ndbi": 0.034,
        "dist_to_veg": 120.0,
        "impervious_surface_ratio": 10.7,
        "building_density": 0,
        "latitude": 26.44294,
        "longitude": 80.18394
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.18393667085793,
          26.442943450634854
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0099",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.93,
        "predicted_lst": 45.92,
        "city_percentile": 20.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.52,
        "ndvi": 0.435,
        "ndbi": -0.106,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 39.0,
        "building_density": 0,
        "latitude": 26.47744,
        "longitude": 80.2187
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.21870147235336,
          26.477438757545045
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0100",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.66,
        "predicted_lst": 45.8,
        "city_percentile": 5.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.43,
        "ndvi": 0.318,
        "ndbi": 0.027,
        "dist_to_veg": 30.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.55047,
        "longitude": 80.32138
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.32137890932822,
          26.550471790143963
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0101",
        "city": "Kanpur",
        "severity": "Severe",
        "lst": 49.92,
        "predicted_lst": 47.77,
        "city_percentile": 84.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.69,
        "ndvi": 0.239,
        "ndbi": 0.042,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 12.7,
        "building_density": 1,
        "latitude": 26.39767,
        "longitude": 80.40654
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.40653919826275,
          26.39766836031523
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0102",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.08,
        "predicted_lst": 48.08,
        "city_percentile": 28.6,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.59,
        "ndvi": 0.259,
        "ndbi": 0.053,
        "dist_to_veg": 94.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.54023,
        "longitude": 80.38525
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.38524912602912,
          26.540230995905
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0103",
        "city": "Kanpur",
        "severity": "High",
        "lst": 48.87,
        "predicted_lst": 47.5,
        "city_percentile": 60.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.45,
        "ndvi": 0.334,
        "ndbi": 0.012,
        "dist_to_veg": 161.6,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.58066,
        "longitude": 80.4316
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.43160219468969,
          26.58065518369038
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0104",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.01,
        "predicted_lst": 47.22,
        "city_percentile": 25.0,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.53,
        "ndvi": 0.24,
        "ndbi": 0.027,
        "dist_to_veg": 318.9,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.4734,
        "longitude": 80.51568
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.51568450528328,
          26.473396338766506
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0105",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.63,
        "predicted_lst": 46.17,
        "city_percentile": 3.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.53,
        "ndvi": 0.35,
        "ndbi": -0.035,
        "dist_to_veg": 42.4,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.45911,
        "longitude": 80.47715
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.47714677959455,
          26.45911312574901
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0106",
        "city": "Kanpur",
        "severity": "High",
        "lst": 49.03,
        "predicted_lst": 47.11,
        "city_percentile": 64.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.38,
        "ndvi": 0.29,
        "ndbi": 0.027,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.62216,
        "longitude": 80.18906
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.18905706797742,
          26.6221573498167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0107",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.47,
        "predicted_lst": 47.24,
        "city_percentile": 45.8,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.63,
        "ndvi": 0.305,
        "ndbi": 0.043,
        "dist_to_veg": 108.2,
        "impervious_surface_ratio": 5.2,
        "building_density": 0,
        "latitude": 26.35024,
        "longitude": 80.49332
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.4933164547087,
          26.35023731331372
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0108",
        "city": "Kanpur",
        "severity": "Severe",
        "lst": 49.72,
        "predicted_lst": 48.27,
        "city_percentile": 81.2,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.59,
        "ndvi": 0.358,
        "ndbi": -0.031,
        "dist_to_veg": 228.5,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.50412,
        "longitude": 80.42648
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.4264817975702,
          26.5041187214834
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0109",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.09,
        "predicted_lst": 45.33,
        "city_percentile": 29.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.65,
        "ndvi": 0.411,
        "ndbi": -0.121,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.39336,
        "longitude": 80.13974
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.13973955887926,
          26.39335644695145
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0110",
        "city": "Kanpur",
        "severity": "High",
        "lst": 49.14,
        "predicted_lst": 46.84,
        "city_percentile": 68.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.38,
        "ndvi": 0.31,
        "ndbi": 0.078,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 2.5,
        "building_density": 0,
        "latitude": 26.58146,
        "longitude": 80.24942
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.24942385507025,
          26.581463667446084
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0111",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.91,
        "predicted_lst": 46.66,
        "city_percentile": 19.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.38,
        "ndvi": 0.341,
        "ndbi": -0.015,
        "dist_to_veg": 189.7,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.58362,
        "longitude": 80.22005
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.22004894527954,
          26.583619624127973
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0112",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.32,
        "predicted_lst": 47.52,
        "city_percentile": 40.3,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.65,
        "ndvi": 0.18,
        "ndbi": 0.047,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.35293,
        "longitude": 80.14136
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.14135652639067,
          26.35293225916608
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0113",
        "city": "Kanpur",
        "severity": "Severe",
        "lst": 49.85,
        "predicted_lst": 45.99,
        "city_percentile": 82.9,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.67,
        "ndvi": 0.413,
        "ndbi": -0.069,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 3.5,
        "building_density": 3,
        "latitude": 26.44941,
        "longitude": 80.25724
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.25723919804209,
          26.449411320680515
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0114",
        "city": "Kanpur",
        "severity": "Severe",
        "lst": 50.41,
        "predicted_lst": 47.46,
        "city_percentile": 89.5,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.63,
        "ndvi": 0.309,
        "ndbi": 0.02,
        "dist_to_veg": 150.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.43351,
        "longitude": 80.50949
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.50948612982285,
          26.4335111401516
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0115",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.63,
        "predicted_lst": 47.25,
        "city_percentile": 4.0,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.67,
        "ndvi": 0.252,
        "ndbi": 0.071,
        "dist_to_veg": 90.0,
        "impervious_surface_ratio": 32.3,
        "building_density": 0,
        "latitude": 26.43351,
        "longitude": 80.27934
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.27933775403143,
          26.4335111401516
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0116",
        "city": "Kanpur",
        "severity": "High",
        "lst": 49.18,
        "predicted_lst": 44.21,
        "city_percentile": 69.1,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.43,
        "ndvi": 0.396,
        "ndbi": -0.027,
        "dist_to_veg": 134.2,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.575,
        "longitude": 80.292
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.29200399953751,
          26.574995797400423
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0117",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.85,
        "predicted_lst": 48.48,
        "city_percentile": 59.3,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.52,
        "ndvi": 0.245,
        "ndbi": 0.096,
        "dist_to_veg": 123.7,
        "impervious_surface_ratio": 8.4,
        "building_density": 0,
        "latitude": 26.52298,
        "longitude": 80.21223
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2122336023077,
          26.522983342449905
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0118",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.74,
        "predicted_lst": 45.73,
        "city_percentile": 10.4,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.65,
        "ndvi": 0.519,
        "ndbi": -0.141,
        "dist_to_veg": 0.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.35158,
        "longitude": 80.14486
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.14485995599874,
          26.3515847862399
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0119",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 48.27,
        "predicted_lst": 45.84,
        "city_percentile": 37.7,
        "primary_driver": "Ambient Microclimate Thermal Load",
        "recommended_action": "Micro-misting & shade canopy structures",
        "air_temp": 33.63,
        "ndvi": 0.271,
        "ndbi": -0.01,
        "dist_to_veg": 60.0,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.41599,
        "longitude": 80.53482
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.53481862083503,
          26.415993992111268
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "HS_KAN_0120",
        "city": "Kanpur",
        "severity": "Moderate",
        "lst": 47.86,
        "predicted_lst": 48.17,
        "city_percentile": 16.9,
        "primary_driver": "Built-surface Heat Absorption",
        "recommended_action": "Urban greening & reflective coating",
        "air_temp": 33.43,
        "ndvi": 0.183,
        "ndbi": 0.097,
        "dist_to_veg": 67.1,
        "impervious_surface_ratio": 0.0,
        "building_density": 0,
        "latitude": 26.62027,
        "longitude": 80.29281
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.29281248329322,
          26.62027088772005
        ]
      }
    }
  ]
};

// These cached records were generated when percentiles were mistakenly ranked
// inside the P75+ subset. Map that subset rank back to the complete-city scale.
export const FALLBACK_HOTSPOTS = Object.fromEntries(
  Object.entries(LEGACY_FALLBACK_HOTSPOTS).map(([city, features]) => [
    city,
    features.map((feature) => ({
      ...feature,
      properties: {
        ...feature.properties,
        city_percentile: Math.round((75 + feature.properties.city_percentile * 0.25) * 10) / 10,
      },
    })),
  ])
) as Record<CityName, HotspotFeature[]>;
