import React, {Component} from 'react';
import Typing from 'react-typing-animation';
import classes from './HeroBannerFullSize.css';
import squareLogo from '../../assets/logos/square-logo.png';

class HeroBannerFullSize extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.image !== nextProps.image;
  }

  render() {
    return (
      <div
        className={classes.HeroImage}
        style={{
          backgroundImage: `url(${this.props.image})`
        }}
      >
        <div className={classes.Backdrop}>
          <div/>
          <div className={classes.Logo}>
            <img src={squareLogo} alt="logo"/>
          </div>
          <div className={classes.Quote}>
            <Typing>
              <span>
                Driving Digital Marketing Intelligence & Innovation
              </span>
            </Typing>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroBannerFullSize;
