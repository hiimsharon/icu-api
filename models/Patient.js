const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  diagnosis: String,
  bedID: Number,
  admission_date: Date,
  discharge_date: Date,
  apache_score: Number
});

module.exports = mongoose.model('Patient', patientSchema);
