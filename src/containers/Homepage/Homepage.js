import React, { Component } from 'react';
import heroImage from '../../assets/images/banners/DigitalMarketing_cover1Vignette_format.jpg';
import HeroBannerFullSize from '../../components/HeroBannerFullSize/HeroBannerFullSize';
import ServicesList from '../../components/ServicesList/ServicesList';

class Homepage extends Component {
  render() {
    return (
      <div>
        <HeroBannerFullSize image={heroImage}/>
        <main>
          <ServicesList/>
        </main>
      </div>
    );
  }
}

export default Homepage;
