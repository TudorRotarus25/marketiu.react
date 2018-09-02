import React, { Component } from 'react';
import classes from './Testimonials.css';
import SimpleCarousel from '../SimpleCarousel/SimpleCarousel';
import axios from 'axios';
import ImagesUtil from '../../utils/ImagesUtil';

class Testimonials extends Component {
  state = {
    testimonials: [],
  };

  setSlidesHeight = () => {
    let maxHeight = 0;
    const slides = document.querySelectorAll('.slick-slide');

    slides.forEach((slide) => {
      maxHeight = Math.max(maxHeight, slide.querySelector('.testimonial-text').clientHeight);
    });

    slides.forEach((slide) => {
      slide.querySelector('.testimonial-slide').style.height = `${maxHeight + 210}px`;
    });
  };

  componentDidMount() {
    axios.get('testimonials/').then((response) => {
      const testimonials = response.data.map((testimonial) => ({
        ...testimonial,
        image: ImagesUtil.getImageBaseUrl() + testimonial.image,
      }));

      this.setState({
        ...this.state,
        testimonials,
      });

      this.setSlidesHeight();
      window.onresize = () => this.setSlidesHeight();
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
          <div className={`${classes.TestimonialContent} testimonial-slide`}>
            <div className={classes.ImageContainer}>
              <img src={testimonial.image} alt={testimonial.clientName}/>
            </div>
            <div className={classes.DescriptionContainer}>
              <div className={classes.ClientName}>
                <h3>{testimonial.clientName}</h3>
                <p>{testimonial.clientDescription}</p>
              </div>
              <div className={`${classes.ClientTestimonial} testimonial-text`}>
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
