const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const complaintSchema = new Schema({
    name: { type: String, required: true },
   age: { type: Number, required: true },
   location: { type: String, required: true },
   date: { type: Date, required: true },
   photo: { type: String},
   complainttype:{ type: String}
  
}, {
  timestamps: true,
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;