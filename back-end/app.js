require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const urlRoute = require('./back-end/createShortUrl');


const mongo_URI = process.env.URI;

mongoose.connect(mongo_URI, ()=> {
    console.log("Connected to MongoDB")
});
app.use(express.json());


app.use('/api', urlRoute)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`The server is up and running on port ${PORT}`);
});