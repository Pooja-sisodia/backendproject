const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger/logger.js')
const abc = require('../util/helper.js')
const pqr = require('../validators/formatters.js')
//importing external package
const result = require('lodash')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("Calling date function ",abc.printday())
    console.log("Calling month function ",abc.printmonth())
    console.log("Calling batchinfo function ",abc.batchinfo())
    console.log("Calling trimtext function ",pqr.trimtext())
    console.log("Calling lowercasetext function ",pqr.lowercasetext())
    console.log("Calling uppercasetext function ",pqr.uppercasetext())
    
    //Trying to use an external package called lodash

    let months = ["January","February","March","April","May","June","july","August","September","October","November","December"];
    console.log(result.chunk(months,4))

    const oddNum=[1,3,5,7,9,11,13,15,17,19];
    console.log(result.tail(oddNum));

    const Num = ([2,5])
    const Num2 = ([4,2])
    const Num3 = ([7,7])
    const Num4 = ([5,9])
    const Num5 = ([6,8])
    console.log(result.union(Num,Num2,Num3,Num4));

    const keyValue=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]

    console.log(result.fromPairs(keyValue));


//send request
    res.send('welcome to my page')

    
});

module.exports = router;

