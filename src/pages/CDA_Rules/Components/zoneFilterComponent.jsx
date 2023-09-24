import React, { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { Typography } from '@mui/material';
import { TrackingZonesData } from '../../../configs/defaultData';
import Selection from '../../../components/CustomComponents/selectComponent';

const ZoneFilterComponent = ({ data, onFilterChange }) => {
  const [selectedZone, setSelectedZone] = useState('All');

  const handleZoneChange = (event) => {
    const zone = event.target.value;
    setSelectedZone(zone);

    const filteredData = zone === 'All' ? data : data.filter(item => item[1] === zone);

    onFilterChange(filteredData);
  };

  return (
    <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        margin: '10px'
    }}>
      <Typography >Filter by Zone </Typography>
      <BsFilter style={{
        fontSize: '20px',
      }}></BsFilter>
      <Selection data={TrackingZonesData} label={'Zone'} updateZone={setSelectedZone}></Selection>
    </div>
  );
};

export default ZoneFilterComponent;
