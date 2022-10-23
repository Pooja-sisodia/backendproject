const today = new Date();
 const day = today.getDate()
 const month = today.getMonth()+1

 console.log(day);
 console.log(month);
 
 

 const getInfo={
    name: "Lithium",
    week: "W3D5",
    topic: "today we learned anout the Nodejs module system"

 }

 function getBatchInfo(){
    console.log(getInfo.name)
    console.log(getInfo.week)
    console.log(getInfo.topic)
 }
getBatchInfo()


module.exports.printday = day 
module.exports.printmonth = month
module.exports.batchinfo = getBatchInfo