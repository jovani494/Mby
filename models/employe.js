const mongoose = require("mongoose");

const EmployeSchema = new mongoose.Schema({
  Nom: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  Services : 
    {
      type : mongoose.Schema.Types.ObjectId, ref: 'services'
    },
  created_at: {
    type: Date,
    default: Date.now
  }
});


const Service = mongoose.model("services", EmployeSchema);

module.exports = Service;