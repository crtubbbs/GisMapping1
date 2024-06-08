require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
  ], function (Map, MapView, Graphic, GraphicsLayer) {
    const map = new Map({
      basemap: "topo-vector"
    });
  
    const view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-111.7897, 43.8260], // Longitude, latitude of Rexburg, Idaho
      zoom: 12
    });
  
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
  
    // Array of hiking spots with name and coordinates (longitude, latitude)
    const hikingSpots = [
      { name: "Nature Park", coordinates: [-111.8067, 43.8204], info: "A lovely park with trails and wildlife." },
      { name: "Porter Park", coordinates: [-111.7845, 43.8234], info: "A great place for family picnics and walks." },
      { name: "Beaver Dick Park", coordinates: [-111.9394, 43.8106], info: "Beautiful scenery with hiking trails." },
      { name: "Cress Creek Nature Trail", coordinates: [-111.6754, 43.6645], info: "A popular trail with scenic views." },
      { name: "R Mountain Trail", coordinates: [-111.8057, 43.7000], info: "A challenging hike with rewarding vistas." },
      { name: "Eagle Park", coordinates: [-111.7924, 43.8192], info: "Peaceful park with walking paths." },
      { name: "Smith Park", coordinates: [-111.7856, 43.8238], info: "A nice spot for outdoor activities." },
      { name: "St. Anthony Sand Dunes", coordinates: [-111.7975, 43.9700], info: "Great for hiking and dune buggies." },
      { name: "Henry's Fork Greenway", coordinates: [-111.6810, 43.9660], info: "Scenic greenway with multiple trails." },
      { name: "Teton Lakes Golf Course", coordinates: [-111.7739, 43.8351], info: "Golf course with beautiful hiking paths." },
      { name: "Rexburg Rapids", coordinates: [-111.7845, 43.8243], info: "Fun water park with nearby trails." },
      { name: "Warm Slough", coordinates: [-111.7816, 43.7481], info: "Relaxing area with trails and water access." },
      { name: "Monkey Rock", coordinates: [-111.6670, 43.5970], info: "Popular spot with a small waterfall." },
      { name: "Heise Hot Springs", coordinates: [-111.6555, 43.6295], info: "Hot springs with hiking nearby." },
      { name: "Kelly Canyon", coordinates: [-111.6530, 43.6070], info: "Ski resort with summer hiking trails." },
      { name: "Mesa Falls", coordinates: [-111.3216, 44.0842], info: "Stunning waterfall with hiking paths." },
      { name: "Lower Mesa Falls", coordinates: [-111.3216, 44.0842], info: "Part of the Mesa Falls with beautiful views." },
      { name: "Upper Mesa Falls", coordinates: [-111.3216, 44.0842], info: "Upper part of the Mesa Falls with a trail." },
      { name: "Lyman Falls", coordinates: [-111.7416, 43.8906], info: "Small waterfall with hiking trails." },
      { name: "Green Canyon Hot Springs", coordinates: [-111.6691, 43.6760], info: "Hot springs with surrounding nature trails." }
    ];
  
    hikingSpots.forEach(spot => {
      const point = {
        type: "point",
        longitude: spot.coordinates[0],
        latitude: spot.coordinates[1]
      };
  
      const markerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40],
        outline: {
          color: [255, 255, 255],
          width: 1
        }
      };
  
      const pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
        attributes: {
          name: spot.name,
          info: spot.info
        },
        popupTemplate: {
          title: "{name}",
          content: "{info}"
        }
      });
  
      graphicsLayer.add(pointGraphic);
    });
  });
  