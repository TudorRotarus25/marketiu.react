import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './FooterNavigation.css';

const footerNavigation = () => (
  <ul className={classes.FooterNavigation}>
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
    <li>
      <a
        href="https://s3.eu-west-2.amazonaws.com/marketiu-resources/documents/MarketiuPrivacyPolicy.pdf"
        target="_blank"
      >
        Privacy Policy
      </a>
    </li>
  </ul>
);

export default footerNavigation;
