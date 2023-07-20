import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="address">
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="copywrite">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
