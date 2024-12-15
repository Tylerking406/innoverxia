import React, { useEffect, useState } from 'react';
import developerSVG from '../Assets/bg.svg'; // Path to your SVG file
import './Home.css'; // Custom CSS for the homepage

const Home = () => {


  const texts = [
    "Innovating the future, one solution at a time.  ",
    "Empowering creativity, one project at a time.  ",
    "Transforming industries, one idea at a time.  ",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingDuration = 4000; // Duration of typing animation (4s)
    const pauseDuration = 1000; // Pause after the full text is displayed (1s)

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, typingDuration + pauseDuration); // Add typing + pause durations

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [texts.length]);


  return (
    <div className="home-container">
      {/* Main Content Section */}
      <div className="content">
        <h1>
           Hi There! 
        </h1>
        <h2>
          We are <span className="highlight">Innovexia</span>
        </h2>
        <h4 key={currentIndex} className="textAnimate">
        {texts[currentIndex]}
      </h4>
        <p>Developer | Designer | Creator</p>
      </div>

      {/* Image Section */}
      <div className="image-container">
        <img src={developerSVG} alt="Developer illustration" className="developer-svg" />
      </div>

      {/* About Us Section */}
      <div className="about-section">
        <h3>About Us</h3>
        <p>
          Innovexia is a forward-thinking tech company dedicated to crafting solutions
          that empower businesses and individuals. We specialize in innovation, ensuring that
          every project we undertake not only meets but exceeds expectations.
        </p>
      </div>

      {/* Expertise Section */}
      <div className="expertise-section">
        <h3>Our Expertise</h3>
        <div className="expertise-cards">
          {/* Expertise Card 1 */}
          <div className="expertise-card">
            <div className="icon">
              <i className="fas fa-code"></i>
            </div>
            <h4>Web Development</h4>
            <p>
              From sleek and modern websites to responsive and accessible designs,
              we bring your online presence to life.
            </p>
          </div>

          {/* Expertise Card 2 */}
          <div className="expertise-card">
            <div className="icon">
              <i className="fas fa-network-wired"></i>
            </div>
            <h4>System Design</h4>
            <p>
              Designing scalable and efficient systems tailored to your business needs,
              ensuring smooth operations and growth.
            </p>
          </div>

          {/* Expertise Card 3 */}
          <div className="expertise-card">
            <div className="icon">
              <i className="fas fa-users"></i>
            </div>
            <h4>User-Centric Platforms</h4>
            <p>
              Building intuitive and engaging platforms that put your customers at the center
              of the experience.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h3>Ready to Transform Your Ideas?</h3>
        <p>
          Let Innovexia bring your vision to life with innovative solutions tailored to your goals.
        </p>
        {/* <button
          className="cta-button"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started <i className="fas fa-arrow-right"></i>
        </button> */}
      </div>
    </div>
  );
};

export default Home;
