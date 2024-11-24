import React from 'react';
import developerSVG from '../Assets/bg.svg'; // Path to your SVG file
import './Home.css'; // Custom CSS for the homepage

const Home = () => {
  return (
    <div className="home-container">
      {/* Main Content Section */}
      <div className="content">
        <h1>Hi There! 👋</h1>
        <h2>We are <span className="highlight">Innovexia</span></h2>
        <h4>Innovating the future, one solution at a time</h4>
        <p>Developer | Designer | Creator</p>
      </div>

      {/* Image Section */}
      <div className="image-container">
        <img src={developerSVG} alt="Developer illustration" className="developer-svg" />
      </div>

      {/* Additional Section */}
      <div className="info-section">
        <h3>Why Choose Innovexia?</h3>
        <p>
          At Innovexia, we specialize in providing cutting-edge solutions to bring your ideas to life.
          Whether you need a <a href="https://en.wikipedia.org/wiki/Website" target="_blank" rel="noopener noreferrer">website</a>,
          <a href="https://en.wikipedia.org/wiki/Systems_design" target="_blank" rel="noopener noreferrer">system design</a>,
          or user-centric platforms, we’ve got you covered.
        </p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
