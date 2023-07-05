import React, { useState } from 'react';
import './main.css';
import main_image from '../images/title.png';

const Main = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="main">
      <div className="main-content">
        <div className="image-container">
          <img src={main_image} alt="Main Image" className='image' />
        </div>
        <div className="text-container">
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {showMore && (
            <p>
              More text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          )}
          <button className="read-more" onClick={handleShowMore}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
