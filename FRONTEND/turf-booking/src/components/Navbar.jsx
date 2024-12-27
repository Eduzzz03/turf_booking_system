import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu'; // Ensure this file exists
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <h2 className="nav-title">NUTMEG TURF</h2>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
          <li><Link to="/Review" className="nav-link">Reviews</Link></li>
          <li><Link to="/about-us" className="nav-link">About Us</Link></li>
          <li><Link to="/login" className="nav-link">Booking</Link></li>
          <DropdownMenu/>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


