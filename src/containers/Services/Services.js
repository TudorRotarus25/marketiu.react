import React, { Component } from 'react';
import classes from './Services.css';
import marketingConsultancyImage from '../../assets/images/banners/marketing-consultancy.jpg';
import socialMediaImage from '../../assets/images/banners/social-media.jpg';
import digitalPpcManagementImage from '../../assets/images/banners/digital-ppc-management.jpg';
import webDesignImage from '../../assets/images/banners/web-design.jpg';
import mediaProductionImage from '../../assets/images/banners/media-production.jpg';
import emailMarketingAutomationImage from '../../assets/images/banners/email-marketing-automation.png';
import MarketingConsultancy from '../../components/services/MarketingConsultancy/MarketingConsultancy';
import SocialMedia from '../../components/services/SocialMedia/SocialMedia';
import DigitalPpcManagement from '../../components/services/DigitalPpcManagement/DigitalPpcManagement';
import WebDesign from '../../components/services/WebDesign/WebDesign';
import MediaProduction from '../../components/services/MediaProduction/MediaProduction';
import EmailMarketingAutomation from '../../components/services/EmailMarketingAutomation/EmailMarketingAutomation';

class Services extends Component {
  getServiceData = (service) => {
    switch (service) {
      case 'marketing-consultancy':
        return {
          image: marketingConsultancyImage,
          title: 'Marketing Strategy & Consultancy',
          body: <MarketingConsultancy/>,
        };
      case 'social-media':
        return {
          image: socialMediaImage,
          title: 'Social Media & Influencer Marketing',
          body: <SocialMedia/>,
        };
      case 'digital-ppc-management':
        return {
          image: digitalPpcManagementImage,
          title: 'Digital & PPC Campaign Management & Automation',
          body: <DigitalPpcManagement/>,
        };
      case 'web-design':
        return {
          image: webDesignImage,
          title: 'Web & Mobile App Design & Development',
          body: <WebDesign/>,
        };
      case 'media-production':
        return {
          image: mediaProductionImage,
          title: 'Photo, Video, HTML & Graphic Media Production',
          body: <MediaProduction/>,
        };
      case 'email-marketing-automation':
        return {
          image: emailMarketingAutomationImage,
          title: 'Email & Marketing Automation',
          body: <EmailMarketingAutomation/>,
        };
      default:
        return {};
    }
  };

  render() {
    const serviceName = this.props.match.params.service;
    const serviceData = this.getServiceData(serviceName);

    return (
      <div>
        <div className={classes.HeroBanner}>
          <img src={serviceData.image} alt={serviceData.title}/>
        </div>
        <main>
          <div className={classes.ServicesBody}>
            <h2>{serviceData.title}</h2>
            <div className="spacer"/>
            {serviceData.body}
          </div>
        </main>
      </div>
    );
  }
}

export default Services;
