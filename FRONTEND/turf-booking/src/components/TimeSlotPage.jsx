import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TimeSlotPage.css';

const TimeSlotPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [className, setClassName] = useState('');
  const navigate = useNavigate();

  const colleges = {
    "College of Engineering": [
      "Civil Engineering", "Computer Science Engineering", "Mechanical Engineering", "Mechatronics Engineering", "AI & Data Science Engineering", "CS (Cyber Security) Engineering"
    ],
    "College of Management Studies": ["MBA"],
    "College of Arts and Science": [
      "COMMERCE", "MANAGEMENT", "COMPUTER APPLICATION", "COSTUME & FASHION DESIGNING", "MULTIMEDIA", "ENGLISH", "TOURISM MANAGEMENT", "HOTEL MANAGEMENT", "FOOD TECHNOLOGY"
    ],
    "College of Health Science": ["B.PHARM", "D.PHARM", "PHARM.D", "M.PHARM"],
    "College of Technology": [
      "CIVIL ENGINEERING", "MECHANICAL ENGINEERING", "CHEMICAL ENGINEERING", "AUTOMOBILE ENGINEERING", "ELECTRICAL AND ELECTRONICS ENGINEERING", "APPLIED SCIENCE", "COMPUTER ENGINEERING"
    ]
  };

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleBooking = async () => {
    const userId = `user_${Math.random().toString(36).substr(2, 9)}`; // Generate random userId
  
    if (selectedDate && selectedTime && selectedCollege && selectedDepartment && className) {
      const bookingDetails = {
        userId,
        selectedDate,
        selectedTime,
        selectedCollege,
        selectedDepartment,
        className,
      };
  console.log(bookingDetails)
      try {
        const response = await fetch('http://localhost:5000/api/creating', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bookingDetails),
        });
  
        // Log the response status and response body to the console for debugging
        console.log('Response Status:', response.status);
        const responseData = await response.json();
        console.log('Response Data:', responseData);
  
        if (response.ok) {
          alert('Booking request sent successfully');
        } else {
          alert(`Failed to send booking request: ${responseData.message || 'Unknown error'}`);
        }
      } catch (error) {
        console.error('Error creating booking:', error);
        alert('Failed to send booking request due to an error.');
      }
    } else {
      alert('Please fill all the fields');
    }
  };
  

  return (
    <div className="time-slot-page">
      <h2>Book a Slot</h2>

      {/* Date Selection */}
      <label>Date:</label>
      <input 
        type="date" 
        value={selectedDate} 
        onChange={(e) => setSelectedDate(e.target.value)} 
        className="input-field"
      />

      {/* Time Slot Selection */}
      <label>Timing:</label>
      <select 
        value={selectedTime} 
        onChange={(e) => setSelectedTime(e.target.value)} 
        className="input-field"
      >
        <option value="">Select Timing</option>
        {timeSlots.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>

      {/* College Selection */}
      <label>College:</label>
      <select 
        value={selectedCollege} 
        onChange={(e) => {
          setSelectedCollege(e.target.value);
          setSelectedDepartment(''); // Reset department when college changes
        }} 
        className="input-field"
      >
        <option value="">Select College</option>
        {Object.keys(colleges).map((college, index) => (
          <option key={index} value={college}>{college}</option>
        ))}
      </select>

      {/* Department Selection */}
      <label>Department:</label>
      <select 
        value={selectedDepartment} 
        onChange={(e) => setSelectedDepartment(e.target.value)} 
        className="input-field"
        disabled={!selectedCollege}
      >
        <option value="">Select Department</option>
        {selectedCollege && colleges[selectedCollege].map((department, index) => (
          <option key={index} value={department}>{department}</option>
        ))}
      </select>

      {/* Class Input */}
      <label>Class:</label>
      <input 
        type="text" 
        value={className} 
        onChange={(e) => setClassName(e.target.value)} 
        className="input-field"
        placeholder="Enter Class"
      />

      {/* Book Button */}
      <button onClick={handleBooking} className="book-button">Book</button>
    </div>
  );
};

export default TimeSlotPage;

