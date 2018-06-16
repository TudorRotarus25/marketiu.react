import React, { Component } from 'react';
import heroImage from '../../assets/images/banners/Home1.jpg';
import HeroBannerFullSize from '../../components/HeroBannerFullSize/HeroBannerFullSize';
import ServicesList from '../../components/ServicesList/ServicesList';
import AboutUs from '../../components/AboutUs/AboutUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactUs from '../../components/ContactUs/ContactUs';
import BlogSection from '../../components/BlogSection/BlogSection';

class Homepage extends Component {
  render() {
    return (
      <div>
        <HeroBannerFullSize image={heroImage}/>
        <main>
          <ServicesList/>
          <AboutUs/>
          <Testimonials/>
          <BlogSection/>
          <ContactUs/>
        </main>
      </div>
    );
  }
}

export default Homepage;
