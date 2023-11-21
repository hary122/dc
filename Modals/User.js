const mongoose = reqiure('mongoose')

const userSchema = new mongoose.Schema({
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
    phone_number:{
        type:Number,
        default:0
    },
    address:{
        type:String,
        default:null
    },
    role:{
        type:Number,
        default:0
    }
})

const User = mongoose.model('user',userSchema)

module.exports = User