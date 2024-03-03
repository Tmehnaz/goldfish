
const express = require('express');
const router = express.Router();

const URLdb = require('./shortUrlDB');
const {nanoid} = require('nanoid');

router.post('/shortenID', async (req,res)=> {

    const {longUrl} = req.body;
    const shortID = nanoid(7);
    const shortUrl = shortID; 

   try{

    await URLdb.create({shortID, longUrl});
    res.json(shortUrl);
   } catch(error) {
    console.error('Error' + error);
    res.status(500).json(error + 'Internal Server error');
   }

});
router.get('/:shortID', async (req,res)=>{
const {shortID} = req.params;
try{
    const longUrl = await URLdb.findOne({shortID});
    if(longUrl){
        res.redirect(shortUrl.longUrl)
    } else{
        res.status(404).json(error + 'Short Url not found')
    }
}catch(error) {
    console.error('error redirecting' + error);
    res.status(500).json({error:'Internal Server error'})
}
})
module.exports = router; 