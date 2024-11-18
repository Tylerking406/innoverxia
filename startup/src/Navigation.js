import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; // Import the CSS for styling

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
            <Link to="/" className="nav-item">
            Home
            </Link>
            <Link to="/contact" className="nav-item">
            Contact
            </Link>
            <Link to="/services" className="nav-item">
            Services
            </Link>
      </div>
    </nav>
  );
};

export default Navigation;
