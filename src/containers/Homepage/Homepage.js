import React, { Component } from 'react';
import classes from './Homepage.css';
import heroImage from '../../assets/images/banners/Home1.jpg';
import HeroBannerFullSize from '../../components/HeroBannerFullSize/HeroBannerFullSize';
import ServicesList from '../../components/ServicesList/ServicesList';
import AboutUs from '../../components/AboutUs/AboutUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import ContactUs from '../../components/ContactUs/ContactUs';
import BlogSection from '../../components/BlogSection/BlogSection';

class Homepage extends Component {
  render() {
    return (
      <div>
        <HeroBannerFullSize image={heroImage}/>
        <main>
          <p className={classes.IntroText}>
            Best global brands can only lead, thrive and prosper by developing meaningful relationships with their customers through strong Branding and industry-leading Digital Marketing tools, supported by a unique, bespoke Strategy. We’re here to help you bring all these elements together in a perfectly tailored and optimised system, accelerate your success and Market-You in the most effective and powerful way!
          </p>
          <ServicesList/>
          <AboutUs/>
          <Testimonials/>
          <BlogSection/>
          <ContactUs/>
          <PartnersSection/>
        </main>
      </div>
    );
  }
}

export default Homepage;
