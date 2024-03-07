
const express = require('express');
const router = express.Router();

const ShortUrlDB = require('./shortUrlDB');

const {nanoid} = require('nanoid');

//POST request for creating short url

router.post('/api/shortId', async (req,res)=> {
    
    const {longUrl} = req.body;
    const shortId = nanoid(6);
    const baseURL = req.protocol + '://' + req.get('host') + '/';
    const shortUrl = baseURL + shortId;   
    
// created document in mongodb to map long url and short url
   try{

    ((await ShortUrlDB.create({longUrl, shortUrl, shortId})).save());
    console.log("ShortUrl created successfully");
    res.json({shortUrl});   
    
   } catch(error) {
    console.error('Error:', error);
    res.status(500).json({error:'Internal Server error during post request'});
   }

});

//GET request to redirect to the shrot url

router.get('/:shortId', async (req,res)=>{
const {shortId} = req.params;
try{
    const urlMapping = await ShortUrlDB.findOne({shortId});
    if(urlMapping){
        console.log(`Redirected to ${urlMapping.longUrl}`);
        res.redirect(urlMapping.longUrl);
    } else{
        res.status(404).json({error:'Short Url not found'})
    }
}catch(error) {
    console.error({error:'error redirecting'});
    res.status(500).json({error:'Internal Server error during get request'});
}
});
module.exports = router; 