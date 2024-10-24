import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from './DetailData';

const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 750,
  height: 500,
  
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'WebsiteLeads', label: 'Website Leads', valueFormatter },
        { dataKey: 'SocialMediaLeads', label: 'Social Media Leads', valueFormatter },
        { dataKey: 'ReferralLeads', label: 'Referral Leads', valueFormatter },
        { dataKey: 'EmailCampaignLeads', label: 'Email Campaign Leads', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
