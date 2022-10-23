const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

//QUENSTION.1 
router.get('/movies', function(req, res){ 
    let movies = ['Ye jawani hai deewani', 'Uri', 'HeraPheri', 'The Nun'] 
   res.send(movies) 
});
 
//QUENSTION.2
router.get('/movie/:indexNumber', function(req, res){ 
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'] 
  index = req.params.indexNumber  
  res.send(movies[index]) 
  });
 
//QUENSTION.3  

router.get('/movies/:indexNumber',function(req,res){
    let Movies= ['Rang de Basanti','The shining', 'Lord of the rings', 'Batman begins','heathers','dangal']
    let Mnumber = req.params.indexNumber
        if (Mnumber<Movies.length && Mnumber>=0)
            return res.send(Movies[Mnumber])
        else
            res.send ('it is not a valid indexNumber ')
        });


//QUENSTION.4

router.get('/films',function(req,res){
    const film=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
      let films = film.reduce((obj,item)=>Object.assign(obj, {[item.id]:item.name}),{})
      res.send(films)  
    });

   
//QUENSTION.5

    router.get("/films/:filmId", function (req, res) {
        // films accessing using filmid 
        let requestParams = req.params
       let  movieIndex=requestParams.filmId-1
    
        const films = [
          {
            id: 1,
            name: "The Shining",
          },
          {
            id: 2,
            name: "Incendies",
          },
          {
            id: 3,
            name: "Rang de Basanti",
          },
          {
            id: 4,
            name: "Finding Nemo",
          },
        ];
        if( movieIndex <= -1 || movieIndex >=4 ){
               res.send("No movie exists with this id")
         }
        res.send(films[movieIndex]);
      });
 
   module.exports = router;