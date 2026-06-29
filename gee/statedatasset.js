// ISRO Urban Heat Mitigation - Master ML Dataset Generator
// Target Cities: Delhi, Kanpur, Lucknow, Bengaluru

var cities = [
    { name: 'Delhi', roi: ee.Geometry.Rectangle([76.84, 28.40, 77.35, 28.90]) },
    { name: 'Kanpur', roi: ee.Geometry.Rectangle([80.10, 26.35, 80.55, 26.65]) },
    { name: 'Lucknow', roi: ee.Geometry.Rectangle([80.70, 26.70, 81.05, 27.05]) },
    { name: 'Bengaluru', roi: ee.Geometry.Rectangle([77.40, 12.80, 77.80, 13.20]) }
];

// Satellite Collections
var l8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2');
var l9 = ee.ImageCollection('LANDSAT/LC09/C02/T1_L2');
var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED');

// Cloud Masking Helpers
function maskLandsat(image) {
    var qa = image.select('QA_PIXEL');
    var mask = qa.bitwiseAnd(1 << 3).eq(0)   // Cloud
        .and(qa.bitwiseAnd(1 << 4).eq(0))    // Cloud Shadow
        .and(qa.bitwiseAnd(1 << 5).eq(0));   // Snow
    return image.updateMask(mask);
}

function maskS2clouds(image) {
    var qa = image.select('QA60');
    var cloudBitMask = 1 << 10;
    var cirrusBitMask = 1 << 11;
    var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
        .and(qa.bitwiseAnd(cirrusBitMask).eq(0));
    return image.updateMask(mask);
}

// Function to process multiple cities and return a single merged dataset
function generateMergedDataset(citiesList) {
    var citySamples = citiesList.map(function (city) {
        var roi = city.roi;

        // 1. Landsat Core & Scale Adjustments
        var image = l8.merge(l9)
            .filterBounds(roi)
            .filterDate('2024-04-01', '2024-06-30')
            .filter(ee.Filter.lt('CLOUD_COVER', 10))
            .map(maskLandsat)
            .map(function (img) {
                var optical = img.select('SR_B.*').multiply(0.0000275).add(-0.2);
                var thermal = img.select('ST_B10').multiply(0.00341802).add(149.0);
                return img.addBands(optical, null, true).addBands(thermal, null, true);
            })
            .median()
            .clip(roi);

        // Features Calculations
        var lst = image.select('ST_B10').subtract(273.15).rename('LST');
        var ndvi = image.normalizedDifference(['SR_B5', 'SR_B4']).rename('NDVI');
        var ndbi = image.normalizedDifference(['SR_B6', 'SR_B5']).rename('NDBI');
        var ndwi = image.normalizedDifference(['SR_B3', 'SR_B5']).rename('NDWI');

        // 2. Sentinel-2 High-Res NDVI Map
        var s2Image = s2.filterBounds(roi)
            .filterDate('2024-04-01', '2024-06-30')
            .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
            .map(maskS2clouds)
            .median()
            .clip(roi);

        var s2_ndvi = s2Image.normalizedDifference(['B8', 'B4']).rename('S2_NDVI').clip(roi);

        // 3. ESA WorldCover Base Map
        var lulc = ee.Image('ESA/WorldCover/v200/2021').select('Map').rename('LULC').clip(roi);

        // 4. Advanced ML Proximity Feature: Distance to Vegetation / Parks
        var highVegMask = ndvi.gt(0.4); // Focuses on dense parks and tree cover canopy zones
        var DistToVeg = highVegMask
            .selfMask()
            .fastDistanceTransform(256)
            .sqrt()
            .multiply(30)
            .rename('DistToVeg');

        // 5. Dynamic GHSL Fallback Execution
        var ghsl = ee.ImageCollection("JRC/GHSL/P2023A/GHS_BUILT_S")
            .filterBounds(roi)
            .mosaic()
            .select('built_surface')
            .rename('GHSL')
            .clip(roi);

        // 6. Terrain Elevation Model
        var dem = ee.Image("USGS/SRTMGL1_003").rename("DEM").clip(roi);

        // 7. ERA5 Meteorology Engine
        var era = ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR')
            .filterBounds(roi)
            .filterDate('2024-04-01', '2024-06-30')
            .mean();

        var airTemp = era.select('temperature_2m').subtract(273.15).rename('AirTemp');
        var dewPoint = era.select('dewpoint_temperature_2m').subtract(273.15).rename('DewPoint');

        // Clamped Relative Humidity Execution (Prevents out of bounds math rounding anomalies)
        var rh = airTemp.expression(
            '100 * exp((17.625 * Td) / (243.04 + Td) - (17.625 * T) / (243.04 + T))', {
            'T': airTemp,
            'Td': dewPoint
        }).clamp(0, 100).rename('RH');

        var windSpeed = era.select('u_component_of_wind_10m')
            .hypot(era.select('v_component_of_wind_10m'))
            .rename('WindSpeed');

        // 8. Stacked Multi-Sensor Multi-Spectral Image Array
        var featureImage = ee.Image.cat([
            lst, ndvi, s2_ndvi, ndbi, ndwi, lulc,
            DistToVeg, ghsl, dem, airTemp, rh, windSpeed
        ]);
     
        // 9. Scaled Stratified Points Generation (Optimized to 2500 Samples for deep ML variance tracking)
        var samples = featureImage.stratifiedSample({
            numPoints: 2500,
            classBand: 'LULC',
            region: roi,
            scale: 30,
            seed: 42,
            geometries: true
        });

        // 10. Geographic Structural Metadata Binding
        samples = samples.map(function (f) {
            var coord = f.geometry().coordinates();
            return f.set({
                'City': city.name,
                'Longitude': coord.get(0),
                'Latitude': coord.get(1),
                'DateStart': '2024-04-01',
                'DateEnd': '2024-06-30',
                'CloudLimit': 10,
                'Satellite': 'Landsat 8/9 & S2'
            });
        });

        // Interactive Dashboard Map Panel Visual Checks
        Map.addLayer(lst, { min: 22, max: 48, palette: ['blue', 'green', 'yellow', 'red'] }, city.name + ' LST', false);
        Map.addLayer(lulc, {}, city.name + ' LULC Footprint', false);
        Map.addLayer(airTemp, { min: 20, max: 42, palette: ['blue', 'orange', 'darkred'] }, city.name + ' Air Temp Ambient', false);
        Map.addLayer(DistToVeg, { min: 0, max: 2000, palette: ['darkgreen', 'yellow', 'white'] }, city.name + ' Proximity to Green Spaces', false);

        return samples;
    });

    return ee.FeatureCollection(citySamples).flatten();
}

// Execute function to generate and merge datasets
var allSamples = generateMergedDataset(cities);

// Export the single merged dataset
Export.table.toDrive({
    collection: allSamples,
    description: 'Merged_ML_Dataset',
    fileFormat: 'CSV',
    selectors: [
        'City', 'Latitude', 'Longitude', 'LST', 'NDVI', 'S2_NDVI',
        'NDBI', 'NDWI', 'LULC', 'DistToVeg', 'GHSL', 'DEM',
        'AirTemp', 'RH', 'WindSpeed', 'DateStart', 'DateEnd', 'CloudLimit', 'Satellite'
    ]
});

print('Master Dataset Pipeline compiled. Run target tasks in the dashboard tab panel.');