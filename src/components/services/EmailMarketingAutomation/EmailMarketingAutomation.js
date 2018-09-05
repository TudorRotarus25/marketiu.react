import React from 'react';
import Helmet from 'react-helmet';
import Aux from '../../../hoc/Aux/Aux';
import image1 from '../../../assets/images/servicesContent/Email_Marketing_Automation_Inline.jpg';

const emailMarketingAutomation = () => (
  <Aux>
    <Helmet>
      <title>Marketiu | Email, CRM & Marketing Automation</title>
      <meta name="description" content="The future of Digital Marketing lies in the ability of fully understanding your individual customers and designing bespoke messages delivered through the right channel, at the right time, enhancing the dialogue and relationship with every interaction. Find out how this can boost your Marketing results, bring in customers and decrease your Budget spend."/>
    </Helmet>
    <div className="row">
      <div className="column">
        <p>
          The future of Digital Marketing lies in the ability of fully understanding your individual customers and designing
          bespoke messages delivered through the right channel, at the right time, enhancing the dialogue and relationship
          with every interaction.
        </p>
        <p>
          From Automated Email Marketing Programs Implementation to Strategy building for Ad-hoc / Promotional Email
          campaigns, we have helped international brands over the past three years massively increase their revenue,
          customer retention and lifetime value by developing sustainable relationships while understanding their
          audience’s behaviour and needs.
        </p>
      </div>
      <div className="column">
        <img src={image1} alt=""/>
      </div>
    </div>
    <p>
      Furthermore, as Sales Funnel & Customer
      Journey optimisation through Email Marketing Automation have become increasingly popular during the past five
      years, we have developed a passion for understanding the best ways in which new leads are being captured. We then
      create meaningful brand stories to educate and provide valuable information through automated Direct Marketing
      Programs, establishing a strong relationship and generating sales.
    </p>
    <p>
      Whether it’s only the strategic aspect you need help with, or the overall implementation and ongoing support with
      your Direct and Automated Email Marketing Programs, we are excited to jump on board and help you gain the most out
      of it!
    </p>
    <p>
      Do you want to find out more about how you can optimise automated journeys for your brand to enrich interaction
      and conversion?
    </p>
  </Aux>
);

export default emailMarketingAutomation;
