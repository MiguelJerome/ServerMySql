

mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'northwind'
  });

// Express middleware

 //let resultString = Object.values(JSON.parse(JSON.stringify(result)));
 // console.log(resultString);
  
        let sql = `SELECT * FROM customers`;
        
      
        const result = connection.query(sql, function(err,results){
            if (err) throw err;
         
          console.log(results);
      });
   


  module.exports = connection;