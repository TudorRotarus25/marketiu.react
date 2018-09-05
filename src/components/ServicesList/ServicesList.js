import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './ServicesList.css';
import digitalPpcImage from '../../assets/images/services/digital-ppc.jpg';
import emailMarketingImage from '../../assets/images/services/email-marketing.png';
import marketingStrategyImage from '../../assets/images/services/marketing-strategy.png';
import photoVideoImage from '../../assets/images/services/photo-video-graphic.png';
import socialMediaImage from '../../assets/images/services/social-media.png';
import webMobileImage from '../../assets/images/services/web-mobile-app.png';

const servicesData = [
  {
    image: marketingStrategyImage,
    link: 'marketing-consultancy',
    title: 'Marketing Strategy & Consultancy',
    description: 'Ready to take your Marketing Strategy Plan to the next level, or just looking to improve areas of your current roadmap? Our top industry experts are here to help you boost your success in the digital world!'
  },
  {
    image: socialMediaImage,
    link: 'social-media',
    title: 'Social Media & Influencer Marketing',
    description: 'It’s time to turn your “followers” into “fans”, and skyrocket your Social engagement! Read more here about how we can help you use these channels to increase your revenue, conversions and brand awareness through Organic and Paid Advertising.',
  },
  {
    image: digitalPpcImage,
    link: 'digital-ppc-management',
    title: 'Digital, Spotify & PPC Campaign Management & Automation',
    description: 'From Web Banners, Affiliate Marketing, SEO, or Adwords campaigns, our specialist team is ready to help you implement and manage all the required campaigns, while you take time off and enjoy the results.',
  },
  {
    image: webMobileImage,
    link: 'web-design',
    title: 'Web & Mobile App Design & Development',
    description: 'Your website is one of the most important touch points in a customer journey, and maybe the most critical in converting new clients while telling your brand “Story”. The same goes for Mobile Apps, which are scaling as modern customer behaviour moves away from Desktop more and more, mainly in the Western world. Read more about how our team can help you take advantage of the latest development technologies here.',
  },
  {
    image: photoVideoImage,
    link: 'media-production',
    title: 'Photo, Video, HTML & Graphic Media Production',
    description: 'The quality of your Marketing Materials is a direct representation of the expected quality of work for your clients. Our studio of passionate creators and media artists are here to support your branding from an all-round perspective producing state-of-the-art results.',
  },
  {
    image: emailMarketingImage,
    link: 'email-marketing-automation',
    title: 'Email & Marketing Automation',
    description: 'The future of Digital Marketing lies in the ability of fully understanding your individual customers and designing bespoke messages delivered through the right channel, at the right time, enhancing the dialogue and relationship with every interaction. See the most effective modern ways of driving sales, as well as understanding customer behaviour and increase lifetime value here.',
  },
];

class ServicesList extends Component {
  render() {
    const services = servicesData.map((service, index) => {
      return (
        <div
          key={index}
          className={classes.Service}
        >
          <Link
            to={'/services/' + service.link}
            className={classes.ServiceLink}
          >
            <div className={classes.Card}>
              <img
                src={service.image}
                alt={service.title}
              />
              <div className={classes.CardContent}>
                <div>
                  <h5 className={classes.CardTitle}>{service.title}</h5>
                  <p className={classes.CardDescription}>
                    {service.description}
                  </p>
                </div>
                <div>
                  <span className={classes.Cta}>Read More</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )
    });

    return (
      <div
        ref={this.props.scrollRef}
        className={classes.ServicesList}
      >
        <h2>Services</h2>
        <div className={classes.ServicesContainer}>
          {services}
        </div>
      </div>
    );
  }
}

export default ServicesList;
