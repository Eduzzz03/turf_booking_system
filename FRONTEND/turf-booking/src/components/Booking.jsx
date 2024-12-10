// src/pages/Booking.jsx
import React from 'react';
import TurfCard from './TurfCard'; // Import the TurfCard component

const BookingPage = () => {
  const handleBookNow = () => {
    console.log('Booking turf...');
    // Implement your booking logic here, like navigating to a booking form
  };

  return (
    <div>

      <TurfCard 
        image="#"  // Replace with actual turf image URL
        name="Green Field Turf"
        onBookNow={handleBookNow}
      />
      {/* You can add more TurfCard components for other turfs */}
    </div>
  );
};

export default BookingPage;

