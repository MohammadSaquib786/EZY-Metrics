import React from 'react';
import './Leads.css';
import PieActiveArc from '../Graphs/DetailPieChart';

import BasicPie from '../Graphs/Piechart';

function Leads() {
  return (
    <div className='Leads'>
      <div className="toplevalediv">
      <div className="description">
          <h1>Lead Generation Insights</h1>
          <p className='paragraph'>Our lead generation strategy is website, social media, referrals, and email campaigns. As depicted in the chart, the majority of our leads are sourced directly through our website, which underscores our focus on providing an optimized user experience and seamless navigation. A significant portion of leads also comes from social media platforms, reflecting our strong engagement and outreach on these channels. Referral programs contribute a substantial share, showcasing the value of partnerships and customer advocacy. Lastly, our targeted email campaigns generate a smaller but important segment of leads, supporting ongoing efforts to personalize and optimize our email marketing strategy.</p>
        </div>
        <div className="piechat">
          <div className="discribe-piechat">
            <ul className='list'>
              <li> <b> Website Leads:</b>
                Optimized for user experience, our website generates the most leads through intuitive navigation, SEO, and clear calls-to-action.</li>
              <li> <b>Social Media Leads:</b>
                Engaging content and targeted ads on platforms like Facebook and Instagram drive significant traffic and lead generation. </li>
              <li> <b>Referral Leads:</b>
                Referral programs and client advocacy help generate high-quality leads from trusted sources, boosting conversion rates and loyalty.</li>
              <li> <b>Email Campaign Leads:</b>
                Personalized and segmented email campaigns nurture leads, re-engage inactive users, and drive targeted traffic to our services.</li>
            </ul>
          </div>
         <BasicPie/>
        </div>

        </div>

        <div  className='lower-piechart'>
          <div className="piechat-lower">
          <div>
          <h2>Lead Source Distribution</h2>
          <ul className='lists'>
            <li>Website Leads (40.72%)</li>
            <li>Social Media Leads (20.38%)</li>
            <li>Referral Leads (18.83%)</li>
            <li>Email Campaign Leads (16.42%)</li>
            <li>Other (4.65%)</li>
          </ul>
          </div>
          <PieActiveArc />
          </div>
         
         
        <div className="discribe-piechats">
        <h2>Lead Source Distribution by Channel</h2>
          <ul className='list'>
            <li> <b>Website Leads (40.72%): </b>
              The largest portion of our leads comes from the website, highlighting its effectiveness in attracting and converting visitors through well-optimized design, user experience, and SEO strategies.</li>
            <li> <b>Social Media Leads (20.38%):</b>
              A significant portion of leads originates from social media platforms, driven by engaging content, targeted advertising, and active community interaction across platforms like Facebook, Instagram, and LinkedIn.</li>
            <li> <b>Referral Leads (18.83%): </b>
              Referrals from existing customers or partners contribute nearly 19%, showcasing the strength of word-of-mouth and our structured referral programs, which incentivize client advocacy.</li>
            <li> <b>Email Campaign Leads (16.42%): </b>
              Email campaigns are another key source, accounting for 16% of our leads. These come from targeted, personalized email strategies that nurture existing prospects and re-engage inactive users.</li>
            <li> <b>Other (4.65%): </b>
              A small portion of our leads (4.65%) come from miscellaneous sources, including offline efforts, events, and less frequent digital touchpoints.</li>
          </ul>
        </div>
          </div>
        
        
        </div>

  )
}

export default Leads

