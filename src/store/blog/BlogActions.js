import axios from 'axios';
import {
  BLOG_POPULATE_ARTICLES,
  BLOG_GET_ARTICLE_CONTENT,
} from '../storeConstants';
import ImagesUtil from '../../utils/ImagesUtil';

export const populateArticles = limit => {
  return dispatch => {
    const path = `blog/${limit ? `?limit=${limit}` : ''}`;

    axios.get(path)
      .then((response) => {
        return response.data.map((article) => ({
          ...article,
          image: ImagesUtil.getImageBaseUrl() + article.image,
        }));
      })
      .then(articles => {
        dispatch({
          type: BLOG_POPULATE_ARTICLES,
          articles,
        })
      });
  }
};

export const getArticle = articleIdentifier => {
  return dispatch => {
    axios.get(`blog/${articleIdentifier}`)
      .then(response => {
        return {
          ...response.data,
          image: ImagesUtil.getImageBaseUrl() + response.data.image,
        };
      })
      .then(articleContent => {
        dispatch({
          type: BLOG_GET_ARTICLE_CONTENT,
          articleContent,
        });
      })
  };
};

