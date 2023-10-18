import React, {useState} from 'react';
import {Box, InputLabel, FormControl, Select, MenuItem} from '@mui/material';

const Selection = ({data, label, updateZone}) => {
    const [selectedZone, setSelectedZone] = useState('');
    const handleZoneChange = (event) => {
        setSelectedZone(event.target.value);
        updateZone(event.target.value);
    };

  return (
    <Box sx={{ width: '300px' }}>
      <FormControl sx={{
        
      }} fullWidth>
        <InputLabel sx={{
            marginLeft: '10px',
        }} variant="standard" htmlFor="controlled-select">
          {label}
        </InputLabel>
        <Select 
        fullWidth
          label={label}
          value={selectedZone}
          onChange={handleZoneChange}
          id="controlled-select"
        >
          {data.map(zone => (
            <MenuItem key={zone.key} value={zone.value}>
              {zone.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Selection;
