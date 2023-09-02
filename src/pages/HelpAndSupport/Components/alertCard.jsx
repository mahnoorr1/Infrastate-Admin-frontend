import React from "react";
import theme from "../../../configs/theme";
import { Card, Typography } from "@mui/material";

const AlertCard = ({ alert, onClick }) => {
  const handleCardClick = () => {
    onClick(alert);
  };

  return (
    <Card
      sx={{
        width: "100%",
        margin: "5px",
        height: "80px",
        padding: "10px",
        border: "none",
        boxShadow: "none",
        borderBottom: "1px solid",
        borderBottomColor: theme.palette.shades.greyLine,
        cursor: "pointer",
        transition: "background-color 0.3s", 
        "&:hover": {
          backgroundColor: "#f8f8f8", 
        },
      }}
      onClick={handleCardClick} 
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body1"
          fontWeight={600}
          color={theme.palette.shades.greenMedium}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
          textOverflow={"ellipsis"}
        >
          {alert.subject}
        </Typography>
        <Typography variant="body2" color={"grey"}>
          {alert.date}
        </Typography>
      </div>
      <Typography
        variant="body2"
        color={"grey"}
        overflow={"hidden"}
        whiteSpace={"nowrap"}
        textOverflow={"ellipsis"}
      >
        {alert.description}
      </Typography>
    </Card>
  );
};

export default AlertCard;
