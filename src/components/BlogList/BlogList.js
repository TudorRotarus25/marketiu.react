import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './BlogList.css';
import { populateArticles } from '../../store/blog/BlogActions';

class BlogList extends Component {
  componentDidMount() {
    this.props.populateArticles(this.props.limit)
  }

  render() {
    const articlesTemplate = this.props.articles.map((article, index) => {
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

const mapStateToProps = state => ({
  articles: state.blog.articles,
});

const mapDispatchToProps = dispatch => ({
  populateArticles: limit => dispatch(populateArticles(limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
