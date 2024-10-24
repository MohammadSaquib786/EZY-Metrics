import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [5200, 4500, 6800, 3000, 5500, 4100, 7500];;
const pData =  [3200, 6000, 2900, 4100, 6200, 3900, 5300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function Linegrph() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'Referral Leads', yAxisId: 'leftAxisId' },
        { data: uData, label: 'Email Camping Leads', yAxisId: 'rightAxisId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      rightAxis="rightAxisId"
    />
  );
}
