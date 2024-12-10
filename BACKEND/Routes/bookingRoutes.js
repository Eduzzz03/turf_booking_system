// routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/creating', async (req, res) => {
  const { userId, selectedDate, selectedTime, selectedCollege, selectedDepartment, className } = req.body;

  // Log the incoming request body
  console.log('Request Body:', req.body);

  // Validate required fields
  if (!userId || !selectedDate || !selectedTime || !selectedCollege || !selectedDepartment || !className) {
    return res.status(400).json({ success: false, message: 'Please fill all the fields' });
  }

  try {
    // Create and save the booking
    const newBooking = new Booking({
      userId,
      selectedDate,
      selectedTime,
      selectedCollege,
      selectedDepartment,
      className,
    });

    await newBooking.save();
    res.status(201).json({ success: true, message: 'Booking request sent successfully' });
  } catch (error) {
    console.error('Error during booking creation:', error);
    res.status(500).json({ success: false, message: 'Error during booking creation' });
  }
});

module.exports = router;






