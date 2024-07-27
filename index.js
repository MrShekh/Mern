// var http = require('http');
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Rai University!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


const express = require('express')
const app = express();

app.get('/home', function (req, res){

  // make the call to twitter before sending the response
  
  
    // use RENDER instead of SENDFILE
    res.sendfile('./Homepage.html');
  

});

app.get('/login', function (req, res){

  // make the call to twitter before sending the response
  
  
    // use RENDER instead of SENDFILE
    res.sendfile('./Login.html');
  

});



app.listen(8080, (req,res)=>{
 

});