const express = require('express');
const router = express.Router();

const newAuthorController= require("../controllers/newAuthorController")
const newBookController= require("../controllers/newBookController")
const newPublisherController= require("../controllers/newPublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", newAuthorController.createAuthor)
router.post("/createBook", newBookController.createBook)
router.get("/getBooksData", newBookController.getBooksData)
router.get("/getBooksWithAuthorDetails", newBookController.updateValue)
router.get("/getBooksWithPublisherDetails", newBookController.updatePrice)
router.post("/createPublisher", newPublisherController.createPublisher)


module.exports = router;