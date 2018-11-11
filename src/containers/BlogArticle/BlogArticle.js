import React, {Component} from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {Parser} from 'html-to-react';
import {Link} from 'react-router-dom';
import classes from './BlogArticle.css';
import {
  getArticle,
} from '../../store/blog/BlogActions';

class BlogArticle extends Component {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.scrollToTop();

    const articleIdentifier = this.props.match && this.props.match.params
      ? this.props.match.params.articleIdentifier : null;

    this.props.getArticleContent(articleIdentifier);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{'Marketiu | ' + this.props.article.title}</title>
          <meta name="description" content={this.props.article.description}/>
          <meta name="og:image" content={this.props.article.image}/>
        </Helmet>
        <div className={classes.HeroBanner}>
          <img src={this.props.article.image} alt={this.props.article.identifier}/>
        </div>
        <div className={classes.ArticleContainer}>
          <div className={classes.ArticleTitle}>
            <h1>{this.props.article.title}</h1>
            <div className={classes.Spacer}/>
          </div>
          <div className={classes.ArticleBody}>
            {new Parser().parse(this.props.article.content)}
          </div>
          <nav className={classes.ArticleFooterNavigation}>
            <div className={classes.Spacer}/>
            <Link
              to="/blog"
              className="button"
            >
              See All Articles
            </Link>
            <Link
              to={{
                pathname: '/',
                search: 'target=services'
              }}
              className="button"
            >
              See Our Services
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: state.blog.articleContent,
});

const mapDispatchToProps = dispatch => ({
  getArticleContent: (identifier) => dispatch(getArticle(identifier)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogArticle);
