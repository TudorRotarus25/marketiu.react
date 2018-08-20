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
  constructor(props) {
    super(props);

    this.servicesRef = React.createRef();
    this.clientsRef = React.createRef();
    this.aboutRef = React.createRef();
    this.blogRef = React.createRef();
    this.contactRef = React.createRef();
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const target = searchParams.get('target');

    const scrollParameters = {
      offset: -50,
    };

    switch (target) {
      case 'services':
        window.scroll({
          top: this.servicesRef.current.offsetTop + scrollParameters.offset,
          left: 0,
          behavior: 'smooth'
        });
        break;
      case 'clients':
        window.scroll({
          top: this.clientsRef.current.offsetTop + scrollParameters.offset,
          left: 0,
          behavior: 'smooth'
        });
        break;
      case 'about':
        window.scroll({
          top: this.aboutRef.current.offsetTop + scrollParameters.offset,
          left: 0,
          behavior: 'smooth'
        });
        break;
      case 'blog':
        window.scroll({
          top: this.blogRef.current.offsetTop + scrollParameters.offset,
          left: 0,
          behavior: 'smooth'
        });
        break;
      case 'contact':
        console.log(this.contactRef.current.offsetTop + 200);
        window.scroll({
          top: this.contactRef.current.offsetTop + scrollParameters.offset + 200,
          left: 0,
          behavior: 'smooth'
        });
        break;
      default:
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
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
          <ServicesList scrollRef={this.servicesRef}/>
          <AboutUs scrollRef={this.aboutRef}/>
          <Testimonials scrollRef={this.clientsRef}/>
          <BlogSection scrollRef={this.blogRef}/>
          <ContactUs scrollRef={this.contactRef}/>
          <PartnersSection/>
        </main>
      </div>
    );
  }
}

export default Homepage;
