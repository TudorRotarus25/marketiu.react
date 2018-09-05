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
        <i className="fab fa-facebook-square"/>
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/marketiulondon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter-square"/>
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/marketiu_london"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"/>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/marketiu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"/>
      </a>
    </li>
    <li>
      <a
        href="https://open.spotify.com/show/3AHKLMY3iDyYyaYl2zrLqL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-spotify"/>
      </a>
    </li>
    <li>
      <a
        href="https://medium.com/@MarketiuLondon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-medium"/>
      </a>
    </li>
  </ul>
);

export default socialMediaButtons;
