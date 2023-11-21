const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default : null
    },
    email:{
        type:String,        
        required:true,
        default : null
    },
    password:{
        type:String,
        required:true,
        default : null
    },
    specialization:{
        type:String,
        required:true,
        default : null
    },
    phone:{
        type:Number,
        default:0
    },
    address:{
        type:String,
        default:null

    }

})

const Doctor = mongoose.model('doctor',doctorSchema)

module.exports = Doctor