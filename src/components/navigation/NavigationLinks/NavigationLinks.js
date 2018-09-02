import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux/Aux';

const navigationLinks = (props) => (
  <Aux>
    <li>
      <Link
        to="/"
        onClick={props.clickHandler}
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to={{
          pathname: '/',
          search: 'target=services'
        }}
        onClick={props.clickHandler}
      >
        Services
      </Link>
    </li>
    <li>
      <Link
        to={{
          pathname: '/',
          search: 'target=about'
        }}
        onClick={props.clickHandler}
      >
        About Us
      </Link>
    </li>
    <li>
      <Link
        to={{
          pathname: '/',
          search: 'target=clients'
        }}
        onClick={props.clickHandler}
      >
        Clients
      </Link>
    </li>
    <li>
      <Link
        to={{
          pathname: '/',
          search: 'target=blog'
        }}
        onClick={props.clickHandler}
      >
        Blog
      </Link>
    </li>
    <li>
      <Link
        to={{
          pathname: '/',
          search: 'target=contact'
        }}
        onClick={props.clickHandler}
      >
        Contact
      </Link>
    </li>
  </Aux>
);

export default navigationLinks;
