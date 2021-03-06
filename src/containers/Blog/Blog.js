import React, { Component } from 'react';
import Helmet from 'react-helmet';
import classes from './Blog.css';
import bannerImage from '../../assets/images/banners/blog-header.jpg';
import BlogList from '../../components/BlogList/BlogList';

class Blog extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Marketiu | Blog</title>
          <meta name="description" content="Marketiu Blog - see all articles"/>
        </Helmet>
        <div className={classes.HeroBanner}>
          <img src={bannerImage} alt="Blog"/>
        </div>
        <div className={classes.BlogContainer}>
          <h2 className={classes.BlogTitle}>
            Blog
          </h2>
          <div className={classes.Spacer}/>
          <div className={classes.BlogContent}>
            <BlogList/>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
