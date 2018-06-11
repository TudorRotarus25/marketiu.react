import React from 'react';
import { Link } from 'react-router-dom'
import classes from './Logo.css';
import logoImage from '../../assets/logos/logo-white.png';

const logo = () => (
  <Link to="/">
    <img
      className={classes.Logo}
      src={logoImage}
      alt="Marketiu Logo"
    />
  </Link>
);

export default logo;
