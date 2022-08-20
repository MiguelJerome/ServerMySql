
var express = require("express");
const connection = require('./my_db');
var app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', function(req, res){

  let sql = `SELECT * FROM customers`;
  

  const result = connection.query(sql, function(err,results){
      if (err) throw err;
   res.send(results);
    console.log(results);
});
});

app.listen(3000, function(){
  console.log('App listening on port 3000');
}
);




connection.connect((err) =>{

  if(!err)
  console.log('DB succeed');
  else
  console.log('DB failed');
});



