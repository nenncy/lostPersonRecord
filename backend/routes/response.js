const router = require('express').Router();
const Response = require('../models/response.model');

const express=require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');


//const upload= multer({dest:'uploads/'});
//router.use(express.static(__dirname+"./public/"));

router.route('/').get((req, res) => {
  Response.find({})
  .exec(function(err,data){
    if(err){
      consol.log("error");
    }
    else
    {
      res.json(data);
    }
  })
});




router.post("/addresponse",(req, res ) => {
  console.log(req);
  const msg = req.body.msg;
  
  
 

  const newResponse = new Response({
    msg
});

  newResponse.save()
  .then(() => res.json('Response added!')).catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;