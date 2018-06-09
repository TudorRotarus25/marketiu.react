import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './TopNavigation.css';
import Logo from '../../Logo/Logo';

const topNavigation = () => (
  <div className={classes.TopNavigation}>
    <div className={classes.LogoContainer}>
      <Logo/>
    </div>
    <ul className={classes.NavigationMenu}>
      <li>
        <NavLink
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
        >
          Clients
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </div>
);

export default topNavigation;
