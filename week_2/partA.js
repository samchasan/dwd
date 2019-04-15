var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3002, function () {
  console.log('partA listening on port 3002!')
})