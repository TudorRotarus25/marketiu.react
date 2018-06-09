import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BlogArticle from '../../../containers/BlogArticle/BlogArticle';
import Blog from '../../../containers/Blog/Blog';
import Services from '../../../containers/Services/Services';
import Homepage from '../../../containers/Homepage/Homepage';

const routes = () => (
  <Switch>
    <Route path="/blog/:articleIdentifier" component={BlogArticle}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/services/:service" component={Services}/>
    <Route path="/" component={Homepage}/>
  </Switch>
);

export default routes;