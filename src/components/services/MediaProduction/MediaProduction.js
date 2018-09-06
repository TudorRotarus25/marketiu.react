import React from 'react';
import Helmet from 'react-helmet';
import Aux from '../../../hoc/Aux/Aux';
import image1 from '../../../assets/images/servicesContent/Media_Production_Inline.png';
import image2 from '../../../assets/images/servicesContent/Photography_Inline.png';
import image3 from '../../../assets/images/servicesContent/Photography_2.jpg';
import {Link} from 'react-router-dom';

const mediaProduction = () => (
  <Aux>
    <Helmet>
      <title>Marketiu | Photo, Video, HTML & Graphic Media Production</title>
      <meta name="description" content="In need of a new Corporate Video, Product Photo Session, Digital Assets or Media Content? We know it’s challenging getting the best results without amazing, eye-catching branding, and that’s why we have partnered with the best Designers and Media Producers, offering you full control over each aspect of the final work. Get your free quote here."/>
    </Helmet>
    <h4>Professional Video Production & Edit</h4>
    <p>
      With the major increase in effectiveness and engagement Video Marketing has seen within all industries during the
      past two years, it is today a central Creative requirement for a leading successful brand.
    </p>
    <div className="row">
      <div className="column">
        <p>
          In order to provide our clients with the best-in-class
          Video Production & Editing services, we work
          closely with two industry-leading boutique
          companies in the UK specialising in delivering
          commercial and highly professional videos for our
          clients. What’s more, due to our very close
          relationship they have great turnaround times and
          are highly flexible, able to accommodate even the harshest or most innovative briefs and ideas!
        </p>
        <p>
          Our previous projects together include: Corporate Videos, Interviews, Commercial Brand Ads, Product and Training
          Videos, Music Videos, Studio Music Videos, Live Music Session Recordings, Event Videos, Live Concert Recordings
          and even Short Films!
        </p>
      </div>
      <div className="column">
        <img src={image1} alt=""/>
      </div>
    </div>
    <p>
      Curious to find out more? Give us a shout and let’s roll this out!
    </p>
    <div className="services-cta">
      <Link
        to={{
          pathname: '/',
          search: 'target=contact'
        }}
        className="button"
      >
        Get in Touch
      </Link>
    </div>
    <h4>Graphic, Logo & HTML Design</h4>
    <div className="row">
      <div className="column">
        <p>
          The quality of your Marketing Materials is a direct representation of the expected quality of work for your
          clients.
        </p>
        <p>
          At Marketiu, we make sure you are delivered the best possible standard of Design Services on the market at the
          best price, with bespoke packages to fit both your needs and budget, so you can make an impression with every
          new contact! We know it’s challenging getting the best results without amazing, eye-catching designs, and
          that’s why we have decided to incorporate this as part of our services offering, offering full control over
          each aspect of the final work.
        </p>
      </div>
      <div className="column">
        <img src={image3} alt=""/>
      </div>
    </div>
    <p>
      From Logos to Brochures, Illustrations, Online Banners, Business cards, Roll-ups and specific Marketing Materials
      formats, don’t be shy and let us know all your crazy ideas - our team is crazy enough to turn them all into
      reality!
    </p>
    <div className="services-cta">
      <Link
        to={{
          pathname: '/',
          search: 'target=contact'
        }}
        className="button"
      >
        Contact Us
      </Link>
    </div>
    <h4>Photography Services</h4>
    <div className="row">
      <div className="column">
        <p>
          “A photograph says a thousand words” they say - and it certainly does when considering branding!
        </p>
        <p>
          Our team of professional photographers can help you obtain the brand image you always aspired to - reach out
          and let us know more about you, your product and your desired outcome.
        </p>
        <p>
          Be it Business & Presentation Photography, Events, Arts & Product Presentation, Live Entertainment &
          Portfolio, we have a photographer for each!
        </p>
      </div>
      <div className="column">
        <img src={image2} alt=""/>
      </div>
    </div>
  </Aux>
);

export default mediaProduction;
