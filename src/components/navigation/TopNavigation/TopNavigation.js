import React, { Component } from 'react';
import classes from './TopNavigation.css';
import Logo from '../../Logo/Logo';
import NavigationLinks from '../NavigationLinks/NavigationLinks';

class TopNavigation extends Component {
  state = {
    isMobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState({
      ...this.state,
      isMobileMenuOpen: !this.state.isMobileMenuOpen,
    });
  };

  render() {
    return (
      <div className={classes.TopNavigation}>
        <div className={classes.LogoContainer}>
          <Logo/>
        </div>
        <ul className={classes.NavigationMenu}>
          <NavigationLinks/>
        </ul>
        {this.state.isMobileMenuOpen ? <div className={classes.Backdrop} onClick={this.toggleMobileMenu}/> : ''}
        <div className={`${classes.HamburgerMenu} ${this.state.isMobileMenuOpen ? classes.open : ''}`}>
          <i className="fa fa-bars" onClick={this.toggleMobileMenu}/>
          <div className={classes.NavigationMobileMenu}>
            <i className="fa fa-times" onClick={this.toggleMobileMenu}/>
            <ul>
              <NavigationLinks clickHandler={this.toggleMobileMenu}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNavigation;
