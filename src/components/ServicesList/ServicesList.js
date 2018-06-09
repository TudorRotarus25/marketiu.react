import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ServicesList.css';
import webDesignImage from '../../assets/images/services/WebDesign.jpg';

const servicesData = [
  {
    image: webDesignImage,
    link: 'web-design',
    title: 'Marketing Consultancy Services',
    description: 'Ready to take your Marketing Strategy Plan to the next level, or just looking to improve areas of ' +
    'your current roadmap? Our top industry experts are here to help you boost your success in the digital world!',
  },
  {
    image: webDesignImage,
    link: 'web-design',
    title: 'Marketing Consultancy Services',
    description: 'Ready to take your Marketing Strategy Plan to the next level, or just looking to improve areas of ' +
    'your current roadmap? Our top industry experts are here to help you boost your success in the digital world!',
  },
  {
    image: webDesignImage,
    link: 'web-design',
    title: 'Marketing Consultancy Services',
    description: 'Ready to take your Marketing Strategy Plan to the next level, or just looking to improve areas of ' +
    'your current roadmap? Our top industry experts are here to help you boost your success in the digital world!',
  },
  {
    image: webDesignImage,
    link: 'web-design',
    title: 'Marketing Consultancy Services',
    description: 'Ready to take your Marketing Strategy Plan to the next level, or just looking to improve areas of ' +
    'your current roadmap? Our top industry experts are here to help you boost your success in the digital world!',
  },
  {
    image: webDesignImage,
    link: 'web-design',
    title: 'Marketing Consultancy Services',
    description: 'Ready to take your Marketing Strategy Plan to the next level, or just looking to improve areas of ' +
    'your current roadmap? Our top industry experts are here to help you boost your success in the digital world!',
  },
  {
    image: webDesignImage,
    link: 'web-design',
    title: 'Marketing Consultancy Services',
    description: 'Ready to take your Marketing Strategy Plan to the next level, or just looking to improve areas of ' +
    'your current roadmap? Our top industry experts are here to help you boost your success in the digital world!',
  },
];

const servicesList = () => {
  const services = servicesData.map((service, index) => {
    return (
      <div
        key={index}
        className={classes.Service}
      >
        <Link to={'/services/' + service.link }>
          <div className={classes.Card}>
            <img
              src={service.image}
              alt={service.title}
            />
            <div className={classes.CardContent}>
              <h4 className={classes.CardTitle}>{service.title}</h4>
              <p className={classes.CardDescription}>{service.description}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  });

  return (
    <div className={classes.ServicesList}>
      <h2>Services</h2>
      <div className={classes.ServicesContainer}>
        {services}
      </div>
    </div>
  )
};

export default servicesList;
