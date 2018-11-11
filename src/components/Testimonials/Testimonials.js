import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Testimonials.css';
import SimpleCarousel from '../SimpleCarousel/SimpleCarousel';
import { populateTestimonials } from '../../store/testimonials/TestimonialsActions';

class Testimonials extends Component {
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
    this.props.populateTestimonials();
    window.onresize = () => this.setSlidesHeight();
  }

  componentDidUpdate() {
    this.setSlidesHeight();
  }

  render() {
    const testimonialsContent = this.props.testimonials.map(testimonial => {
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

const mapStateToProps = state => ({
  testimonials: state.testimonials.testimonials,
});

const mapDispatchToProps = dispatch => ({
  populateTestimonials: () => dispatch(populateTestimonials()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
