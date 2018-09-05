import React from 'react';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import classes from './FooterNavigation.css';

const footerNavigation = () => (
  <ul className={classes.FooterNavigation}>
    <NavigationLinks isFooter={true}/>
    <li>
      <a
        href="https://s3.eu-west-2.amazonaws.com/marketiu-resources/documents/MarketiuPrivacyPolicy.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
    </li>
  </ul>
);

export default footerNavigation;
