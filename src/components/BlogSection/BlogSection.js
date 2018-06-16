import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BlogSection.css';
import BlogList from '../BlogList/BlogList';

const blogSection = () => (
  <div className={classes.BlogSection}>
    <h2>Blog</h2>
    <div className={classes.BlogSectionContent}>
      <BlogList/>
      <Link
        to="/blog"
        className="button"
      >
        See All Articles
      </Link>
    </div>
  </div>
);

export default blogSection;
