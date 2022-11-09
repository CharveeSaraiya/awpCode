const express = require("express");
const app = express();
const mysql = require('mysql');
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'try123'
});

connection.connect((err) =>{
    if(err) throw err;
    console.log('Connected to MySQl Server!');
});

app.get("/",(req,res) =>{
    connection.query('Select * from employees',(err,rows) =>{
     console.log('The data from users table are: \n',rows);
     var data="<a href=/InsertEmp>Add Employee</a></br></br>";
     data +="<table border = 1><tr><td>ID</td><td>firstName</td><td>lastname</td><td>email</td><td>phone</td><td>salary</td>";

     rows.forEach( (row)=>{
        data = data + "<tr>";
        data = data + "<td>" + row.id + "</td>";
        data = data + "<td>" + row.first_name + "</td>";
        data = data + "<td>" + row.last_name + "</td>";
        data = data + "<td>" + row.email + "</td>";
        data = data + "<td>" + row.phone + "</td>";
        data = data + "<td>" + row.salary + "</td>";
        data = data + "<td><a href=/delete/" + row.id + ">Delete</a></td>";
        data = data + "<td><a href=/edit/" + row.id + ">Edit</a></td>";
        data = data+"</tr>";
     });
     data = data + "</table>";
     res.send(data);
    });
});

app.get("/InsertEmp",function(req,res){
    res.sendFile(__dirname + "/emp_insert.html");
});
app.post("/submit_emp",function(req,res){
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email=req.body.email;
    var phone = req.body.phone;
    var salary = req.body.salary;
    connection.query(`Insert into employees value(0,'${firstname}','${lastname}','${email}','${phone}','${salary}')`) ;
    res.redirect("/");
});
 app.get("/delete/:id",(req,res)=>{
    var id = req.params.id;
    connection.query('delete from employees where id='+id);
    res.redirect("/");
 })
app.listen(3000,()=>{
    console.log('Server is runing at port 3000');
});