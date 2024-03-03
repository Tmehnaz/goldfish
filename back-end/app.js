const express = require("express");
const app = express();
const mongoose = require("mongoose");
const urlRoute = require('./back-end/createShortUrl');

const mongoDBConnection = 'mongodb://localhost:27017/shortUrlDB';

mongoose.connect(mongoDBConnection, ()=> {
    console.log("Connected to MongoDB")
});
app.use(express.json());


app.use('/shortenID', urlRoute)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`The server is up and running on port ${PORT}`);
});