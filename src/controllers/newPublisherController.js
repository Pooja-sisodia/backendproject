const newPublisherModel= require("../models/newPublisherModel")

const createPublisher= async function (req, res) {
    let book = req.body
    let publisherCreated = await newPublisherModel.create(book)
    res.send({data: publisherCreated})
}

module.exports.createPublisher = createPublisher


