import React from 'react';
import theme from '../../configs/theme';
import Button from '@mui/material/Button';

const AppButton = ({ text, variant, onClick }) => {
  return (
    <Button
      variant={variant || 'contained'}  // Default to 'contained' if variant prop is not provided
      onClick={onClick}
      sx={{
        width: '200px',
        height: '50px',
        borderColor: variant == 'outlined' ? theme.palette.buttons.outline : null,
        backgroundColor: variant != 'outlined' ? theme.palette.buttons.contain : null,
        color: variant == 'outlined' ? theme.palette.buttons.outline : 'white',
        fontWeight: '700',
        borderWidth: '2px',
        margin: '5px',
        marginBottom: '15px',
      }}
    >
      {text}
    </Button>
  );
};

export default AppButton;