const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const multer = require('multer');


require('dotenv').config();
const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb://localhost:27017/missingdata', { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const dataRouter = require('./routes/data');
const ComplaintRouter = require('./routes/complaint');


app.use('/data',dataRouter);
app.use('/complaint',ComplaintRouter);




app.listen(port,()=>{
    console.log('server is running on port : 5000');
 })