import React from 'react'
import './Dashboard.css'

import  { BasicBars } from '../Graphs/Chats'
import BarsDataset from '../Graphs/DetailChat'
function Dashboard() {
  return (
    <div className='dashboard'>
      <div className="topchatbar">
        <div className="detail-topchatbar">
          <h1 className='title'>Lead Capture </h1>
          <div className="para">
          <p>This bar chart displays the number of leads generated from various marketing sources over three quarters. The data includes six key lead sources: Website Leads, Social Media Leads, Referral Leads, Email Campaign Leads, Paid Ads Leads, and Organic Search Leads. Each lead source is represented with distinct colors, providing a clear comparison of performance across the quarters. The chart helps visualize how different channels contribute to the overall lead generation strategy, highlighting trends and effectiveness for each source.</p>
          <p>This visual is effective for highlighting group performance differences, making it useful for quick comparisons of data sets such as sales performance, lead generation, or metric tracking.</p>
          </div>
        </div>
        <div className='bargraph'>
          <ul className='bargraphlist'>
          <li>
            Group A Overview: Group A shows the highest value for the first bar but much lower values for the other two categories.</li>

          <li>Group B Performance: Group B has a significant increase in blue and pink bars compared to Group A, indicating improved results.</li>

        <li>Group C Trends: Group C demonstrates high performance, with the pink bar reaching its maximum, outpacing the other groups.
        </li>
        <li>Category Comparisons: Across all groups, the third category (pink) shows a consistent rise, outperforming the other two categories.</li>
          </ul>
          
        <BasicBars />
        </div>
      </div>
      <div className="lowerchatbar">
        <div className="detail-lowerchatbar">
          <h1>Monthly Lead </h1>
          <p className='paragraph'>The bar graph illustrates monthly lead generation from four key sources: Website Leads, Social Media Leads, Referral Leads, and Email Campaign Leads, over the course of a year. It shows that Referral Leads and Email Campaign Leads consistently drive the highest numbers, with Referral Leads peaking in August and Email Campaign Leads reaching their maximum in September. Meanwhile, Website Leads and Social Media Leads remain relatively steady, though they generate fewer leads compared to the other two channels. Website leads fluctuate between 50 and 80 throughout the year, while social media leads show a modest increase between May and July, reaching around 80. Overall, the data suggests that Referral and Email campaigns are the most effective channels for lead generation, while website and social media sources offer stable but smaller contributions.</p>
        </div>
        <div className='bargraph'>
          <ul className='bargraphlist'>
          <li>
            Group A Overview: Group A shows the highest value for the first bar but much lower values for the other two categories.</li>

          <li>Group B Performance: Group B has a significant increase in blue and pink bars compared to Group A, indicating improved results.</li>

        <li>Group C Trends: Group C demonstrates high performance, with the pink bar reaching its maximum, outpacing the other groups.
        </li>
        <li>Category Comparisons: Across all groups, the third category (pink) shows a consistent rise, outperforming the other two categories.</li>
          </ul>
        <BarsDataset/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
