import React from 'react';
import Slick from 'react-slick';

const simpleCarousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slick {...settings}>
      {props.children}
    </Slick>
  )
};

export default simpleCarousel;
