const mongoose = require("mongoose");
const Doctor = require("./Doctor");
const Patient = require("./Patient");
const Appointment = require("./Appointments");

const visitSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    default: null,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    default: null,
  },
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment",
    default: null,
  },
  visitDate: {
    type: Date,
    default: null,
    required: true,
  },
  prescription: [
    {
      medicineName: {
        type: String,
        required: true,
      },
      dosage: {
        type: String,
        required: true,
      },
      instructions: {
        type: String,
        required: true,
      },
    },
  ],
});

const Visit = mongoose.model("visit", visitSchema);

module.exports = Visit;
