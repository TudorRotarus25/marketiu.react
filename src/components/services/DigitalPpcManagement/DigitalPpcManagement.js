import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import image1 from '../../../assets/images/servicesContent/Marketing_Strategy_Consulting_in1.png';

const digitalPpcManagement = () => (
  <Aux>
    <div className="row">
      <div className="column">
        <p>
          As customers are increasingly interacting with brands online, and new channels are being developed, is it
          essential your brand communicates with its target audience in a customised way cross- channel, offering them
          bespoke experiences with targeted messages specific for each point in their customer journey. Moreover, as
          technology is being integrated into marketing new opportunities raise every day for increasing your
          profitability while developing meaningful relationships with your current and potential customers.
        </p>
      </div>
      <div className="column">
        <img src={image1} alt=""/>
      </div>
    </div>
    <p>
      From Web Banners to Interactive website HTML, Pop-up notifications or PPC /Google Adwords campaigns, our lively
      and highly experienced team is here to ensure your conversion and up-selling ratios increase month-on-month, while
      your brand reputation and profits scale, helping your business flourish in the new Digital Age.
    </p>
  </Aux>
);

export default digitalPpcManagement;
