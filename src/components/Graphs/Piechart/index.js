import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 30, label: 'Website Leads' },
            { id: 1, value: 20, label: 'Social Media Leads' },
            { id: 2, value: 20, label: 'Referral Leads' },
            { id: 3, value: 20, label: 'Email Campaign Leads' },
          ],
        },
      ]}
      width={700}
      height={300}
    />
  );
}
