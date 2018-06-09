import React from 'react';
import classes from './Logo.css';
import logoImage from '../../assets/logos/logo-white.png';

const logo = () => (
  <img
    className={classes.Logo}
    src={logoImage}
    alt="Marketiu Logo"
  />
);

export default logo;
