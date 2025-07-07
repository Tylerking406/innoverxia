import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'; // Import the CSS for styling

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink exact to="/" className="nav-item" activeClassName="active">
          <i className="fas fa-home"></i> Home
        </NavLink>
        <NavLink to="/contact" className="nav-item" activeClassName="active">
          <i className="fas fa-envelope"></i> Contact
        </NavLink>
        <NavLink to="/services" className="nav-item" activeClassName="active">
          <i className="fas fa-concierge-bell"></i> Services
        </NavLink>
      </div>
    </nav>
  );
};



export default Navigation;
