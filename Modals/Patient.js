const mongoose = require('mongoose')
const Doctor = require('./Doctor')

const patientSchema =  new mongoose.Schema({
        name:{
            type:String,
            default:null,
            required:true
        },
        email:{
            type:String,
            default:null,
            required:true
        },
        password:{
            type:String,
            default:null,
            required:true
        },
        phone:{
            type:Number,
            default:0,
            required:true
        },
        address:{
            type:String,
            default:null

        },
        doctor:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Doctor',
            default:null
        }
})

const Patient = mongoose.model('patient',patientSchema)

module.exports = Patient