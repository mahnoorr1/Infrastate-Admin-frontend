import * as React from 'react';
import { PieChart } from '@mui/x-charts';
import theme from '../../configs/theme';

const PieChartWithPaddingAngle = ({data, size, radius}) => {
  return (
      <PieChart
        series={[
          {
            startAngle: -90,
            endAngle: 90,
            paddingAngle: 4,
            innerRadius: 40,
            outerRadius: radius,
            data,
          },
        ]}
        colors={data.size == 1 ? [theme.palette.shades.red, theme.palette.shades.greenLite,] :
          data.size == 2 ? [theme.palette.shades.red, theme.palette.shades.greenLite, theme.palette.shades.greenMedium,] : 
          [theme.palette.shades.red, theme.palette.shades.greenLite, theme.palette.shades.greenMedium, theme.palette.shades.greenDark]}
        width={size}
        height={size}
        margin={{left: window.matchMedia('(min-width: 900px)').matches ? 90 : 100}}
        legend={{hidden: true}}
      />
  );
}

export default PieChartWithPaddingAngle;
