var express = require('express');
var path = require ('path');
// var bodyParser = require('body-parser');
// var multer = require('multer');
// var upload = multer({dest: __dirname + '/uploads'});
var app = express();
var PORT = process.env.PORT || 3000;


app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'))

// app.get("/", function (req, res){
//   res.send("hello!");
// })
app.get('/', function(req, res){
    res.sendFile(__dirname + "/views/index.html");
    // res.send("world!");
})

app.listen(PORT, function(){
  console.log(`Example app listening at http://localhost:${PORT}`)
})

// “app.use("/images", express.static(path.join(__dirname, "images")));” 