const newAuthorModel= require("../models/newAuthorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthorModel.create(author) 
    res.send({data: authorCreated})
}

module.exports.createAuthor = createAuthor