import React, { Component } from 'react';
import classes from './AboutUs.css';

const aboutUsData = [
  'Best global brands can only lead, thrive and prosper by developing meaningful ' +
  'relationships with their customers through industry-leading Digital Marketing tools ' +
  'supported by unique, tailored and smart Strategy. We’re here to help you put all these ' +
  'elements together in a perfectly tailored and optimised system, accelerate your success ' +
  'and Market-You in the most effective and powerful way!',

  'Born at the heart of London from an insanely passionate and lively team of Top-class ' +
  'Marketers and Strategists, we are on a mission to help Brands get famous by tapping into ' +
  'the power of Intelligent Digital Marketing Communications. Having worked with a wide ' +
  'range of businesses in Entertainment, Luxury Cosmetics & Fashion, Lifestyle and ' +
  'Technology worldwide, we have always put our heart and soul into combining Creativity ' +
  'and Intelligence, delivering outstanding results. We’re constantly aligning ourselves to our ' +
  'individual clients’ goals and priorities, becoming essentially an effective extension of their ' +
  'company.',

  'Flexible, autonomous and accountable, we spread our wings globally, supporting our ' +
  'clients on their way to “fame” by offering the full range of services to enable and accelerate ' +
  'a powerful growth: Marketing & Branding Strategy Consulting, Omnichannel Marketing & ' +
  'Automation, Social Media Marketing & Management as well as Media Production (Photo, ' +
  'Video and Web)',

  'Whether it is only support for building a powerful Marketing Strategy, or full campaign ' +
  'management for one or more channels (Social, Digital, Email, Web or Push) we are ' +
  'excited to jump in and start together a rewarding and impactful journey for your brand.',
];

class AboutUs extends Component {
  render() {
    const aboutUsParagraphs = aboutUsData.map((text, index) => (
      <p key={index}>
        {text}
      </p>
    ));

    return (
      <div className={classes.AboutUs}>
        <h2>About us</h2>
        <div className={classes.AboutUsContent}>
          {aboutUsParagraphs}
        </div>
      </div>
    );
  }
}

export default AboutUs;
