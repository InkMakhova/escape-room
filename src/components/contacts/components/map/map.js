import React, { useEffect } from 'react';
import * as ol from "ol";
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import { Point } from 'ol/geom';
import { Icon, Style } from 'ol/style';
import { Feature } from 'ol';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

const MainCoordinates = {
  Lon: 59.96813,
  Lat: 30.31653
}

const Map = () => {

  const coordinates = fromLonLat([MainCoordinates.Lat, MainCoordinates.Lon]);

  const iconFeature = new Feature({
    geometry: new Point(coordinates),
    name: 'Escape Room',
  });

  const iconStyle = new Style({
    image: new Icon({
      crossOrigin: 'anonymous',
      src: 'img/pin.png',
      scale: 0.1,
      anchor: [0.5, 1],
    }),
  });

  iconFeature.setStyle(iconStyle);

  const vectorSource = new VectorSource({
    features: [iconFeature],
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });


  useEffect(() => {
    new ol.Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      , vectorLayer],
      view: new View({
        center: coordinates,
        zoom: 16
      })
    });
  }, [coordinates]);

  return (
      <div id='map'>
      </div>
  )
}

export default Map;
