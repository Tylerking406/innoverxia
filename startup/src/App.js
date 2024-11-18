import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Contact from './Tabs/Contact';
import Home from './Tabs/Home';
import Services from './Tabs/Services';
import './dark.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
