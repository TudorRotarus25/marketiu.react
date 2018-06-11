import React, { Component } from 'react';
import heroImage from '../../assets/images/banners/Home1.jpg';
import HeroBannerFullSize from '../../components/HeroBannerFullSize/HeroBannerFullSize';
import ServicesList from '../../components/ServicesList/ServicesList';
import AboutUs from '../../components/AboutUs/AboutUs';
import Testimonials from '../../components/Testimonials/Testimonials';

class Homepage extends Component {
  render() {
    return (
      <div>
        <HeroBannerFullSize image={heroImage}/>
        <main>
          <ServicesList/>
          <AboutUs/>
          <Testimonials/>
        </main>
      </div>
    );
  }
}

export default Homepage;
