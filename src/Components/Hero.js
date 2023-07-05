// import React from 'react';
import './hero.css';
import { React, useState, useEffect } from 'react';
import image1 from '../images/hero_images/image1.jpeg';
import image2 from '../images/hero_images/image2.jpg';
import image3 from '../images/hero_images/image3.png';
import image4 from '../images/hero_images/image4.png';
import image5 from '../images/hero_images/image5.png';


const Hero = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];
  const quotes = [
    "'Quote 1'",
    "Quote 2",
    "Quote 3",
    "Quote 4",
    "Quote 5",
    "Quote 6",
    "Quote 7",
    "Quote 8",
    "Quote 9",
    "Quote 10"
  ];

  const [quote, setQuote] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Automatically change the active image every 5 seconds
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleDragStart = (event) => {
    setDragStartX(event.clientX);
  };

  const handleDragEnd = (event) => {
    const dragEndX = event.clientX;
    const dragThreshold = 50;

    if (dragEndX - dragStartX > dragThreshold) {
      setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    } else if (dragStartX - dragEndX > dragThreshold) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <section className="hero">
      {images.map((image, index) => (
        <div
          className={`slide ${index === activeIndex ? 'active' : ''}`}
          key={index}
          style={{ backgroundImage: `url(${image})` }}
          draggable="false"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
        ></div>
      ))}
      <div className="dots">
        {images.map((_, index) => (
          <div
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            key={index}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
      <div className="overlay">
        <div className="quote">{quote}</div>
      </div>
    </section>
  );
};

export default Hero;