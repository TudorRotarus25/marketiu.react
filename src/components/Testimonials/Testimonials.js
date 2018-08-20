import React, { Component } from 'react';
import classes from './Testimonials.css';
import SimpleCarousel from '../SimpleCarousel/SimpleCarousel';
import axios from 'axios';

class Testimonials extends Component {
  state = {
    testimonials: [],
  };

  componentDidMount() {
    axios.get('testimonials/').then((response) => {
      this.setState({testimonials: response.data})
    });
  }

  render() {
    const testimonialsContent = this.state.testimonials.map((testimonial) => {
      return (
        <div
          key={testimonial.id}
          data-index={testimonial.id}
          className={classes.Testimonial}
        >
          <div className={classes.TestimonialContent}>
            <div className={classes.ImageContainer}>
              <img src={testimonial.image} alt={testimonial.clientName}/>
            </div>
            <div className={classes.DescriptionContainer}>
              <div className={classes.ClientName}>
                <h3>{testimonial.clientName}</h3>
                <p>{testimonial.clientDescription}</p>
              </div>
              <div className={classes.ClientTestimonial}>
                {testimonial.testimonial}
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div
        ref={this.props.scrollRef}
        className={classes.Testimonials}
      >
        <h2>Clients</h2>
        <SimpleCarousel>
          {testimonialsContent}
        </SimpleCarousel>
      </div>
    );
  }
}

export default Testimonials;
