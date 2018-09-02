import React, { Component } from 'react';
import axios from 'axios';
import classes from './BlogArticle.css';
import { Parser } from 'html-to-react';
import ImagesUtil from '../../utils/ImagesUtil';
import SocialMediaButtons from '../../components/SocialMediaButtons/SocialMediaButtons';
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
        <div className={classes.HeroBanner}>
          <img src={this.state.article.image} alt={this.state.article.identifier}/>
        </div>
        <div className={classes.ArticleContainer}>
          <div className={classes.ArticleTitle}>
            <h2>{this.state.article.title}</h2>
            <div className={classes.Spacer}/>
          </div>
          <div className={classes.ArticleBody}>
            {new Parser().parse(this.state.article.content)}
          </div>
          <div className={classes.SocialMedia}>
            <div className={classes.Spacer}/>
            <h3>Let's get social!</h3>
            <SocialMediaButtons/>
            <Link
              to="/blog"
              className={classes.AllArticlesButton + ' button'}
            >
              See All Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogArticle;
