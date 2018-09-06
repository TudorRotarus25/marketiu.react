import React from 'react';
import classes from './NavigationLinks.css';
import {Link} from 'react-router-dom';
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
      {props.isFooter ? (
        <Link
          to={{
            pathname: '/',
            search: 'target=blog'
          }}
          onClick={props.clickHandler}
        >
          Blog
        </Link>
      ) : (
        <div className={classes.DropDown}>
          <a className={classes.DropDownToggle}>
            Media
            <i className="fas fa-caret-down"/>
          </a>
          <ul className={classes.DropDownMenu}>
            <li>
              <a
                href="https://open.spotify.com/show/3AHKLMY3iDyYyaYl2zrLqL"
                target="_blank"
                rel="noopener noreferrer"
                onClick={props.clickHandler}
              >
                Podcast
              </a>
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
              <a
                href="https://www.youtube.com/channel/UCS35zbvz8Ji3JGDIKoyXWag"
                target="_blank"
                rel="noopener noreferrer"
                onClick={props.clickHandler}
              >
                Video
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@MarketiuLondon"
                target="_blank"
                rel="noopener noreferrer"
                onClick={props.clickHandler}
              >
                Medium
              </a>
            </li>
          </ul>
        </div>
      )
      }
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
