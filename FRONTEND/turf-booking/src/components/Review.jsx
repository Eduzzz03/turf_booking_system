// import React, { useState } from 'react';

// function Review() {
//   const [review, setReview] = useState('');
//   const [rating, setRating] = useState(0);

//   const handleReviewSubmit = () => {
//     // Logic for submitting the review
//   };

//   return (
//     <div>
//       <h2>Write a Review</h2>
//       <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Write your review here"></textarea>
//       <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rate (1-5)" />
//       <button onClick={handleReviewSubmit}>Submit Review</button>
//     </div>
//   );
// }

// export default Review;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Review.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  // Fetch existing reviews from the server
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews');
        if (response.data.success) {
          setReviews(response.data.reviews); // Set the fetched reviews
        } else {
          setError('Failed to fetch reviews.');
        }
      } catch (error) {
        // setError('Error fetching reviews.');
      }
    };

    fetchReviews();
  }, []);

  // Submit new review to the server
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!userName || !newReview) {
      setError('Please provide both your name and a review.');
      return;
    }

    const reviewData = {
      userName,
      review: newReview,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/reviews', reviewData);
      if (response.data.success) {
        setReviews((prevReviews) => [response.data.review, ...prevReviews]);
        setNewReview('');
        setUserName('');
      } else {
        setError('Failed to submit review.');
      }
    } catch (error) {
      setError('Error submitting review.');
    }
  };

  return (
    <div className="reviews-page">
      <h2>User Reviews</h2>

      {/* Display any error message */}
      {error && <p className="error-message">{error}</p>}

      {/* Review submission form */}
      <form onSubmit={handleSubmitReview}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
          className="review-input"
        />
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review..."
          className="review-textarea"
        />
        <button type="submit" className="submit-button">Submit Review</button>
      </form>

      {/* Display reviews */}
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <h3>{review.userName}</h3>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;

