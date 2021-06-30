/* Importing the mongoose module. */
const mongoose = require("mongoose");

/* creating a schema which is used to describe what data is stored within the database and also how 
   that data is organised. */
let CarsSchema = mongoose.Schema({
  model: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

/* I am creating a model below and I am exporting it so that I can use it in other files in my project. */
module.exports = mongoose.model("Cars", CarsSchema);
