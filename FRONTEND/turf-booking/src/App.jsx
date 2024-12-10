import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Gallery from './components/Gallery';
import ForgotPassword from './pages/ForgotPassword';
import Booking from './components/Booking';
import AdminLogin from './pages/AdminLogin';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TurfCard from './components/TurfCard';
import TimeSlotPage from './components/TimeSlotPage';
import AdminDashboard from './pages/AdminDashboard';
import ReviewsPage from './components/Review';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<TurfCard turfName="Sample Turf" turfImage="turf.jpg" />} />
        <Route path="/timeslots" element={<TimeSlotPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/Review" element={<ReviewsPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

