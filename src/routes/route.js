const express = require('express');
const router = express.Router();

const newAuthorController= require("../controllers/newAuthorController")
const newBookController= require("../controllers/newBookController")
const newPublisherController= require("../controllers/newPublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", newAuthorController.createAuthor)
router.post("/createPublisher", newPublisherController.createPublisher)
router.post("/createBook", newBookController.createBook)
router.get("/getBooksData", newBookController.getBooksData)
router.put("/updateValue", newBookController.updateValue)
router.put("/updatePrice", newBookController.updatePrice)


module.exports = router;