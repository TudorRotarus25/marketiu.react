import { combineReducers } from 'redux';
import BlogReducer from './blog/BlogReducer';
import TestimonialsReducer from './testimonials/TestimonialsReducer';

export default combineReducers({
  blog: BlogReducer,
  testimonials: TestimonialsReducer,
});
