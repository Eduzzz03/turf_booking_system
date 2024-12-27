import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = () => {
    // Logic for sending OTP
  };

  const handleValidateOtp = () => {
    // Logic for OTP validation
    navigate('/signup');
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={handleSendOtp}>Send OTP</button>
      <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      <button onClick={handleValidateOtp}>Reset Password</button>
    </div>
  );
}

export default ForgotPassword;
