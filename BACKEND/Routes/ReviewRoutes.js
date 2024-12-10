const express = require('express');
const router = express.Router();
const Review = require('../Models/Review');

// Get all reviews
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json({ success: true, reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching reviews' });
  }
});

// Post a new review
router.post('/reviews', async (req, res) => {
  const { userName, review } = req.body;

  if (!userName || !review) {
    return res.status(400).json({ success: false, message: 'Name and review are required' });
  }

  try {
    const newReview = new Review({ userName, review });
    await newReview.save();
    res.json({ success: true, review: newReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error saving review' });
  }
});

module.exports = router;
