const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
//}, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users

// String, Number
// Boolean, Object/json, array


const userSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        unique: true},
    authorsName: String,
    category: {
        type: String,
        enum: ["fantasy", "classic", "thriller","horror","historical","romance","western","crime","mystery","humour and satire","science fiction","fairytales","autobiography and memoir","biography","essays","non fictional novel","selfhelp"] //"falana" will give an error
    },
    year: Number,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users