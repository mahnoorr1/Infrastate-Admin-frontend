import * as React from 'react';
import theme from '../../configs/theme';
import { BarChart } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'change in percentage',
    },
  ],
  width: 650,
  height: 350,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'rotate(-90deg) translate(0px, -20px)',
    },
  },
};
const dataset = [
  {
    trackers: 1,
    // land: 57,
    change: 13,
    zone: 'zone 1',
  },
  {
    trackers: 2,
    // land: 52,
    change: 3,
    zone: 'zone 2',
  },
  {
    trackers: 4,
    // land: 53,
    change: 5,
    zone: 'zone 3',
  },
  {
    trackers: 3,
    // land: 56,
    change: 2,
    zone: 'zone 4',
  },
];

const valueFormatter = (value) => `${value}%`;

export default function BarsDataset() {
  const animationConfig = {
    animationDuration: 1000, // Duration in milliseconds
    easing: 'ease-out', // Animation easing function
  };
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'zone' }]}
      series={[
        { dataKey: 'trackers', label: 'Trackers'},
        { dataKey: 'change', label: 'Change', valueFormatter },
      ]}
      colors={[ theme.palette.shades.blueLite, theme.palette.shades.greenLite, theme.palette.shades.greenMedium, theme.palette.shades.blueMedium, ]}
      {...chartSetting}
      animate={animationConfig}
    />
  );
}
