import React, { useState } from 'react';
import { Card, Box } from '@mui/material';

const HoverGradientCard = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'relative',
        display: 'inline-block',
        transition: 'transform 0.2s, box-shadow 0.2s',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        textAlign: 'center', 
        width: '100%',
      }}
    >
      <Card
        sx={{
          width: '100%',
          height: '98%',
          borderRadius: 5,
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'center', 
          background: isHovered
            ? 'linear-gradient(to right, white, rgba(15, 150, 156, 0.5))'
            : 'none',
        }}
      >
        {children}
      </Card>
    </Box>
  );
};

export default HoverGradientCard;
