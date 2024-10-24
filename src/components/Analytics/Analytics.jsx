import React from 'react';
import './Analytics.css';

import BarsDataset from '../Graphs/DetailChat'; 
import PieActiveArc from '../Graphs/DetailPieChart';
import BiaxialLineChart from '../Graphs/Analytics';
import Linegrph from '../Graphs/Analytics/Linegraph';

const Analytics = () => {
  return (
    <div className='analytics'>
      {/* Header Section */}
      <div className="analytics-header">
        <h1>Analytics Dashboard</h1>
        <p className='analytics-description'>
          This dashboard provides an overview of key lead generation data, showcasing performance insights across multiple channels and sources. The visualizations below provide a detailed breakdown of how leads are generated and how different marketing efforts contribute to business outcomes.
        </p>
      </div>
      {/* Section 2: Monthly Lead Performance */}
      <div className="analytics-section">
        <h2> Website vs Social Media Lead Performance Across Pages</h2>
        <p className="section-description">
        The line graph above compares the lead generation performance of two key channels: Website Leads (green line) and Social Media Leads (blue line) across various pages (Page A to Page G).
        </p>
        <div className="pie-chart-section">
          <ul className="pie-chart-details">
            <li><b>Website Leads:</b> start strong at Page A with a peak of around 10,000 leads, but they fluctuate as the pages progress, reaching their lowest point at Page D before stabilizing.</li>
            <li><b>Social Media  Leads:</b> Show a more gradual rise and fall, peaking at Page C and Page G with a significant spike in leads at both points, reflecting a steady engagement across platforms.</li>
          </ul>
          <BiaxialLineChart/>
        </div>
      </div>
      <div className="analytics-section">
        <h2> Referral vs Email Campaign Leads Performance Across Pages</h2>
        <p className="section-description">
        This line graph compares the lead generation performance of two key channels: Referral Leads and Email Campaign Leads across seven different pages (Page A to Page G). The green line represents Referral Leads, while the blue line represents Email Campaign Leads.
        </p>
        <div className="pie-chart-section">
          <ul className="pie-chart-details">
            <li><b>Referral Leads:</b>Referral Leads demonstrate higher performance on Pages B, E, and G, peaking around 7,000 leads.</li>
            <li><b>Email Campaign Leads:</b> Email Campaign Leads show higher performance on Pages C and G, with significant fluctuations reaching up to 8,000 leads on Page G.</li>
          </ul>
          <Linegrph/>
        </div>
      </div>
      <div className="analytics-section">
        <h2>Monthly Lead Generation</h2>
        <p className="section-description">
          The graph illustrates the monthly performance of lead generation for each source. This allows for a more granular understanding of trends and seasonality in lead acquisition.
        </p>
       <div className='bargraph'>  <BarsDataset /></div>
      </div>
      

      {/* Section 3: Lead Source Distribution - Pie Chart */}
      <div className="analytics-section">
        <h2>Lead Source Breakdown</h2>
        <p className="section-description">
          The pie chart below highlights the proportion of leads from various sources, giving a clear view of which channels contribute the most to overall lead acquisition.
        </p>
        <div className="pie-chart-section">
          <ul className="pie-chart-details">
            <li><b>Website Leads:</b> Majority of the leads come from the website due to optimized SEO strategies and user experience.</li>
            <li><b>Social Media Leads:</b> Strong engagement on platforms like Facebook, Instagram, and LinkedIn contributes a significant portion.</li>
            <li><b>Referral Leads:</b> Referrals from partners and existing customers account for nearly 19% of the total leads.</li>
            <li><b>Email Campaign Leads:</b> Personalized email marketing efforts contribute around 16% of the total leads.</li>
          </ul>
          <PieActiveArc />
        </div>
      </div>
   
     
          
        </div>
  
  );
};

export default Analytics;
