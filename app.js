const mysql = require('mysql');
const express = require('express');
var app = express();
var connection = mysql.createConnection({
  host     : 'mysql5db',
  user     : 'root',
  password : '1q2w3e4r',
  database : 'test'
});
connection.connect();
var resData = "";
connection.query('SELECT * FROM test', function (error, results, fields) {
  if (error) throw error;
  console.log('results: ', results);
  resData = JSON.stringify(results[0]);
});
connection.end();  

app.get('/', function (req, res) {
  res.send(`Results : ${resData}`);
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});