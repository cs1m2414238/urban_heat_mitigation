from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Literal

app = FastAPI(title="Urban Heat Mitigation API", version="1.0.0")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # * for  deploymnet (localhost only)
    allow_credentials=True, # for cookies and session
    allow_methods=["*"],  # for GET POST PUT  DELETE  
    allow_headers=["*"], # for any header
)

LandType = Literal['Asphalt', 'Concrete', 'Forest', 'Water', 'CoolRoof', 'Grass']

class GridCell(BaseModel):
    x: int
    y: int
    landType: LandType
    lst: float
    ndvi: float
    albedo: float
    density: float

class SimulationConfig(BaseModel):
    airTemp: float
    humidity: float
    windSpeed: float
    solarRadiation: float

class PredictRequest(BaseModel):
    cell: GridCell
    config: SimulationConfig

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

@app.get("/api/presets")
def get_presets():
    return {
        "presets": [
            {"id": "urban_core", "name": "Dense Urban Core", "description": "High density concrete & asphalt layout with minimal vegetation"},
            {"id": "suburban", "name": "Suburban Residential", "description": "Mixed concrete, grass, and residential areas"},
            {"id": "industrial", "name": "Industrial Zone", "description": "Large concrete surfaces and high density roofs"}
        ]
    }

@app.post("/api/predict", response_model=float)
def predict_lst(request: PredictRequest):
    cell = request.cell
    config = request.config
    
    # Physics-informed model for demonstration
    lst = config.airTemp
    heating = config.solarRadiation * 0.05 * (1.0 - cell.albedo)
    lst += heating
    cooling = cell.ndvi * 5.0
    lst -= cooling
    density_heating = cell.density * 3.0
    lst += density_heating
    wind_cooling = config.windSpeed * 0.5
    lst -= wind_cooling
    
    return round(lst, 2)

@app.post("/api/predict/grid", response_model=List[List[float]])
def predict_lst_grid(request: PredictGridRequest):
    grid = request.grid
    config = request.config
    
    res_grid = []
    for row in grid:
        res_row = []
        for cell in row:
            lst = config.airTemp
            heating = config.solarRadiation * 0.05 * (1.0 - cell.albedo)
            lst += heating
            cooling = cell.ndvi * 5.0
            lst -= cooling
            density_heating = cell.density * 3.0
            lst += density_heating
            wind_cooling = config.windSpeed * 0.5
            lst -= wind_cooling
            res_row.append(round(lst, 2))
        res_grid.append(res_row)
    return res_grid

@app.post("/api/optimize", response_model=OptimizationResult)
def optimize_interventions(request: OptimizeRequest):
    grid = request.grid
    config = request.config
    budget = request.budget
    
    costs = {
        'Forest': 10.0,
        'CoolRoof': 5.0,
        'Grass': 3.0
    }
    
    placed = []
    current_cost = 0.0
    
    candidates = []
    for r_idx, row in enumerate(grid):
        for c_idx, cell in enumerate(row):
            if cell.landType in ['Concrete', 'Asphalt']:
                candidates.append((cell.lst, cell.x, cell.y, cell.landType))
                
    candidates.sort(key=lambda item: item[0], reverse=True)
    
    cooling_sum = 0.0
    count = 0
    
    for lst_val, x, y, land_type in candidates:
        if current_cost + costs['Forest'] <= budget:
            placed.append(PlacedIntervention(x=x, y=y, landType='Forest'))
            current_cost += costs['Forest']
            cooling_sum += 4.5
            count += 1
        elif current_cost + costs['CoolRoof'] <= budget:
            placed.append(PlacedIntervention(x=x, y=y, landType='CoolRoof'))
            current_cost += costs['CoolRoof']
            cooling_sum += 3.0
            count += 1
        elif current_cost + costs['Grass'] <= budget:
            placed.append(PlacedIntervention(x=x, y=y, landType='Grass'))
            current_cost += costs['Grass']
            cooling_sum += 2.0
            count += 1
            
    avg_cooling = (cooling_sum / count) if count > 0 else 0.0
    
    return OptimizationResult(
        placedInterventions=placed,
        averageCooling=round(avg_cooling, 2)
    )
