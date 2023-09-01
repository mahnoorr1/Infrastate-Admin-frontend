import * as React from 'react';
import { PieChart } from '@mui/x-charts';
import theme from '../../configs/theme';

const PercentPieChart = ({percent, size}) => {
  const data = [];
  for (let i = 2; i<=100; i+=2){
    data.push({key: i, value: 2});
  }

  const colors = [];
  if(percent<100){
    for (let i = 2; i<=100; i+=2){
      if(i<percent){
        colors.push(theme.palette.shades.greenLite);
      }else{
        colors.push('lightgrey');
      }
    }
  } else if (percent == 100){
      colors.push(theme.palette.shades.red);
  }
  

  return (
      <PieChart
        series={[
          {
            startAngle: -180,
            endAngle: 180,
            paddingAngle: 2,
            innerRadius: 20,
            outerRadius: 80,
            data,
          },
        ]}
        colors={colors}
        width={size}
        height={size}
        margin={{left: window.matchMedia('(min-width: 900px)').matches ? 90 : 100}}
        tooltip={false}
      />
  );
}

export default PercentPieChart;
