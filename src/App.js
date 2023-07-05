import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Homepage from './Components/Homepage';
import Main from './Components/Main';
import SocialMedia from './Components/Socialmedia';
import Footer from './Components/Footer';
import About from './About';
import Journey from './Components/Journey';
import Gallery from './Gallery';
import Press from './Press';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Hero />
        <Main />
        <Journey />
        <SocialMedia />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
