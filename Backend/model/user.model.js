const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    fullname : {
        firstname : {
            type : String,
            required : true,
            minlength : [3, "first name length is too small."]
        },
        lastname : {
            type : String,
            minlength : [3, "last name length is too small."]
        }
    },

    email :{
        type : String,
        required : true,
        unique : true,
        minlength : [[5, "email must be 5 charactor."]]
    },

    password : {
        type : String,
        required : true,

    },

    socketId : {
        type: String
    }
    
})


userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id : this.id}, process.env.JWT_SECRET)
    return token
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async function () {
    return await bcrypt.hash(password, 10)
}


const userModel = mongoose.userModel('user', userSchema)
module.exports = userModel