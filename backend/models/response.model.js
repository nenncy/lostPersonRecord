const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    msg: { type: String, required: true },
  
  
}, {
  timestamps: true,
});

const Response = mongoose.model('Response', ResponseSchema);

module.exports = Response;