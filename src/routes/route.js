const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const bookModel= require("../models/bookModel")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook )

router.get("/booklist", BookController.booklist)

router.post("/getBooksInYear", BookController.getBooksInYear)

router.post("/getPerticularBooks", BookController.getPerticularBooks)

router.get("/getIXINRBooks", BookController.getIXINRBooks )

router.get("/getRandomBook", BookController.getRandomBook)

module.exports = router;