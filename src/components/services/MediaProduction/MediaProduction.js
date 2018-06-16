import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import image1 from '../../../assets/images/servicesContent/Media_Production_Inline.png';
import image2 from '../../../assets/images/servicesContent/Photography_Inline.png';

const mediaProduction = () => (
  <Aux>
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
      </div>
      <div className="column">
        <img src={image1} alt=""/>
      </div>
    </div>
    <p>
      Our previous projects together include: Corporate Videos, Interviews, Commercial Brand Ads, Product and Training
      Videos, Music Videos, Studio Music Videos, Live Music Session Recordings, Event Videos, Live Concert Recordings
      and even Short Films!
    </p>
    <p>
      Curious to find out more? Give us a shout and let’s roll this out!
    </p>
    <h4>Graphic, Logo & HTML Design</h4>
    <p>
      The quality of your Marketing Materials is a direct representation of the expected quality of work for your
      clients.
    </p>
    <div className="row">
      <div className="column">
        <p>
          At Marketiu, we make sure you are delivered the best possible standard of Design Services on the market at the
          best price, with bespoke packages to fit both your needs and budget, so you can make an impression with every
          new contact! We know it’s challenging getting the best results without amazing, eye-catching designs, and
          that’s why we have decided to incorporate this as part of our services offering, offering full control over
          each aspect of the final work.
        </p>
      </div>
      <div className="column">
        <img src={image1} alt=""/>
      </div>
    </div>
    <p>
      From Logos to Brochures, Illustrations, Online Banners, Business cards, Roll-ups and specific Marketing Materials
      formats, don’t be shy and let us know all your crazy ideas - our team is crazy enough to turn them all into
      reality!
    </p>
    <h4>Photography Services</h4>
    <p>
      “A photograph says a thousand words” they say - and it certainly does when considering branding!
    </p>
    <div className="row">
      <div className="column">
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
