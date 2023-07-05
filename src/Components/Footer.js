import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Footer = () => {
  return (
    <footer>
      <div className="quick-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/journey">Journey</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/press">Press</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="social-media-logos">
        {/* Display social media logos */}
      </div>
      <div className="copyright">
        &copy; 2023 Your Website Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
