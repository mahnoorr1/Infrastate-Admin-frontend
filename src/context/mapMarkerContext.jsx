import React, { createContext, useState } from 'react';
import useLocationFetcher from '../hooks/locationFetcher';

const MapMarkerContext = createContext();

const MarkerProvider = ({ children }) => {
  const [location, setLocation] = useState({ lat: 33.709256, lng: 73.082362 });
  const { locationName, fetchLocationName } = useLocationFetcher();
  fetchLocationName(location);

  const updateLocation = (location) => {
    setLocation(location);
    fetchLocationName(location.lat, location.lng);
  };

  const contextValue = {
    location,
    locationName,
    updateLocation,
  };

  return (
    <MapMarkerContext.Provider value={contextValue}>
      {children}
    </MapMarkerContext.Provider>
  );
};

export { MapMarkerContext, MarkerProvider };
