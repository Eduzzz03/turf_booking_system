const express = require('express');
const app = express.Router();
const Adminmodel = require('../Models/Admin');
const Booking = require('../models/Booking');
app.post('/login', async (request, response) => {
    console.log('Request Body:', request.body); // Debug request body

    const { username, password } = request.body;

    try {
        const query = { 
          username: username.trim().toLowerCase(), 
          password: password.trim() 
        };
        console.log('Query:', query);

        const user = await Adminmodel.findOne(query);
        console.log('User Found in DB:', user);

        if (user) {
            response.json({ success: true, message: 'Login successful' });
        } else {
            response.json({ success: false, message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error:', error); // Log any errors
        response.status(500).json({ success: false, message: 'Error during login' });
    }
});


// admin
app.post('/add', async (request, response) => {
  const { username, password } = request.body;

  // Check if the username and password are provided
  if (!username || !password) {
      return response.status(400).json({ success: false, message: 'Username and password are required' });
  }

  try {
      // Create a new admin record without hashing the password
      const newAdmin = new Adminmodel({
          username,
          password, // Save the password as plain text
      });

      // Save the new admin to the database
      await newAdmin.save();

      response.status(201).json({ success: true, message: 'Admin created successfully' });
  } catch (error) {
      console.error('Error:', error); // Log any errors
      response.status(500).json({ success: false, message: 'Error during admin creation' });
  }
});

// Route to fetch all bookings
app.get('/all', async (req, res) => {
  try {
    // Fetch all bookings from the database
    const bookings = await Booking.find();

    // Send the fetched bookings as a response
    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bookings',
    });
  }
});
module.exports = app;
