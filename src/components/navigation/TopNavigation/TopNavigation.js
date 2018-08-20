import React from 'react';
import { Link } from 'react-router-dom';
import classes from './TopNavigation.css';
import Logo from '../../Logo/Logo';

const topNavigation = () => (
  <div className={classes.TopNavigation}>
    <div className={classes.LogoContainer}>
      <Logo/>
    </div>
    <ul className={classes.NavigationMenu}>
      <li>
        <Link
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: '/',
            search: 'target=services'
          }}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: '/',
            search: 'target=about'
          }}
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: '/',
            search: 'target=clients'
          }}
        >
          Clients
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: '/',
            search: 'target=blog'
          }}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          to={{
            pathname: '/',
            search: 'target=contact'
          }}
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
);

export default topNavigation;
