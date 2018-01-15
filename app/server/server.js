var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var path = require('path');

var app = express()

app.use(express.static(path.join(__dirname, '..','client','public')))

app.use(bodyParser.json())

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})