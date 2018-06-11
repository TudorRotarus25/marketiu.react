import React from 'react';
import classes from './SubscribeForm.css';

const subscribeForm = () => (
  <form
    className={classes.SubscribeForm}
    id="subscribe-form"
    name="ccoptin"
    action="http://euromessage-a.ebultenim.com/Subscribe/subscribe1.asp"
    target="_blank"
    method="get"
  >
    <label htmlFor="subscribe-email">Subscribe to our emails</label>
    <input type="text" name="EMAIL" placeholder="Email Address"/>
    <input type="hidden" name="ID" value="07554BFCC3F44A718FA2FD3C0394594E"/>
    <input type="submit" className="button button-reverse" name="go" value="Subscribe"/>
  </form>
);

export default subscribeForm;
