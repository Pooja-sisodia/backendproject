const newAuthorModel = require("../models/newAuthorModel")
const newBookModel = require("../models/newBookModel")
const newPublisherModel = require("../models/newPublisherModel")


let createBook = async function (req, res) {
    let book = req.body
    let authorId = book.author_Id
    let publisherId = book.publisher_Id
    const arrId = await newAuthorModel.findById(authorId)
    if(!arrId){return res.send("author id is not valid OOOO")}

    const arrPublisher = await newPublisherModel.findById(publisherId)
    if(!arrPublisher){return res.send("publisher id is not valid OOOO")}

    console.log(arrId)
    console.log(arrPublisher)
    
    let bookCreated = await newBookModel.create(book)
    res.send(bookCreated)
}
// get all the book from the database with publisher info and author
const getBooksData = async function (req, res) {
    const allBook = await newBookModel.find().populate('author_Id', 'publisher_Id')
   return res.send(allBook)
}
// update the value true of isHardCover 
const updateValue = async function (req, res) {
    // getting id from newPublisher databse 
    const data = await newPublisherModel.find({"name":["Penguin","HarperCollins"]}).select({_id:1})
    const update=await newBookModel.updateMany({publisher:data},{isHardCover:true},{new:true})
    res.send(update);
}
// increse the price of book by 10 in range of condtion
const updatePrice = async function (req, res) {
    const data = await newAuthorModel.find({rating:{$gt:3.5}}).select({_id:1})
    const update=await newBookModel.updateMany({author_id:data},{$inc:{price:+10}},{new:true})
    res.send(update);
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.updateValue = updateValue
module.exports.updatePrice = updatePrice