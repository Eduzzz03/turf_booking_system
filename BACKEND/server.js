const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors'); // Import CORS middleware
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data

const db = require("./DB/connection")
const adminrouter = require('./Routes/AdminRoutes')
const Userrouter = require('./Routes/UserRoutes')
const Loginrouter = require('./Routes/LoginRoutes')
const Bookingrouter = require('./Routes/bookingRoutes')
const Reviewrouter = require('./Routes/ReviewRoutes')


app.get('/', (request, response) => {
  response.send("hi database")
})


app.use("/admin", adminrouter)
app.use("/api", Userrouter)
app.use("/api", Loginrouter)
app.use("/api", Bookingrouter)
app.use("/api", Reviewrouter)




// Start the Server
app.listen(5000, () => {
  console.log(`Server running on 5000`);
});

