import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import image1 from '../../../assets/images/servicesContent/Social_media_Marketing_Inline_2.png';
import image3 from '../../../assets/images/servicesContent/Social_Media_Influencer_Inline.png';

const socialMedia = () => (
  <Aux>
    <p>
      Sometimes it can feel like having an “online life” makes you miss amazing moments in your real one. Not to say,
      making sure all your posts are scheduled for the best hours on each platform, all online campaigns are on track
      and your community is engaged and happy, can many times get overwhelming!
    </p>
    <div className="row">
      <div className="column">
        <p>
          We can help you in implementing and executing your Social Media Organic Campaigns, as well as produce highly
          relevant content strategies and calendars, while using industry-leading tools to help you schedule and
          optimise posts for best performing times.
        </p>
      </div>
      <div className="column">
        <img src={image1} alt=""/>
      </div>
    </div>
    <p>
      We have also obtained results much over the industry average for our clients implementing and managing Paid
      Advertising campaigns on Facebook, Instagram, Youtube and LinkedIn, which are essential today for engaging
      with new potential customers in a targeted way and generating new leads.
    </p>
    <p>
      It’s your time to be heard!
    </p>
    <p>
      <strong>
        Expand your Social Brand Awareness and Reach further
      </strong>
    </p>
    <div className="row">
      <div className="column">
        <p>
          We can also help you collaborate
          with Online Influencers in your niche
          and negotiate the best partnerships
          to get your brand straight to the
          online communities that count! This
          type of marketing has proved highly
          effective in the past two years, and
          is growing at a very high speed,
          generating amazing ROIs for each of our clients. If this sounds like something you might be interested in,
          just write us and we’ll be happy to explore this together!
        </p>
      </div>
      <div className="column">
        <img src={image3} alt=""/>
      </div>
    </div>
  </Aux>
);

export default socialMedia;
