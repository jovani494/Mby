const mongoose = require("mongoose");

const RendezVousSchema = new mongoose.Schema({
  DateRdv : {type : Date},
  Service :
    {
        type : mongoose.Schema.Types.ObjectId, ref: 'services'
    },
  Employe : 
    {
        type : mongoose.Schema.Types.ObjectId, ref: 'employes'
    },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const RendezVous = mongoose.model("services", RendezVousSchema);

module.exports = RendezVous;