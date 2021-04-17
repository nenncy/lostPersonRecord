const router = require('express').Router();
const Complaint = require('../models/complaint.model');

const express=require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');


//const upload= multer({dest:'uploads/'});
//router.use(express.static(__dirname+"./public/"));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './complaintimages');
  },
  filename: function(req, file, cb) {   
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });

//get home page 



router.route('/').get((req, res) => {
  Complaint.find({})
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




router.post("/addcomplaint",upload.single('photo'),(req, res ) => {
  console.log(req);
  const name = req.body.name;
  const age= Number(req.body.age);
  const location = req.body.location;
  const date = Date.parse(req.body.date);
  const photo=req.file.filename;
  const complainttype=req.body.complainttype;
  
 

  const newComplaint = new Complaint({
    name,
    age,
    location,
    date,
    photo,
    complainttype
  
    
  });

  newComplaint.save()
  .then(() => res.json('Complaint added!'))
    console.log("record added")
  .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').get((req, res) => {
  Complaint.findById(req.params.id)
    .then(Complaint => res.json(complaint))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Complaint.findByIdAndDelete(req.params.id)
    .then(() => res.json('data deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post( (req, res) => {
  Complaint.findById(req.params.id)
    .then(complaint => {
          complaint.name = req.body.name;
          complaint.age= Number(req.body.age);
          complaint.location = req.body.location;
          complaint.date = Date.parse(req.body.date);
          complaint.photo=req.file.filename;
         

      complaint.save()
        .then(() => res.json('complaint updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;