# Geospatial AI/ML Heat Mitigation Backend

Python-based API backend service built using **FastAPI** to compute physics-informed Land Surface Temperature (LST) predictions and run spatial placement optimizations.

---

## Setup Instructions

1. **Create Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   ```

2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Start Service**:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

---

## API Endpoints

* **`GET /api/thermal-field?city=Delhi`**: Returns the complete observed LST point field for a city.
* **`GET /api/hotspots?city=Delhi`**: Returns the separate P75+ city-percentile anomaly layer.
* **`GET /api/hotspots/{id}`**: Returns one hotspot and its local thermal drivers.
* **`POST /api/predict`**: Calculates predicted LST using the trained model.
* **`POST /api/simulate-intervention`**: Estimates counterfactual cooling for a selected hotspot.
* **`POST /api/optimize`**: Resolves intervention placement under a budget.
