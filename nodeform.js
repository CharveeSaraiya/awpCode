var express = require('express');
var bodyParser = require('body-parser');
var addition = require('./calculator.js');
const app = express();

var urlencodedParser = bodyParser.urlencoded({extended:false})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});
app.post('/',urlencodedParser,(req,res)=>{
    console.log("Got body",req.body);
    var name = req.body.name;
    var m1 = parseFloat(req.body.mark1);
    var m2 = parseFloat(req.body.mark3);
    var m3 = parseFloat(req.body.mark3);
    var result = addition.AddNumber(m1,m2,m3);
    res.send("Hello  "+ name + "<br>" +"Your average Percentage is: " + result + "%");
});

app.listen(8080);