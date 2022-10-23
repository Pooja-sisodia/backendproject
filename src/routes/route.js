const express = require('express');
const router = express.Router();

let players =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]

router.post("/players", function (req, res) {

    let userData = req.body

    let playerName = players.find( x => x.name === userData.name)

    if (playerName) {
        res.send({ message: "Player name already exist !!"})
    } else {
        players.push(userData)
        res.send(players)
    }
});

module.exports = router;