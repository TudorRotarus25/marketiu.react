import React, { Component } from 'react';
import classes from './ContactUs.css';
import SocialMediaButtons from '../SocialMediaButtons/SocialMediaButtons';

class ContactUs extends Component {
  render() {
    return (
      <div className={classes.ContactUs}>
        <h2>Contact</h2>
        <div className={classes.ContactUsContent}>
          <p>We’re here to help. Let us know your questions, and be sure you’re in safe hands</p>
          <div className={classes.DirectContact}>
            <div>
              <a href="tel:+447845370910">
                <i className="fa fa-phone"/>
                +44 7845 370 910
              </a>
            </div>
            <div>
              <a href="mailto:hello@marketiu.com">
                <i className="fa fa-envelope"/>
                hello@marketiu.com
              </a>
            </div>
          </div>
          <SocialMediaButtons/>
        </div>
      </div>
    );
  }
}

export default ContactUs;
