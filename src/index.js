const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

const moment = require('moment')
const time = moment()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    function (req,res,next){
        console.log('Global Middleware is active')
        console.log(time.format('YYYY-MM-DD'))
        console.log(time.format('hh:mm:ss'))
        console.log(req.ip)
        console.log(req.originalUrl)
        next()

    }
)


mongoose.connect("mongodb+srv://PoojaFunctionUp:PA44yjApvizLJGOY@cluster0.newxzkv.mongodb.net/Pooja1508-Db?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
