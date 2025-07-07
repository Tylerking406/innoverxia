import React, { useEffect, useState } from 'react';
import developerSVG from '../Assets/bg.svg'; // Path to your SVG file
import './Footer.css'; // Custom CSS for the footer

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-bg">
        <h3 className="footer-title">
           Innoverxia 
        </h3>
    <div className="footer-container">
        
      <div className="footer-content">
        
        <h3>
           Menu 
        </h3>
        <ul className='footer-links'>
            <li>
                <a href='/Home'>About Us</a>
            </li>
            <li>
                <a href='/Services'>Services</a>
            </li>
            <li>
                <a href='/Contact'>Contact Us</a>
            </li>
            
        </ul>
      </div>

      <div className="footer-content">

        <h3>
           Address 
        </h3>
        <div className='footer-address'>
            <p>129 Main Road,</p>
            <p> Observatory, </p>
            <p>Cape Town</p>
        </div>
        
      </div>
    
    </div>
    <div className="footer-bottom">
        <p>&copy; 2025 Innoverxia. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
