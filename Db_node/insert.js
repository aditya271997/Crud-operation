//initialising connection.....
var mysql = require('mysql');
var express = require('express');
var app = express();
var cors = require('cors')
 
var bodyparser = require('body-parser');

const Router = express.Router();
app.use(cors());
app.use(bodyparser.json());
app.use(Router);

// setup connection .....
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"node_crud"
});

con.connect((err)=>{
	if(!err)
		console.log('db connection is successful.');
	else
		console.log('db is failed ')
})

Router.post("/src/Adduser", (req,res)=>{
res.render('create');
})

// creating data ......
Router.post('/Adduser',(req,res)=>{
	var email = req.body.email;
	var username = req.body.username;
	var phoneno = req.body.phoneno;
	var city = req.body.city;
	var address = req.body.address;
    
    var sql = 'INSERT INTO `user_table2` SET ?';
	var values = {
		"email":email,
		"username":username,
		"phoneno":phoneno,
		"city":city,
		"address":address
	};
    con.query(sql,values,(err,result)=>{
    	if(err) throw err;
    	res.send({"success":true})
    })
    console.log(req.body);
})
 

// displaying data ......
Router.get('/Displayuser',(req,res)=>{
var sql = 'SELECT * FROM `user_table2`';
	
    con.query(sql,(err,result)=>{
    	if(err) throw err;
    	res.send({
    		"success":true,
    		"data" : result
    	})
    })
})

//deleting data.......
Router.delete('/Delete',(req,res)=>{
	const id = req.body.Id
	console.log(id)
var sql = "DELETE FROM `user_table2` WHERE id = ?";
	
    con.query(sql,id,(err,result)=>{
    	if(err) throw err;
    	res.send({
    		"success":true,
    		"data" : result
    	})
    })
})

//updating data.....
Router.post('/updateUser',(req,res)=>{
	var id = req.body.id;
	var email = req.body.email;
	var username = req.body.username;
	var phoneno = req.body.phoneno;
	var city = req.body.city;
	var address = req.body.address; 
    var values = [email,username,phoneno,city,address,id];
    var sql = 'UPDATE `user_table2` SET email=?,username=?,phoneno=?,city=?,address=? WHERE id = ?';
    con.query(sql,values,(err,result)=>{
    	if(err) throw err;
    	res.send({"success":true})
    })
    console.log(req.body);
})


app.listen(4000,()=>console.log('express servier is running on port :4000'));




