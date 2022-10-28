const { count } = require("console")
const newBookModel= require("../models/newBookModel")
const authorModel= require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await newBookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const booklist= async function (req, res) {
const getId = await authorModel.find({ author_name: "Chetan Bhagat" }).select({ author_id: 1, _id: 0 })
    const bookList = await newBookModel.find(getId[0]).select({ name: 1, _id: 0 })
    res.send({msg:bookList})
}


const getNameAndUpdatePrice = async function (req, res) {
    const updatePrice = await newBookModel.findOneAndUpdate({ name: "Two states" }, { price: 100 }, { new: true })
    const authorId = updatePrice.author_id
    let authorName = await authorModel.find({ author_id: authorId }).select({ _id: 0, author_name: 1 })
    authorName = authorName[0].author_name
    res.send({ price: updatePrice.price, author_Name: authorName });
}


 
const getRangePrice_author = async function (req, res) {
    const book = await newBookModel.find({ price: { $gt: 49, $lt: 101 } }).select({ price: 1,name:1, author_id: 1, _id: 0 })
    const a=book.map(x=>x.author_id)
    const author=await authorModel.find({author_id:a}).select({author_name:1,author_id:1,_id:0})
    const myData=[]
    console.log(book)
    console.log(author)
    book.forEach(element => {
        author.forEach(element2 => {
            if(element.author_id==element2.author_id){
                data={bookName:element.name,authorName:element2.author_name}
                myData.push(data)
            }
        });
    });
    res.send(myData)
}





module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.booklist = booklist
module.exports.getNameAndUpdatePrice = getNameAndUpdatePrice
module.exports.getRangePrice_author = getRangePrice_author
