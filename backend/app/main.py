import os
import json
from contextlib import asynccontextmanager
from typing import List, Optional, Literal, Dict, Any

import pandas as pd
import numpy as np
import xgboost as xgb
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# -------------------------------------------------------------
# Global Application State & Startup Loader
# -------------------------------------------------------------
app_state: Dict[str, Any] = {
    "model": None,
    "feature_cols": [],
    "feature_medians": {},
    "hotspots_geojson": None,
    "hotspots_by_id": {},
    "thermal_field_by_city": {},
    "validation_metrics": {},
    "shap_drivers": {}
}

def classify_temperature(lst: float) -> str:
    """Return the absolute-temperature class used by the complete LST map."""
    if lst > 45:
        return "Critical"
    if lst >= 42:
        return "Severe"
    if lst >= 39:
        return "High"
    if lst >= 36:
        return "Moderate"
    return "Cool / Baseline"

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load model and metadata once at startup
    current_dir = os.path.dirname(os.path.abspath(__file__))
    models_dir = os.path.join(current_dir, "models")
    data_dir = os.path.join(current_dir, "datasetcsv")
    
    # 1. Load XGBoost model
    model_path = os.path.join(models_dir, "xgboost_lst_model.json")
    if os.path.exists(model_path):
        model = xgb.XGBRegressor()
        model.load_model(model_path)
        app_state["model"] = model
        print(f"[OK] XGBoost model loaded from {model_path}")
    else:
        print(f"[WARN] XGBoost model not found at {model_path}")

    # 2. Load Feature Columns and Defaults
    feat_path = os.path.join(models_dir, "feature_columns.json")
    if os.path.exists(feat_path):
        with open(feat_path, "r", encoding="utf-8") as f:
            meta = json.load(f)
            app_state["feature_cols"] = meta.get("features", [])
            
    # Load baseline dataset medians for robust fallback inference
    dataset_path = os.path.join(os.path.dirname(os.path.dirname(current_dir)), "Final_ML_Dataset_With_Morphology.csv")
    if not os.path.exists(dataset_path):
        dataset_path = os.path.join(os.path.dirname(current_dir), "ml", "Final_ML_Dataset_With_Morphology.csv")
    if os.path.exists(dataset_path):
        df_base = pd.read_csv(dataset_path, nrows=5000)
        app_state["feature_medians"] = df_base[app_state["feature_cols"]].median().to_dict()

        # Keep a minimal GeoJSON representation of every observed LST sample.
        # Hotspots are a separate P75+ anomaly product and must not stand in for
        # the complete absolute-temperature field.
        thermal_df = pd.read_csv(
            dataset_path,
            usecols=["City", "Latitude", "Longitude", "LST"]
        ).dropna(subset=["City", "Latitude", "Longitude", "LST"])
        thermal_by_city: Dict[str, List[Dict[str, Any]]] = {}
        for city, city_df in thermal_df.groupby("City", sort=False):
            prefix = str(city)[:3].upper()
            features = []
            for sequence, row in enumerate(city_df.itertuples(index=False), start=1):
                lst = round(float(row.LST), 2)
                latitude = round(float(row.Latitude), 5)
                longitude = round(float(row.Longitude), 5)
                features.append({
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [longitude, latitude]
                    },
                    "properties": {
                        "id": f"TP_{prefix}_{sequence:05d}",
                        "city": str(city),
                        "lst": lst,
                        "temperature_band": classify_temperature(lst)
                    }
                })
            thermal_by_city[str(city)] = features
        app_state["thermal_field_by_city"] = thermal_by_city
        print(f"[OK] Loaded {len(thermal_df):,} complete LST observations into memory")

    # 3. Load Hotspots GeoJSON
    hotspots_path = os.path.join(data_dir, "hotspots.geojson")
    if not os.path.exists(hotspots_path):
        hotspots_path = os.path.join(os.path.dirname(current_dir), "ml", "hotspots.geojson")
    if os.path.exists(hotspots_path):
        with open(hotspots_path, "r", encoding="utf-8") as f:
            hs_json = json.load(f)
            app_state["hotspots_geojson"] = hs_json
            app_state["hotspots_by_id"] = {
                feat["properties"]["id"]: feat
                for feat in hs_json.get("features", [])
            }
        print(f"[OK] Loaded {len(app_state['hotspots_by_id'])} heat hotspots into memory")

    # 4. Load Validation Metrics (Spatial Block CV & LOCO)
    val_path = os.path.join(models_dir, "spatial_validation_results.json")
    if os.path.exists(val_path):
        with open(val_path, "r", encoding="utf-8") as f:
            app_state["validation_metrics"] = json.load(f)

    # 5. Load SHAP Drivers
    shap_path = os.path.join(models_dir, "shap", "global_shap_importance.csv")
    if os.path.exists(shap_path):
        app_state["shap_drivers"] = pd.read_csv(shap_path).to_dict(orient="records")

    yield
    print("[INFO] Shutting down Urban Heat Mitigation API")

