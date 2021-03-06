var express = require('express')

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

var app = express()

app.get("/", function(req, res) {
    res.end("Please add a date or timestamp at the end of the address")
})

app.get('/:date', function (req, res) {
  
  var inputDate = new Date(req.params.date)
  if (inputDate == "Invalid Date") {
      inputDate = new Date(req.params.date * 1000)
   
  }
 
  if ( inputDate != "Invalid Date" ) {
  
       if (+inputDate == inputDate) {
            res.end("Plus input same as input")
        } else {
            var readString = ""
            readString += monthNames[inputDate.getMonth()] + " " + inputDate.getDate()+ ", " + inputDate.getFullYear().toString()
           
            var readableReturn = {
                "unix": inputDate / 1000,
                "natural": readString
            }
            res.end(JSON.stringify(readableReturn))
        }
    
     // res.end("It could be: " + req.params.date)
  } else {
      var nullDate = {
          "unix": null,
          "natural": null
      }
 
      
      res.end(JSON.stringify(nullDate))
  }
})


app.listen((process.env.PORT || 8080), function() {
    console.log("We are listening in")
})