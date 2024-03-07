
require('dotenv').config();

const express = require("express");

const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const createShortUrl = require('./createShortUrl');



const mongo_URI = process.env.URI;

mongoose.connect(mongo_URI).then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  

app.use(cors());
app.use(express.json());

//Middleware function 
app.use('/', createShortUrl);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`The server is up and running on port ${PORT}`);
});