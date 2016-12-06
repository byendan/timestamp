var express = require('express')
var logger = require("morgan");

var app = express()
app.use(logger())

app.get('/:date', function (req, res) {
  
  var inputDate = new Date(req.params.date)
  if ( inputDate != "Invalid Date" ) {
      console.log(inputDate)
    
      res.end("It could be: " + inputDate)
  } else {
      var nullDate = {
          "unix": null,
          "natural": null
      }
      console.log(JSON.stringify(nullDate))
      
      res.end(JSON.stringify(nullDate))
  }
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})