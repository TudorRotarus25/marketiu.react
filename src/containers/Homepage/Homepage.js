import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
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
  componentDidMount() {
    window.scrollTo(0, 0);

    const searchParams = new URLSearchParams(this.props.location.search);
    const target = searchParams.get('target');

    const scrollParameters = {
      offset: -50,
      align: 'top',
      duration: 500,
    };

    switch (target) {
      case 'services':
        scrollToComponent(this.refs.services, scrollParameters);
        break;
      case 'clients':
        scrollToComponent(this.refs.clients, scrollParameters);
        break;
      case 'about':
        scrollToComponent(this.refs.about, scrollParameters);
        break;
      case 'blog':
        scrollToComponent(this.refs.blog, scrollParameters);
        break;
      case 'contact':
        scrollToComponent(this.refs.contact, scrollParameters);
        break;
      default:
        window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <HeroBannerFullSize image={heroImage}/>
        <main>
          <p className={classes.IntroText}>
            Best global brands can only lead, thrive and prosper by developing meaningful relationships with their
            customers through strong Branding and industry-leading Digital Marketing tools, supported by a unique,
            bespoke Strategy. We’re here to help you bring all these elements together in a perfectly tailored and
            optimised system, accelerate your success and Market-You in the most effective and powerful way!
          </p>
          <ServicesList ref="services"/>
          <AboutUs ref="about"/>
          <Testimonials ref="clients"/>
          <BlogSection ref="blog"/>
          <ContactUs ref="contact"/>
          <PartnersSection/>
        </main>
      </div>
    );
  }
}

export default Homepage;
