import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './BlogSection.css';
import BlogList from '../BlogList/BlogList';

class BlogSection extends Component {
  render() {
    return (
      <div
        ref={this.props.scrollRef}
        className={classes.BlogSection}
      >
        <h2>Blog</h2>
        <div className={classes.BlogSectionContent}>
          <BlogList limit={3}/>
          <Link
            to="/blog"
            className={classes.AllArticlesButton + ' button'}
          >
            See All Articles
          </Link>
        </div>
      </div>
    );
  }
}

export default BlogSection;
