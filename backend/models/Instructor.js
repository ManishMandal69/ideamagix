const mongoose = require('mongoose');
const Schema = mongoose.Schema
const instructorSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  lectures: [{ type: Schema.Types.ObjectId, ref: 'Lecture' }],
  // Other instructor attributes
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
