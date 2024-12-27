const app=require('express').Router()

const User = require('../Models/user');


// Signup route
app.post('/signup', async (req, res) => {
    
    const { firstName, lastName, email, phone, password } = req.body;
    console.log(req.body)

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) 
        {
        return res.status(400).json({ message: 'Email is already registered' });
      }
      else
      {
 
        console.log("jhkj")
        new User(req.body).save();  // Save the user to the database
        res.status(201).json({ message: 'User registered successfully' });
      }
     
    
    } 
    catch (error) {
      console.error('Error saving user to database:', error);
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  });

module.exports = app