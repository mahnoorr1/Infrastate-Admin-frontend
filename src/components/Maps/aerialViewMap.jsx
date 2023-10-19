import 'leaflet/dist/leaflet.css';
import React, { useContext } from 'react';
import useLocationFetcher from '../../hooks/locationFetcher';
import {MapMarkerContext} from '../../context/mapMarkerContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function AerialMap({ height, width }) {
  const { location, locationName, updateLocation, address } = useContext(MapMarkerContext);
  
  const handleMarker1DragEnd = (e) => {
    const { lat, lng } = e.target._latlng;
    updateLocation({ lat, lng });
  };

  return (
    <MapContainer
      center={location}
      zoom={17}
      style={{ height: height, width: width, borderRadius: 20, marginLeft: 15 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri"
      />

      <Marker
        position={location}
        draggable={true}
        eventHandlers={{
          dragend: handleMarker1DragEnd,
        }}
      >
        <Popup>
              <div>
                <strong>Location Name:</strong>
                <br />
                {locationName || 'Fetching...'}
                <br/>
                lat: {location.lat}, lng: {location.lng} 
              </div>
            </Popup>
      </Marker>
    </MapContainer>
  );
}

export default AerialMap;
