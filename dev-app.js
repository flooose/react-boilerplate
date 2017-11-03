var path = require('path');
var express = require('express');
var app = express();

app.use("/dist", express.static(__dirname + '/dist'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'dist') + '/index.html')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
