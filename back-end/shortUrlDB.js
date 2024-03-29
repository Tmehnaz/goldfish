const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({
    longUrl:{
        type: String,
        required: true
    },
    shortUrl:{
        type: String,
        required: true
    },
    shortId:{
        type: String,
        required: true,
        unique: true

    }
   
});
module.exports = mongoose.model('ShortUrlDB', shortUrlSchema);