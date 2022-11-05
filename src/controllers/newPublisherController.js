const newPublisherModel= require("../models/newPublisherModel")

const createPublisher= async function (req, res) {
    let data = req.body
    let publisherCreated = await newPublisherModel.create(data)
    res.send({data: publisherCreated})
}

module.exports.createPublisher = createPublisher


