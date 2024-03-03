const express = require("express");
const app = express();
const mongoose = require("mongoose");
const urlRoute = require('./createShortUrl');

const uri = 'mongodb://localhost:27017/shortUrlDB';

mongoose.connect(uri, ()=> {
    console.log("Connected to MongoDB")
});
app.use(express.json());


app.use('api/longurl', urlRoute)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`The server is up and running on port ${PORT}`);
});