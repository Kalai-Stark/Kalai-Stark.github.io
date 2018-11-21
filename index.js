const express = require('express'),
app = express(),
port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (res,req) {
  req.send('hello world')
})
app.listen(port,function(){ 
    console.log(`this port is listening to ${port}!`);
})