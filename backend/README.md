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

* **`GET /api/presets`**: Returns default satellite layout profiles.
* **`POST /api/predict`**: Calculates predicted LST using physics-informed algorithms.
* **`POST /api/optimize`**: Resolves optimal location placement budgets.
