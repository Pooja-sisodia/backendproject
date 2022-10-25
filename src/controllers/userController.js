const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData


const createBooks = async function(req,res){
    let data = req.body
    let savedData = await userModel.create(data)
    res.send({msg: savedData})

}

const getUsersBooks = async function(req,res){
    let data = req.body
    let savedData = await userModel.create(data)
    res.send({msg: savedData})

}
module.exports.createBooks= createBooks
module.exports.getUsersBooks= getUsersBooks