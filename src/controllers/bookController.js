const newAuthorModel= require("../models/newAuthorModel")
const newBookModel= require("../models/newBookModel")
const newPublisherModel= require("../models/newPublisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await newBookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await newBookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await newBookModel.find().populate('author_id')
    res.send({data: specificBook})

}
const getBooksWithPublisherDetails = async function (req, res) {
    let specificBook = await newBookModel.find().populate('publisher_Id')
    res.send({data: specificBook})

}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBooksWithPublisherDetails = getBooksWithPublisherDetails

