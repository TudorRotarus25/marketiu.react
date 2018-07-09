import React from 'react';
import classes from './PartnersSection.css';
import cimLogo from '../../assets/images/partners/CIM-logo-2.jpg';
import googleLogo from '../../assets/images/partners/Google_Partners_logo_blogpage.jpg';
import kartraLogo from '../../assets/images/partners/kartra.png';
import fbLogo from '../../assets/images/partners/Official-Facebook-Logo.png';
import semrushLogo from '../../assets/images/partners/semrush.png';
import spotifyLogo from '../../assets/images/partners/spotify-horizontal-logo.png';
import tailwindLogo from '../../assets/images/partners/tailwind-888.png';
import youtubeLogo from '../../assets/images/partners/youtube-partner-program.png';

const partnersSection = () => (
  <div className={classes.PartnersSection}>
    <h2>Partners</h2>
    <div className={classes.PartnersSectionContent}>
      <div className={classes.PartnersList}>
        <div className={classes.Partner}>
          <a
            href=" http://www.semrush.com/sem/?ref=2304967612&refer_source=Marketiuweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={semrushLogo} alt="Semrush"/>
          </a>
        </div>
        <div className={classes.Partner}>
          <a
            href="https://www.shareasale.com/r.cfm?u=1806647&m=50947&b=768274"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tailwindLogo} alt="Tailwind"/>
          </a>
        </div>
        <div className={classes.Partner}>
          <a
            href="https://marketiu.krtra.com/t/lBsENiOrGSYf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={kartraLogo} alt="Kartra"/>
          </a>
        </div>
        <div className={classes.Partner}>
          <img src={cimLogo} alt="CIM"/>
        </div>
        <div className={classes.Partner}>
          <img src={youtubeLogo} alt="Youtube"/>
        </div>
        <div className={classes.Partner}>
          <img src={fbLogo} alt="Facebook"/>
        </div>
        <div className={classes.Partner}>
          <img src={googleLogo} alt="Google"/>
        </div>
        <div className={classes.Partner}>
          <img src={spotifyLogo} alt="Spotify"/>
        </div>
      </div>
    </div>
  </div>
);

export default partnersSection;
