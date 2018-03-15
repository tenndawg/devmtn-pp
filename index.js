var express = require('express')
var cors = require('cors')
var app = express()
 
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
 
app.get('/products/:id', cors(corsOptions), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for only example.com.'})
  })
 
app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})