import React from 'react';
import classes from './SocialMediaButtons.css';

const socialMediaButtons = () => (
  <ul className={classes.SocialMediaButtons}>
    <li>
      <a
        href="https://www.facebook.com/Marketiu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-facebook-official" aria-hidden="true"/>
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/marketiulondon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-twitter-square" aria-hidden="true"/>
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/marketiu_london"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-instagram" aria-hidden="true"/>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/marketiu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin-square" aria-hidden="true"/>
      </a>
    </li>
  </ul>
);

export default socialMediaButtons;
