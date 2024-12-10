const app=require('express').Router()

// const Login = require('../Models/Login');
const User = require('../Models/user')

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
  
    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Return success response with token
      return res.status(200).json({
        message: 'Login successful',
        user: { firstName: user.firstName, lastName: user.lastName, email: user.email },
      });
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  });
  









module.exports = app