import { Component, OnInit } from '@angular/core';

// import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import Geolocation from 'ol/Geolocation';
import Select from 'ol/interaction/Select';
import {click} from 'ol/events/condition';
import {createStringXY} from 'ol/coordinate';
import {defaults as defaultControls} from 'ol/control';
import MousePosition from 'ol/control/MousePosition';

const mousePositionControl = new MousePosition({
  coordinateFormat: createStringXY(4),
  projection: 'EPSG:3857'
});

const selectClick = new Select({
  condition: click
});

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public map!: Map
  ngOnInit(): void {

    this.map = new Map({
      controls: defaultControls().extend([mousePositionControl]),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map',
      view: new View({ 
        center: [0, 0],
        zoom: 2,maxZoom: 18, 
      })
    }); 
    
 }
}
