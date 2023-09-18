import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import theme from '../../configs/theme';

const ControlledCheckbox = ({check, setChecked}) => {

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      sx={{
        color: 'grey[800]',
        '&.Mui-checked': {
          color: theme.palette.shades.greenMedium,
        },
      }}
      checked={check}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}

export default ControlledCheckbox;