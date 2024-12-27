/* import React from 'react';
import './TurfCard.css'; // Import custom CSS for styling the card

const TurfCard = ({ image, name, onBookNow }) => {
  return (
    <div className="turf-card">
      <img src={image} alt={name} className="turf-image" />
      <h3 className="turf-name">{name}</h3>
      <button className="book-now-button" onClick={onBookNow}>Book Now</button>
    </div>
  );
};

export default TurfCard; */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TurfCard.css';

const TurfCard = ({ turfName, turfImage }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/timeslots');  // Navigate to the time slot page
  };

  return (
    <div className="turf-card">
      <img src={turfImage} alt={turfName} className="turf-image" />
      <h3>{turfName}</h3>
      <button className="book-now-button" onClick={handleBookNow}>
        Book Now
      </button>
    </div>
  );
};

export default TurfCard;



