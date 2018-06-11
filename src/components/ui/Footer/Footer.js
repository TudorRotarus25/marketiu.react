import React from 'react';
import classes from './Footer.css';
import Logo from '../../Logo/Logo';
import SubscribeForm from '../../SubscribeForm/SubscribeForm';
import FooterNavigation from '../../navigation/FooterNavigation/FooterNavigation';
import SocialMediaButtons from '../../SocialMediaButtons/SocialMediaButtons';

const footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Logo}>
        <Logo/>
      </div>
      <SubscribeForm/>
      <FooterNavigation/>
      <SocialMediaButtons/>
    </footer>
  );
};

export default footer;