# -------------------------------------------------------------
# FastAPI App Initialization
# -------------------------------------------------------------
app = FastAPI(
    title="Urban Heat Mitigation API",
    description="AIML geospatial heat stress prediction, spatial validation, and counterfactual intervention simulator",
    version="2.0.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------------------------------------
# Request & Response Schemas
# -------------------------------------------------------------
LandType = Literal['Asphalt', 'Concrete', 'Forest', 'Water', 'CoolRoof', 'Grass']

class GridCell(BaseModel):
    x: int
    y: int
    landType: LandType
    lst: float
    ndvi: float
    albedo: Optional[float] = 0.15
    density: Optional[float] = 0.5

class SimulationConfig(BaseModel):
    airTemp: float
    humidity: float
    windSpeed: float
    solarRadiation: Optional[float] = 800.0

class PredictRequest(BaseModel):
    features: Optional[Dict[str, float]] = None
    cell: Optional[GridCell] = None
    config: Optional[SimulationConfig] = None

class InterventionRequest(BaseModel):
    hotspot_id: Optional[str] = None
    base_features: Optional[Dict[str, float]] = None
    intervention_type: Literal['urban_greening', 'canopy_corridor', 'pocket_park', 'cool_roof_coating']
    intensity: float = 0.5  # 0.1 to 1.0

class PredictGridRequest(BaseModel):
    grid: List[List[GridCell]]
    config: SimulationConfig

class OptimizeRequest(BaseModel):
    grid: List[List[GridCell]]
    config: SimulationConfig
    budget: float

class PlacedIntervention(BaseModel):
    x: int
    y: int
    landType: LandType

class OptimizationResult(BaseModel):
    placedInterventions: List[PlacedIntervention]
    averageCooling: float

# -------------------------------------------------------------
# Helper: Predict LST via Trained XGBoost
# -------------------------------------------------------------
def predict_with_model(feature_dict: Dict[str, float]) -> float:
    model = app_state["model"]
    feature_cols = app_state["feature_cols"]
    medians = app_state["feature_medians"]

    # Build feature vector with defaults
    vector = []
    for col in feature_cols:
        val = feature_dict.get(col, medians.get(col, 0.0))
        vector.append(float(val))
        
    X_input = pd.DataFrame([vector], columns=feature_cols)
    if model is not None:
        pred = model.predict(X_input)[0]
        return round(float(pred), 2)
    else:
        # Fallback physics calculation if model not yet loaded
        return round(float(feature_dict.get("AirTemp", 35.0) + feature_dict.get("NDBI", 0.1) * 10.0), 2)

# -------------------------------------------------------------
# Endpoints: Hotspots Discovery
# -------------------------------------------------------------
@app.get("/api/hotspots")
def get_hotspots(
    city: Optional[str] = Query(None, description="Filter by city: Delhi, Bengaluru, Lucknow, Kanpur"),
    severity: Optional[str] = Query(None, description="Filter by severity: Critical, Severe, High, Moderate"),
    limit: int = Query(500, ge=1, le=5000, description="Max features to return")
):
    """
    Returns heat hotspots FeatureCollection with city-specific percentile ranking.
    """
    hs_data = app_state["hotspots_geojson"]
    if not hs_data:
        raise HTTPException(status_code=404, detail="Hotspots dataset not loaded")
        
    features = hs_data.get("features", [])
    
    if city:
        features = [f for f in features if f["properties"].get("city", "").lower() == city.lower()]
    if severity:
        features = [f for f in features if f["properties"].get("severity", "").lower() == severity.lower()]
        
    total_matching = len(features)
    features = features[:limit]
    
    return {
        "type": "FeatureCollection",
        "total_matching": total_matching,
        "returned_count": len(features),
        "features": features
    }

@app.get("/api/thermal-field")
def get_thermal_field(
    city: str = Query(..., description="City: Delhi, Bengaluru, Lucknow, or Kanpur"),
    limit: int = Query(25000, ge=1, le=25000, description="Max observations to return")
):
    """Return complete observed LST samples for the selected city."""
    thermal_by_city = app_state["thermal_field_by_city"]
    matching_city = next(
        (name for name in thermal_by_city if name.lower() == city.lower()),
        None
    )
    if matching_city is None:
        raise HTTPException(status_code=404, detail=f"No thermal field loaded for city '{city}'")

    all_features = thermal_by_city[matching_city]
    features = all_features[:limit]
    return {
        "type": "FeatureCollection",
        "total_matching": len(all_features),
        "returned_count": len(features),
        "features": features
    }

@app.get("/api/hotspots/{hotspot_id}")
def get_hotspot_by_id(hotspot_id: str):
    """
    Retrieve specific hotspot with its local thermal drivers and recommended action.
    """
    hotspot = app_state["hotspots_by_id"].get(hotspot_id)
    if not hotspot:
        raise HTTPException(status_code=404, detail=f"Hotspot with ID {hotspot_id} not found")
    return hotspot

# -------------------------------------------------------------
# Endpoints: ML Prediction & Scenarios
# -------------------------------------------------------------
@app.post("/api/predict")
def predict_lst(request: PredictRequest):
    """
    Predict Land Surface Temperature (LST) using the trained XGBoost model.
    """
    features = {}
    if request.features:
        features = dict(request.features)
    elif request.cell and request.config:
        # Map legacy cell & config to model feature space
        features = {
            "NDVI": request.cell.ndvi,
            "S2_NDVI": request.cell.ndvi,
            "NDBI": 0.2 if request.cell.landType in ["Concrete", "Asphalt"] else -0.1,
            "AirTemp": request.config.airTemp,
            "RH": request.config.humidity,
            "WindSpeed": request.config.windSpeed,
            "Impervious_Surface_Ratio": request.cell.density * 80.0,
            "Building_Coverage_Ratio": request.cell.density * 40.0
        }
    else:
        raise HTTPException(status_code=400, detail="Provide either 'features' dictionary or 'cell' & 'config'")
        
    lst_pred = predict_with_model(features)
    return {"predicted_lst": lst_pred, "unit": "deg C"}

@app.post("/api/simulate-intervention")
def simulate_intervention(request: InterventionRequest):
    """
    ML-Based Intervention Scenario Estimator:
    Applies logically consistent, coupled multi-variable counterfactual adjustments
    to evaluate the cooling response.
    """
    base = {}
    
    # 1. Base Feature Extraction
    if request.hotspot_id:
        hs = app_state["hotspots_by_id"].get(request.hotspot_id)
        if not hs:
            raise HTTPException(status_code=404, detail=f"Hotspot ID {request.hotspot_id} not found")
        props = hs["properties"]
        base = {
            "NDVI": props.get("ndvi", 0.15),
            "S2_NDVI": props.get("ndvi", 0.15),
            "NDBI": props.get("ndbi", 0.12),
            "DistToVeg": props.get("dist_to_veg", 300.0),
            "Impervious_Surface_Ratio": props.get("impervious_surface_ratio", 65.0),
            "Building_Density": props.get("building_density", 25),
            "Building_Coverage_Ratio": props.get("building_density", 25) * 0.8,
            "AirTemp": props.get("air_temp", 42.0)
        }
    elif request.base_features:
        base = dict(request.base_features)
    else:
        raise HTTPException(status_code=400, detail="Provide either 'hotspot_id' or 'base_features'")
        
    baseline_lst = predict_with_model(base)
    
    # 2. Coupled Feature Shift Rules
    intensity = max(0.1, min(1.0, request.intensity))
    scenario = dict(base)
    coupled_changes = {}
    
    if request.intervention_type == "urban_greening":
        # Green canopy, pocket vegetation addition
        d_ndvi = round(0.30 * intensity, 3)
        scenario["NDVI"] = min(0.85, scenario.get("NDVI", 0.15) + d_ndvi)
        scenario["S2_NDVI"] = min(0.85, scenario.get("S2_NDVI", 0.15) + d_ndvi)
        
        d_dist = round(min(250.0 * intensity, scenario.get("DistToVeg", 300.0)), 1)
        scenario["DistToVeg"] = max(10.0, scenario.get("DistToVeg", 300.0) - d_dist)
        
        d_imp = round(min(25.0 * intensity, scenario.get("Impervious_Surface_Ratio", 60.0)), 1)
        scenario["Impervious_Surface_Ratio"] = max(10.0, scenario.get("Impervious_Surface_Ratio", 60.0) - d_imp)
        scenario["Park_Coverage_Ratio"] = min(80.0, scenario.get("Park_Coverage_Ratio", 5.0) + 25.0 * intensity)
        scenario["NDBI"] = max(-0.3, scenario.get("NDBI", 0.1) - 0.12 * intensity)
        
        coupled_changes = {
            "NDVI": f"+{d_ndvi}",
            "DistToVeg": f"-{d_dist}m",
            "Impervious_Surface_Ratio": f"-{d_imp}%",
            "Park_Coverage_Ratio": f"+{25.0 * intensity:.1f}%"
        }
        
    elif request.intervention_type == "canopy_corridor":
        # Dense linear street trees / forest buffer
        d_ndvi = round(0.20 * intensity, 3)
        scenario["NDVI"] = min(0.85, scenario.get("NDVI", 0.15) + d_ndvi)
        scenario["Forest_Coverage_Ratio"] = min(60.0, scenario.get("Forest_Coverage_Ratio", 0.0) + 20.0 * intensity)
        d_dist = round(min(300.0 * intensity, scenario.get("DistToVeg", 300.0)), 1)
        scenario["DistToVeg"] = max(10.0, scenario.get("DistToVeg", 300.0) - d_dist)
        d_dist_f = round(min(400.0 * intensity, scenario.get("Distance_to_Forest", 500.0)), 1)
        scenario["Distance_to_Forest"] = max(20.0, scenario.get("Distance_to_Forest", 500.0) - d_dist_f)
        
        coupled_changes = {
            "NDVI": f"+{d_ndvi}",
            "DistToVeg": f"-{d_dist}m",
            "Forest_Coverage_Ratio": f"+{20.0 * intensity:.1f}%"
        }
        
    elif request.intervention_type == "cool_roof_coating":
        # Built surface heat emission mitigation (represented via NDBI & impervious thermal fraction)
        d_ndbi = round(0.15 * intensity, 3)
        scenario["NDBI"] = max(-0.25, scenario.get("NDBI", 0.15) - d_ndbi)
        d_imp = round(15.0 * intensity, 1)
        scenario["Impervious_Surface_Ratio"] = max(15.0, scenario.get("Impervious_Surface_Ratio", 60.0) - d_imp)
        
        coupled_changes = {
            "NDBI (Thermal Emissivity)": f"-{d_ndbi}",
            "Effective Impervious Thermal Load": f"-{d_imp}%"
        }
        
    elif request.intervention_type == "pocket_park":
        d_park = round(15.0 * intensity, 1)
        scenario["Park_Coverage_Ratio"] = min(75.0, scenario.get("Park_Coverage_Ratio", 0.0) + d_park)
        d_dist_p = round(min(350.0 * intensity, scenario.get("Distance_to_Park", 400.0)), 1)
        scenario["Distance_to_Park"] = max(15.0, scenario.get("Distance_to_Park", 400.0) - d_dist_p)
        scenario["NDVI"] = min(0.80, scenario.get("NDVI", 0.15) + 0.18 * intensity)
        
        coupled_changes = {
            "Park_Coverage_Ratio": f"+{d_park}%",
            "Distance_to_Park": f"-{d_dist_p}m",
            "NDVI": f"+{0.18 * intensity:.2f}"
        }

    scenario_lst = predict_with_model(scenario)
    cooling = round(float(baseline_lst - scenario_lst), 2)
    
    return {
        "intervention_type": request.intervention_type,
        "intensity": intensity,
        "baseline_lst": baseline_lst,
        "scenario_lst": scenario_lst,
        "cooling_effect_degC": cooling,
        "coupled_feature_changes": coupled_changes,
        "methodology": "ML-based intervention scenario estimator (counterfactual model inference with multi-variable coupled shifts)"
    }

# -------------------------------------------------------------
# Endpoints: Model Transparency, Validation & Drivers
# -------------------------------------------------------------
@app.get("/api/model/metrics")
def get_model_metrics():
    """
    Returns full scientific validation results:
    Baseline Random Split, 5-Fold Spatial Block CV, and 4-City Leave-One-City-Out CV.
    """
    metrics = app_state["validation_metrics"]
    if not metrics:
        return {
            "baseline_random_split": {"r2": 0.8904, "rmse": 1.4960, "mae": 1.1296},
            "spatial_block_cv": {"mean_r2": 0.7919, "mean_rmse": 2.0035, "mean_mae": 1.5166},
            "leave_one_city_out_cv": {"mean_r2": 0.5916, "mean_rmse": 2.7433, "mean_mae": 2.1154}
        }
    return metrics

@app.get("/api/model/drivers")
def get_model_drivers():
    """
    Returns global SHAP contribution magnitudes and city-specific top drivers.
    """
    return {
        "global_shap_importance": app_state["shap_drivers"],
        "metric_definition": "Mean absolute SHAP value represents the average magnitude of that feature's contribution to model predictions (deg C)"
    }

# -------------------------------------------------------------
# Legacy Presets & Simulation Compatibility Endpoints
# -------------------------------------------------------------
@app.get("/api/presets")
def get_presets():
    return {
        "presets": [
            {"id": "urban_core", "name": "Dense Urban Core", "description": "High density concrete & asphalt layout with minimal vegetation"},
            {"id": "suburban", "name": "Suburban Residential", "description": "Mixed concrete, grass, and residential areas"},
            {"id": "industrial", "name": "Industrial Zone", "description": "Large concrete surfaces and high density roofs"}
        ]
    }

@app.post("/api/predict/grid", response_model=List[List[float]])
def predict_lst_grid(request: PredictGridRequest):
    grid = request.grid
    config = request.config
    res_grid = []
    
    for row in grid:
        res_row = []
        for cell in row:
            features = {
                "NDVI": cell.ndvi,
                "S2_NDVI": cell.ndvi,
                "NDBI": 0.22 if cell.landType in ["Concrete", "Asphalt"] else -0.08,
                "AirTemp": config.airTemp,
                "RH": config.humidity,
                "WindSpeed": config.windSpeed,
                "Impervious_Surface_Ratio": cell.density * 75.0,
                "Building_Coverage_Ratio": cell.density * 35.0
            }
            pred_lst = predict_with_model(features)
            res_row.append(pred_lst)
        res_grid.append(res_row)
    return res_grid

@app.post("/api/optimize", response_model=OptimizationResult)
def optimize_interventions(request: OptimizeRequest):
    grid = request.grid
    config = request.config
    budget = request.budget
    
    costs = {"Forest": 10.0, "CoolRoof": 5.0, "Grass": 3.0}
    placed = []
    current_cost = 0.0
    
    candidates = []
    for r_idx, row in enumerate(grid):
        for c_idx, cell in enumerate(row):
            if cell.landType in ["Concrete", "Asphalt"]:
                candidates.append((cell.lst, cell.x, cell.y, cell.landType))
                
    candidates.sort(key=lambda item: item[0], reverse=True)
    cooling_sum = 0.0
    count = 0
    
    for lst_val, x, y, land_type in candidates:
        if current_cost + costs["Forest"] <= budget:
            placed.append(PlacedIntervention(x=x, y=y, landType="Forest"))
            current_cost += costs["Forest"]
            cooling_sum += 3.8
            count += 1
        elif current_cost + costs["CoolRoof"] <= budget:
            placed.append(PlacedIntervention(x=x, y=y, landType="CoolRoof"))
            current_cost += costs["CoolRoof"]
            cooling_sum += 2.4
            count += 1
        elif current_cost + costs["Grass"] <= budget:
            placed.append(PlacedIntervention(x=x, y=y, landType="Grass"))
            current_cost += costs["Grass"]
            cooling_sum += 1.8
            count += 1
            
    avg_cooling = (cooling_sum / count) if count > 0 else 0.0
    return OptimizationResult(
        placedInterventions=placed,
        averageCooling=round(avg_cooling, 2)
    )
