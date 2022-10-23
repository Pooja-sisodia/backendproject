const str = "            Hi this is Pooja        "
 
 const stringtrim = function(){
    const name = str.trim()
    console.log(name)
 }

 const changetolowercase = function(){
    const lowercase =str.toLowerCase()
    console.log(lowercase)
 }
 
 const changetouppercase = function(){
    const uppercase = str.toUpperCase()
    console.log(uppercase)
 }
 
 
 module.exports.trimtext = stringtrim()
 module.exports.lowercasetext = changetolowercase()
 module.exports.uppercasetext = changetouppercase()
 