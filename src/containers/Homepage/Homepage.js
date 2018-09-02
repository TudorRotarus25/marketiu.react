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

  scrollToSection = (target) => {
    const scrollParameters = {
      offset: -50,
    };
    let topElement = null;

    switch (target) {
      case 'services':
        topElement = this.servicesRef.current;
        break;
      case 'clients':
        topElement = this.clientsRef.current;
        break;
      case 'about':
        topElement = this.aboutRef.current;
        break;
      case 'blog':
        topElement = this.blogRef.current;
        break;
      case 'contact':
        topElement = this.contactRef.current;
        break;
      default:
        return;
    }

    const top = topElement.offsetTop - topElement.scrollTop + topElement.clientTop;

    window.scroll({
      top: top ?  top + scrollParameters.offset : 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  componentDidMount() {
    setTimeout(() => {
      const searchParams = new URLSearchParams(this.props.location.search);
      this.scrollToSection(searchParams.get('target'));
    }, 500);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location) {
      const searchParams = new URLSearchParams(nextProps.location.search);
      this.scrollToSection(searchParams.get('target'));
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
