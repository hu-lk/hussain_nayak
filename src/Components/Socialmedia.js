import React from 'react';
import './socialmedia.css';

const SocialMedia = () => {
  return (
    <section className="social-media">
      <div className="social-media-container">
        <div className="social-media-item">
          <iframe
            src="https://www.twitter.com"
            title="Twitter"
            frameBorder="1"
            scrolling="yes"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="social-media-item">
          <iframe
            src="https://www.facebook.com"
            title="Facebook"
            frameBorder="1"
            scrolling="yes"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="social-media-item">
          <iframe
            src="https://www.youtube.com"
            title="YouTube"
            frameBorder="1"
            scrolling="yes"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="social-media-item">
          <iframe
            src="https://www.instagram.com"
            title="Instagram"
            frameBorder="1"
            scrolling="yes"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
