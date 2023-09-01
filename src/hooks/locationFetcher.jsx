import { useState, useEffect } from 'react';
import axios from 'axios';

const useLocationFetcher = () => {
  const [locationName, setLocationName] = useState('fetching..');

  const fetchLocationName = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );

      if (response.data.display_name) {
        setLocationName(response.data.display_name);
      }
    } catch (error) {
      console.error('Error fetching location name:', error);
    }
  };

  return { locationName, fetchLocationName };
};

export default useLocationFetcher;
