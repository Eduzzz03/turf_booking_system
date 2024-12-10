import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Import the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call the backend API to authenticate
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token (optional, depends on how you manage auth in frontend)
        localStorage.setItem('token', data.token);

        // Navigate to the booking page after successful login
        navigate('/booking');
      } else {
        setError(data.message); // Show error message
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    }
  };
  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          {error && <p className="error-message">{error}</p>} {/* Display error */}
          <button type="submit" className="login-button">Login</button>
        </form>
        <p
          onClick={() => navigate('/forgot-password')}
          className="forgot-password"
        >
          Forgot Password?
        </p>
        <p
          onClick={() => navigate('/signup')}
          className="signup-link"
        >
          Don't have an account? Sign up
        </p>
      </div>
    </div>
  );
}

export default Login;



