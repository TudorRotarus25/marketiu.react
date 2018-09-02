import React, { Component } from 'react';
import Slick from 'react-slick';

class SimpleCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: true,
      pauseOnHover: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1.5,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <Slick
        {...settings}
      >
        {this.props.children}
      </Slick>
    )
  }
}

export default SimpleCarousel;
