import {
  BLOG_GET_ARTICLE_CONTENT,
  BLOG_POPULATE_ARTICLES,
} from '../storeConstants';

const initialState = {
  articles: [],
  articleContent: {},
};

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOG_POPULATE_ARTICLES:
      return {
        ...state,
        articles: action.articles,
      };
    case BLOG_GET_ARTICLE_CONTENT:
      return {
        ...state,
        articleContent: action.articleContent,
      };
    default:
      return state;
  }
};

export default BlogReducer;
