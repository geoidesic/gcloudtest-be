var express = require("express");
var cors = require("cors");
var app = express();

var corsOptions = {
  origin: 'fe',
  optionsSuccessStatus: 200
};


app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/test", cors(corsOptions), (req, res, next) => {
 res.json({"success": true, "message": "booya!"});
}, (req, res, next) => {
  console.log(req)
  console.log(res);
});
