import React from 'react';
import classes from './HeroBannerFullSize.css';

const heroBannerFullSize = (props) => (
  <div
    className={classes.HeroImage}
    style={{
      backgroundImage: `url(${props.image})`
    }}
  >
    <div className={classes.Backdrop}/>
  </div>
);

export default heroBannerFullSize;
