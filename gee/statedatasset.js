//===============================
// DELHI - ML DATASET EXPORT
//===============================

//-------------------------------
// 1. Region of Interest
//-------------------------------
// var city = "Delhi";

// var roi = ee.Geometry.Rectangle([
//   76.84,
//   28.40,
//   77.35,
//   28.90
// ]);

// var city = "Kanpur";

// var roi = ee.Geometry.Rectangle([
//   80.10,
//   26.35,
//   80.55,
//   26.65
// ]);

// var city = "Lucknow";

// var roi = ee.Geometry.Rectangle([
//   80.70,
//   26.70,
//   81.05,
//   27.05
// ]);

var city = "Bengaluru";

var roi = ee.Geometry.Rectangle([
  77.40,
  12.80,
  77.80,
  13.20
]);

Map.centerObject(roi,10);

//-------------------------------
// 2. Landsat 8 + 9
//-------------------------------
var l8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2');
var l9 = ee.ImageCollection('LANDSAT/LC09/C02/T1_L2');

var image = l8
.merge(l9)
.filterBounds(roi)
.filterDate('2024-04-01','2024-06-30')
.filter(ee.Filter.lt('CLOUD_COVER',10))
.median();

//-------------------------------
// 3. Calculate Features
//-------------------------------

// Land Surface Temperature (°C)
var lst = image.select('ST_B10')
.multiply(0.00341802)
.add(149.0)
.subtract(273.15)
.rename('LST');

// NDVI
var ndvi = image.normalizedDifference(
['SR_B5','SR_B4'])
.rename('NDVI');

// NDBI
var ndbi = image.normalizedDifference(
['SR_B6','SR_B5'])
.rename('NDBI');

// NDWI
var ndwi = image.normalizedDifference(
['SR_B3','SR_B5'])
.rename('NDWI');

//-------------------------------
// 4. Stack Features
//-------------------------------
var featureImage = ee.Image.cat([
    lst,
    ndvi,
    ndbi,
    ndwi
]);

//-------------------------------
// 5. Sample Pixels
//-------------------------------
var samples = featureImage.sample({
    region: roi,
    scale:30,
    numPixels:5000,
    seed:42,
    geometries:true
});

//-------------------------------
// 6. Add City + Coordinates
//-------------------------------
samples = samples.map(function(feature){

    var coords = feature.geometry().coordinates();

    return feature
    .set('Longitude',coords.get(0))
    .set('Latitude',coords.get(1))
    .set('City',city);

});

//-------------------------------
// 7. Export CSV
//-------------------------------
Export.table.toDrive({

collection:samples,

description:'Delhi_ML_Dataset',

fileFormat:'CSV',

selectors:[
'City',
'Latitude',
'Longitude',
'LST',
'NDVI',
'NDBI',
'NDWI'
]

});

//-------------------------------
// 8. Visualisation
//-------------------------------

Map.addLayer(lst,{
min:20,
max:50,
palette:['blue','cyan','green','yellow','orange','red']
},'LST');

Map.addLayer(ndvi,{
min:0,
max:0.7,
palette:['white','yellow','green','darkgreen']
},'NDVI');

Map.addLayer(ndbi,{
min:-0.4,
max:0.4,
palette:['white','yellow','orange','red']
},'NDBI');

Map.addLayer(ndwi,{
min:-0.5,
max:0.5,
palette:['white','cyan','blue']
},'NDWI');