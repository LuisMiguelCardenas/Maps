/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapsApp } from './MapsApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoibGNhcmRlbmFzbCIsImEiOiJjbDFtN3p3OW8wYXdlM2ttamw4dHp1N244In0.AjgL4OlQAU-wlVK8b_VIqw';

if ( !navigator.geolocation ){
  alert( 'El navegador no tiene opción de geolocalización');
  throw new Error('El navegador no tiene opción de geolocalización');
}




ReactDOM.render(
  <React.StrictMode>
    <MapsApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

