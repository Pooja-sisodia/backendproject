const mongoose = require('mongoose')

const newAuthorSchema = new mongoose.Schema( {
    author_Name: {
        type:String,
        required:true,
        unique:true
    },
    age: Number,
    address: String,
    rating: Number

}, { timestamps: true });

module.exports = mongoose.model('NewAuthor', newAuthorSchema)
