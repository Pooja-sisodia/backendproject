const newAuthorModel= require("../models/newAuthorModel")
const newBookModel= require("../models/newBookModel")
const newPublisherModel= require("../models/newPublisherModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await newAuthorModel.find().skip().limit()
    return res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData