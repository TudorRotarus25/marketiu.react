import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Routes from './Routes/Routes';
import TopNavigation from '../../components/navigation/TopNavigation/TopNavigation';
import Footer from '../../components/ui/Footer/Footer';
import SubFooter from '../../components/ui/SubFooter/SubFooter';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <TopNavigation/>
        <Routes/>
        <Footer/>
        <SubFooter/>
      </Aux>
    );
  }
}

export default Layout;
