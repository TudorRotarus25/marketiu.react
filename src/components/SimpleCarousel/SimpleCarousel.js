import React, { Component } from 'react';
import Slick from 'react-slick';

class SimpleCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
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
