const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.connectToDB).then(()=>{
        console.log("DB is connect successfully...")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectToDB