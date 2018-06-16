import React from 'react';
import Typing from 'react-typing-animation';
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
        <Typing>
          <span>
            Driving Digital Marketing Intelligence & Innovation<br/>
            Forwarding Digital Marketing Intelligence
          </span>
        </Typing>
      </div>
    </div>
  </div>
);

export default heroBannerFullSize;
