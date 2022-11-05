const mongoose = require('mongoose')

const PublisherSchema = new mongoose.Schema( {
    name: {
        type:String,
        required:true,
        unique:true
    }, 
    headQuater: String

}, { timestamps: true });

module.exports = mongoose.model('NewPublisher',PublisherSchema)
