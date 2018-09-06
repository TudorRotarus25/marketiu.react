import React, {Component} from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import classes from './BlogArticle.css';
import {Parser} from 'html-to-react';
import ImagesUtil from '../../utils/ImagesUtil';
import {Link} from 'react-router-dom';

class BlogArticle extends Component {
  state = {
    article: {},
  };

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    this.scrollToTop();

    const articleIdentifier = this.props.match && this.props.match.params
      ? this.props.match.params.articleIdentifier : null;

    axios.get(`blog/${articleIdentifier}`).then((response) => {
      const article = {
        ...response.data,
        image: ImagesUtil.getImageBaseUrl() + response.data.image,
      };

      this.setState({
        ...this.state,
        article,
      })
    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{'Marketiu | ' + this.state.article.title}</title>
          <meta name="description" content={this.state.article.description}/>
          <meta name="og:image" content={this.state.article.image}/>
        </Helmet>
        <div className={classes.HeroBanner}>
          <img src={this.state.article.image} alt={this.state.article.identifier}/>
        </div>
        <div className={classes.ArticleContainer}>
          <div className={classes.ArticleTitle}>
            <h1>{this.state.article.title}</h1>
            <div className={classes.Spacer}/>
          </div>
          <div className={classes.ArticleBody}>
            {new Parser().parse(this.state.article.content)}
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

export default BlogArticle;
