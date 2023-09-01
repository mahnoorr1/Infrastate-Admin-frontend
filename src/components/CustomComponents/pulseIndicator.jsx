import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

const LocationMarker = ({ position }) => {
  const [pulseSize, setPulseSize] = useState(0);
  const pulseInterval = 1000; // Interval for pulsating animation in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseSize(size => (size === 1 ? 0 : 1)); // Toggle size between 0 and 1
    }, pulseInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const pulseIcon = L.divIcon({
    className: 'pulse-icon',
    iconSize: [20 * (1 + pulseSize * 0.5), 20 * (1 + pulseSize * 0.5)],
  });

  return <Marker position={position} icon={pulseIcon}></Marker>;
};

export default LocationMarker;
