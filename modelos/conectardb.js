var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'db_academiaIng',
});
connection.connect(function(error){
    if(!!error){
      console.log(error);
    }else{
      console.log('Conexion exitosa!:)');
    }
  });  
 module.exports = connection; 