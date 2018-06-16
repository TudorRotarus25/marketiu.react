import React from 'react';
import classes from './HeroBannerFullSize.css';
import squareLogo from '../../assets/logos/square-logo.png';

const heroBannerFullSize = (props) => (
  <div
    className={classes.HeroImage}
    style={{
      backgroundImage: `url(${props.image})`
    }}
  >
    <div className={classes.Backdrop}>
      <div/>
      <div className={classes.Logo}>
        <img src={squareLogo} alt="logo"/>
      </div>
      <div className={classes.Quote}>
        <p>Driving Digital Marketing Intelligence & Innovation</p>
        <p>Forwarding Digital Marketing Intelligence</p>
      </div>
    </div>
  </div>
);

export default heroBannerFullSize;
