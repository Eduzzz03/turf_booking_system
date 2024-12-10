import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import axios from 'axios';
const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch all bookings from the API
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/all');
        
        if (response.data.success) {
          setBookings(response.data.data); // Set the bookings data
        } else {
          // setError('Failed to fetch bookings');
        }
      } catch (error) {
        // setError('Error fetching bookings');
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);
  const updateStatus = async (bookingId, status) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/status/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking._id === bookingId ? { ...booking, status } : booking
          )
        );
      } else {
        alert('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  return (
    <div className="container">
      <h2>Booking Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>College</th>
            <th>Department</th>
            <th>Class</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td data-label="Date">{booking.selectedDate}</td>
              <td data-label="Time">{booking.selectedTime}</td>
              <td data-label="College">{booking.selectedCollege}</td>
              <td data-label="Department">{booking.selectedDepartment}</td>
              <td data-label="Class">{booking.className}</td>
              <td data-label="Status">{booking.status || 'Pending'}</td>
              <td data-label="Actions">
                <button
                  onClick={() => updateStatus(booking._id, 'Confirmed')}
                  disabled={booking.status === 'Confirmed'}
                >
                  Confirm
                </button>
                <button
                  onClick={() => updateStatus(booking._id, 'Rejected')}
                  disabled={booking.status === 'Rejected'}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;




