import React from 'react';
import theme from '../../configs/theme';
import { Card, Typography } from "@mui/material";

const NotificationCard = ({ title, description, date, alert }) => {
  const handleClick = () => {
    console.log('Card clicked!');
  };

  return (
    <Card
      onClick={handleClick} 
      sx={{
        height: '60px',
        border: 'none',
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.shades.greyLine,
        width: '96%',
        padding: '5px',
        margin: '7px',
        flexDirection: 'column',
        cursor: 'pointer', 
        boxShadow: 'none',
        marginTop: '14px',
      }}
    >
      <Card
        sx={{
          boxShadow: 'none',
          border: 'none',
          display: 'grid',
          gridTemplateColumns: '1.6fr 0.4fr',
          paddingRight: '5px',
        }}
      >
        <Typography sx = {{
            fontWeight: '600',
        }}
        color={theme.palette.shades.greenMedium}
        variant="subheading1" 
        overflow={'hidden'}
        whiteSpace="nowrap" 
        textOverflow="ellipsis"
        >
          {title}
        </Typography>
        <Typography variant="body2" color={'grey'}>
          {date}
        </Typography>
      </Card>
      <Typography 
        variant="body1" 
        color={'gray'} 
        overflow={'hidden'}
        whiteSpace="nowrap" 
        textOverflow="ellipsis"
      >
        {description}
      </Typography>
    </Card>
  );
}

export default NotificationCard;
