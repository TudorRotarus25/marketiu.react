import React from 'react';
import classes from './Testimonials.css';
import SimpleCarousel from '../SimpleCarousel/SimpleCarousel';

const testimonials = () => {
  return (
    <div className={classes.Testimonials}>
      <h2>Clients</h2>
      <SimpleCarousel>
        <div>
          A
        </div>
        <div>
          B
        </div>
        <div>
          C
        </div>
        <div>
          D
        </div>
      </SimpleCarousel>
    </div>
  )
};

export default testimonials;
