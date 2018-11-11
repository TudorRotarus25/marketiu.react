import axios from 'axios';
import ImagesUtil from '../../utils/ImagesUtil';
import {
  TESTIMONIALS_POPULATE_TESTIMONIALS,
} from '../storeConstants';

export const populateTestimonials = () => {
  return dispatch => {
    axios.get('testimonials/').then((response) => {
      const testimonials = response.data.map((testimonial) => ({
        ...testimonial,
        image: ImagesUtil.getImageBaseUrl() + testimonial.image,
      }));

      dispatch({
        type: TESTIMONIALS_POPULATE_TESTIMONIALS,
        testimonials,
      });
    });
  };
};
