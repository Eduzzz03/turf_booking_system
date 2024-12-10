import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Separate CSS for dropdown (optional)

function DropdownMenu() {
  return (
    <div className="dropdown-menu">
      <button className="dropdown-toggle">More</button>
      <div className="dropdown-content">
        <Link to="/admin">Admin</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
}

export default DropdownMenu;

