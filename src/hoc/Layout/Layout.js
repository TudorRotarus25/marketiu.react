import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Aux from '../Aux/Aux';
import Routes from './Routes/Routes';
import TopNavigation from '../../components/navigation/TopNavigation/TopNavigation';
import Footer from '../../components/ui/Footer/Footer';
import SubFooter from '../../components/ui/SubFooter/SubFooter';
import ogImage from '../../assets/logos/square-logo.png';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Helmet>
          <meta name="og:image" content={ogImage}/>
        </Helmet>
        <TopNavigation/>
        <Routes/>
        <Footer/>
        <SubFooter/>
      </Aux>
    );
  }
}

export default Layout;
