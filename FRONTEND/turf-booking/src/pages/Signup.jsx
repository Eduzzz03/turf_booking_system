import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';  // Import the custom CSS file

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});  // Store validation errors
  const [serverError, setServerError] = useState('');  // Server-side error message
  const [loading, setLoading] = useState(false);  // Loading state
  const [successMessage, setSuccessMessage] = useState('');  // Success message

  const navigate = useNavigate(); // Hook for navigation

  const validateForm = () => {
    const newErrors = {};
    
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Perform form validation
    const formErrors = validateForm();
    setErrors(formErrors);

    // If there are no errors, proceed to signup
    if (Object.keys(formErrors).length === 0) {
      setLoading(true);  // Set loading state
      setServerError('');  // Clear server error
      setSuccessMessage('');  // Clear success message
      
      // Prepare data for the backend
      const signupData = {
        firstName,
        lastName,
        email,
        phone,
        password,
      };

      try {
        // Send signup data to the backend API (replace '/api/signup' with your actual API endpoint)
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signupData),
        });

        const result = await response.json();  // Parse the JSON response

        if (response.ok) {
          // Success: Display success message and navigate to login page
          setSuccessMessage('Signup successful! Redirecting to login...');
          setTimeout(() => {
            navigate('/login');  // Redirect after a delay
          }, 2000);  // 2-second delay before redirect
        } else {
          // Handle errors returned by the server
          setServerError(result.message || 'Signup failed. Please try again.');
        }
      } catch (error) {
        // Catch network or unexpected errors
        setServerError('Network error. Please try again later.');
      } finally {
        setLoading(false);  // Stop loading
      }
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>

      {serverError && <p className="error-message">{serverError}</p>} {/* Server-side error */}
      {successMessage && <p className="success-message">{successMessage}</p>} {/* Success message */}

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="signup-input"
        />
        {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="signup-input"
        />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="signup-input"
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
        
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="signup-input"
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        
        <button type="submit" className="signup-button" disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default Signup;



