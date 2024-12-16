// // routes/bookings.js
// const express = require('express');
// const router = express.Router();
// const Booking = require('../models/Booking');

// router.post('/creating', async (req, res) => {
//   const { userId, selectedDate, selectedTime, selectedCollege, selectedDepartment, className } = req.body;

//   // Log the incoming request body
//   console.log('Request Body:', req.body);

//   // Validate required fields
//   if (!userId || !selectedDate || !selectedTime || !selectedCollege || !selectedDepartment || !className) {
//     return res.status(400).json({ success: false, message: 'Please fill all the fields' });
//   }

//   try {
//     // Create and save the booking
//     const newBooking = new Booking({
//       userId,
//       selectedDate,
//       selectedTime,
//       selectedCollege,
//       selectedDepartment,
//       className,
//     });

//     await newBooking.save();
//     res.status(201).json({ success: true, message: 'Booking request sent successfully' });
//   } catch (error) {
//     console.error('Error during booking creation:', error);
//     res.status(500).json({ success: false, message: 'Error during booking creation' });
//   }
// });

// module.exports = router;


// routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/creating', async (req, res) => {
  const { userId, selectedDate, selectedTime, selectedCollege, selectedDepartment, className } = req.body;

  console.log('Incoming Request:', req.body);

  // Validate required fields
  if (!userId || !selectedDate || !selectedTime || !selectedCollege || !selectedDepartment || !className) {
    return res.status(400).json({ success: false, message: 'Please fill all the fields' });
  }

  try {
    // Check if a booking already exists for the same date and time
    const existingBooking = await Booking.findOne({
      selectedDate,
      selectedTime,
    });

    if (existingBooking) {
      console.log('Conflict: Time slot already booked', existingBooking);
      return res.status(409).json({
        success: false,
        message: 'This time slot is already booked. Please select a different time.',
      });
    }

    // Create and save the new booking
    const newBooking = new Booking({
      userId,
      selectedDate,
      selectedTime,
      selectedCollege,
      selectedDepartment,
      className,
    });

    await newBooking.save();
    console.log('New Booking Created:', newBooking);

    res.status(201).json({ success: true, message: 'Booking request sent successfully' });
  } catch (error) {
    console.error('Error during booking creation:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;




