import React from 'react';
import developerSVG from '../Assets/bg.svg'; // Path to your SVG file
import './Home.css'; // Custom CSS for the homepage

const Home = () => {
  return (
    <div className="home-container">
        <div className="content">
            <h1>Hi There! 👋</h1>
            <h2>We are sssss</h2>
            <p>Developer | Designer | Creator</p>
        </div>
        <div className="image-container">
            <img src={developerSVG} alt="Developer illustration" className="developer-svg" />
        </div>
    </div>
  );
};

export default Home;
