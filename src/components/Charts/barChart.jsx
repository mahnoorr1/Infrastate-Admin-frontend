import * as React from 'react';
import theme from '../../configs/theme';
import { BarChart } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
  yAxis: [
    {
      label: 'monthly stats in percentage',
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
    land: 57,
    change: 86,
    zone: 'zone 1',
  },
  {
    trackers: 50,
    land: 52,
    change: 78,
    zone: 'zone 2',
  },
  {
    trackers: 47,
    land: 53,
    change: 100,
    zone: 'zone 3',
  },
  {
    trackers: 54,
    land: 56,
    change: 92,
    zone: 'zone 4',
  },
  {
    trackers: 57,
    land: 69,
    change: 92,
    zone: 'zone 5',
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
        { dataKey: 'land', label: 'Green Land', valueFormatter },
      ]}
      colors={[ theme.palette.shades.blueLite, theme.palette.shades.greenLite, theme.palette.shades.greenMedium, theme.palette.shades.blueMedium, ]}
      {...chartSetting}
      animate={animationConfig}
    />
  );
}
