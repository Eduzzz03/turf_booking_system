const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://TurfBooking:gsjshwu56.@cluster0.nv7w8kf.mongodb.net/turf?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
    console.log(error)
})

