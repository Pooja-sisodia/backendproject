const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    name: String,
    author_Id: {
        type: ObjectId,
        required: true,
        ref: "newAuthor"
    }, 
    price: Number,
    ratings: Number,
    publisher_Id:{
        type: ObjectId,
        required:true,
        ref: "newPublisher"
    },
    isHardCover:{
        type:Boolean,
        default:false
    }

}, { timestamps: true });

module.exports = mongoose.model('NEWBOOK', newBookSchema)
