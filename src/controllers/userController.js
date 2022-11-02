const UserModel= require("../models/userModel")


// FIRST API
const basicCode= async function(req, res) {
    console.log("hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }


// SECOND API
    const basicCode2= async function(req, res) {
        console.log("Listen,You do not find the happy life. You make it.")
        res.send({ msg: "This is coming from controller (handler)"})
        }


//THIRD API
        const basicCode3= async function(req, res) {
            console.log("Make each day your masterpiece.")
            res.send({ msg: "This is coming from controller (handler)"})
            }
            

//FORTH API
          const basicCode4= async function(req, res) {
            console.log("hey man, Whatever you are, be a good one.")
            res.send({ msg: "This is coming from controller (handler)"})
         }

         



// SOME EXTRA CODE

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }





// HERE I AM EXPORTING THESE APIS
module.exports.basicCode= basicCode
module.exports.basicCode2= basicCode2
module.exports.basicCode3= basicCode3
module.exports.basicCode4= basicCode4