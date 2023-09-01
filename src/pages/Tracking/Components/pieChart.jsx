import React from 'react';
import { Card, Typography } from "@mui/material";
import PieChartWithPaddingAngle from "../../../components/Charts/halfPieChart";

const pieChartdata = [
    { label: 'changed', value: 100 },
    { label: 'not changed', value: 300 },
];
  
const TrackerPieChart = () => {
    return(
        <Card sx={{
            height: '100%',
            width: '100%',
            boxShadow: 'none',
            border: 'none',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <PieChartWithPaddingAngle 
            data={pieChartdata}
            size={window.matchMedia('(min-width: 900px)').matches ? 260 : 280}
            radius={window.matchMedia('(min-width: 900px)').matches ? 100 : 140}
            ></PieChartWithPaddingAngle>
        </Card>
    );
}

export default TrackerPieChart;