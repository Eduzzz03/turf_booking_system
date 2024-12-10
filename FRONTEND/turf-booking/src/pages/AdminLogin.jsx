import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Importing the CSS file
import axios from 'axios';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/admin/login', {
        username: username.trim(),
        password: password.trim(),
      });

      console.log('Response:', response);

      if (response.data.success) {
        alert('Login successful');
        navigate('/admin-dashboard');
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Login Error:', error);
      setError('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2 className="admin-login-title">Admin Login</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="admin-login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="admin-login-input"
        />
        <button onClick={handleAdminLogin} className="admin-login-button">
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
