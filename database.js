// const { Schema, Mongoose } = require('mongoose')

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nsti').then(()=>
{console.log('connected succsefully...')}).catch((error)=>{console.log(error)})


Schema = mongoose.Schema({
    name: String,
    mail: String,
    age: Number
})
// console.log('schema created')

StudentModel = mongoose.model('Student', Schema)

module.exports = StudentModel