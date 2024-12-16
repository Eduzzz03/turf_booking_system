// // models/Booking.js
// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   selectedDate: { type: String, required: true },
//   selectedTime: { type: String, required: true },
//   selectedCollege: { type: String, required: true },
//   selectedDepartment: { type: String, required: true },
//   className: { type: String, required: true },
//   status: { type: String, default: 'Pending' },
// });

// module.exports = mongoose.model('Booking', bookingSchema);




// models/Booking.js
const bookingSchema = new mongoose.Schema({
  userId: String,
  selectedDate: String,
  selectedTime: String,
  selectedCollege: String,
  selectedDepartment: String,
  className: String,
});

bookingSchema.index({ selectedDate: 1, selectedTime: 1 }, { unique: true });
module.exports = mongoose.model('Booking', bookingSchema);
