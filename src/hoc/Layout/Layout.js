import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Routes from './Routes/Routes';
import TopNavigation from '../../components/navigation/TopNavigation/TopNavigation';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <TopNavigation/>
        <Routes/>
      </Aux>
    );
  }
}

export default Layout;
