const mongoose = require('express');
const Doctor = require('./Doctor');
const Patient = require('./Patient');



const AppointmentSchema = new mongoose.Schema({

    doctor:{
        type:mongoose.Schema.Type.ObjectId,
        ref:'Doctor',
        required :true
    },
    patient:{
        type:mongoose.Schema.Type.ObjectId,
        ref:'Patient',
        required:true
    },
    appointment_date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:['confirmed','pending','cancelled'],
        default:'pending'
    }

})

const Appointment = mongoose.model('appointment',AppointmentSchema);

module.exports =  Appointment