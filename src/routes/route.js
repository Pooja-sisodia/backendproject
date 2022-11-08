const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const userController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const auth = require ("../middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by frontend
router.get("/users/:userId",auth.authenticate, auth.authorise, userController.getUserData)

router.put("/users/:userId",auth.authenticate, auth.authorise, userController.updateUser)

router.delete('/users/:userId', auth.authenticate, auth.authorise, userController.deleteUser)

module.exports = router;