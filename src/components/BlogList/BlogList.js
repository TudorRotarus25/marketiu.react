import React, { Component } from 'react';
import classes from './BlogList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BlogList extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    axios.get('blog/?limit=3').then((response) => {
      this.setState({
        articles: response.data,
      });
    })
  }

  render() {
    const articlesTemplate = this.state.articles.map((article, index) => {
      return (
        <Link
          to={`/blog/${article.identifier}`}
          key={index}
        >
          <div
            className={classes.Article}
          >
            <div className={classes.ArticleImage}>
              <img src={article.image} alt={article.title}/>
            </div>
            <div className={classes.ArticleInfo}>
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <button>Read more</button>
            </div>
          </div>
        </Link>
      );
    });

    return (
      <div className={classes.BlogList}>
        {articlesTemplate}
      </div>
    );
  }
}

export default BlogList;
