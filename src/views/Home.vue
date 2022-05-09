<template>
  <div class="flex flex-row h-screen w-full justify-between">
    <div class="bg-red-500 w-1/5">test</div>
    <div class="w-4/5">
      <div ref="map-root" style="height: 100%"></div>
    </div>
  </div>
</template>

<script>
import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import OSM from 'ol/source/OSM'
// import Geom from 'ol/geom'
import Point from 'ol/geom/Point'
// import Proj from 'ol/proj'
import Feature from 'ol/Feature'
import VectorSource from 'ol/source/Vector'
import Style from 'ol/style/Style'
import Icon from 'ol/style/Icon'
import '@/data/MarineTraffic.js'
// import ol from 'ol';


// importing the OpenLayers stylesheet is required for having
// good looking buttons!
import 'ol/ol.css'

export default {
  name: 'MapContainer',
  components: {},
  props: {},
  mounted() {

    // this is where we create the OpenLayers map
    var map = new Map({
      // the map will be created using the 'map-root' ref
      target: this.$refs['map-root'],
      layers: [
        // adding a background tiled layer
        new TileLayer({
          source: new OSM() // tiles are served by OpenStreetMap
        }),
        new TileLayer({
          source: new OSM({
            url: 'http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
            crossOrigin: 'null'
          })
        }),

      ],

      // the map view will initially show the whole world
      view: new View({
        projection: 'EPSG:4326',
        zoom: 13,
        center: [4.13212800301793, 51.81995187280897],
        constrainResolution: true
      }),
    });

    // 51.83403672350948, 4.064912382235589
    var gpsData = {
      data: [
        {
          id: '1',
          lat: '51.81995187280897',
          lon: '4.13212800301793',
          type: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/lifeguard-1729094-1469532.png',
          scale: [0.15, 0.15],
          anchor: [0, 0],
        },
        {
          id: '2',
          lat: '51.83403672350948',
          lon: '4.064912382235589',
          type: 'https://cdn-icons-png.flaticon.com/128/5035/5035903.png',
          scale: [0.3, 0.3],
          anchor: [0, 0],
        },
      ]
    }

    for (var i = 0; i < gpsData.data.length; i++) {
      var lat = gpsData.data[i]['lat'];
      var lon = gpsData.data[i]['lon'];
      var id = gpsData.data[i]['id'];
      var type = gpsData.data[i]['type'];
      var scale = gpsData.data[i]['scale'];
      var anchor = gpsData.data[i]['anchor'];

      var iconFeature = new Feature({
        projection: 'EPSG:4326',
        geometry: new Point([lon, lat]),
        name: id,
      });

      var a = new VectorLayer({
        source: new VectorSource({
          features: [iconFeature]
        }),
          style: new Style({
            image: new Icon({
              anchor: anchor,
              anchorXUnits: 'fraction',
              anchorYUnits: 'pixels',
              scale: scale,
              src: type
            })
          })
      });

      map.addLayer(a);
    }

  }
  ,
}
</script>
