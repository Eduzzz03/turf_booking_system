import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h3>Contact Us</h3>
      <p>Email: <a href="mailto:contact@turfbooking.com">contact@turfbooking.com</a></p>
      <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
      <p>Address: 123 Turf St, City, Country</p>
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Turf Booking System. All rights reserved.</p>
    </footer>
  );
}

export default Footer;


