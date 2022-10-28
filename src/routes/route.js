const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const authorController = require("../controllers/authorController")
const newBookModel= require("../models/newBookModel")
const authorModel= require("../models/authorModel")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook",authorController.createBook  )
router.post("/createAuthor",authorController.createAuthor)
router.get("/booklist",authorController.booklist)
router.get("/getNameAndUpdatePrice",authorController.getNameAndUpdatePrice)
router.get("/getRangePrice_author",authorController.getRangePrice_author)


module.exports = router;