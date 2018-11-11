import {
  TESTIMONIALS_POPULATE_TESTIMONIALS
} from '../storeConstants';

const initialState = {
  testimonials: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TESTIMONIALS_POPULATE_TESTIMONIALS:
      return {
        ...state,
        testimonials: action.testimonials,
      };
    default:
      return state;
  }
};

export default reducer;
