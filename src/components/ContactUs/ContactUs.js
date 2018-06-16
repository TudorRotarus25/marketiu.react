import React from 'react';
import classes from './ContactUs.css';

const contactUs = () => (
  <div className={classes.ContactUs}>
    <h2>Contact</h2>
    <div className={classes.ContactUsContent}>
      <div className="contact-form">
        <p>We’re here to help. Let us know your questions, and be sure you’re in safe hands</p>
        <form id="contact-form">
          <div>
            <label htmlFor="contact-name">Name</label>
            <input type="text" placeholder="Name" id="contact-name"/>
          </div>
          <div>
            <label htmlFor="contact-email">Email</label>
            <input type="text" placeholder="Email" id="contact-email"/>
          </div>
          <div>
            <label htmlFor="contact-message">Message</label>
            <textarea placeholder="Message" id="contact-message" cols="10"/>
          </div>
          <button id="contact-button" className="button">Send Message</button>
        </form>
      </div>
    </div>
  </div>
);

export default contactUs;
