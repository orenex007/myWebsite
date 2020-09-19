var express = require('express');
// var bodyParser = require('body-parser');
// var multer = require('multer');
// var upload = multer({dest: __dirname + '/uploads'});
var app = express();
var PORT = process.env.PORT || 5000;


app.use('/public', express.static(__dirname + '/public'));
// app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/dinofit.html')
    //  res.send("hello!");
})


app.get('/index', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
    // res.send("world!");
})

// app.get("/index", function(req, res){
//   res.writeHead(200, {'Content-Type': 'image/png'});
//   res.end("fit.jpg");
// })

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})