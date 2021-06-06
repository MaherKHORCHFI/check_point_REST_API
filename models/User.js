const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email: {
        type:String,
        unique:true
    },
    tel: {
        type:Number,
        required:true,
        unique:true
    },
    adress:{
        city:{
            type:String,
            required:true},
        country:{
            type:String,
            required:true
        },
        code:{
            type:Number,
            required:true
        }
    },
    dateOfInscription:{
        type: Date,
        default: Date.now()
    }
}) 

module.exports = User = mongoose.model("users",UserSchema)