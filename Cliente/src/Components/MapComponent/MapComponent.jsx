// src/components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define el estilo y las opciones del mapa
const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

function MapComponent  () {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBykGCgrTLWGd0VPEwbP6OEa1sIYqcxGZk">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
