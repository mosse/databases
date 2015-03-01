var mysql = require('mysql');

exports.connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'

});

exports.connection.connect(function(err) {
	if(err){
		console.error('error connection: ' + err.stack);
		return;
	}
});

console.log('connected as id ' + exports.connection.threadId);

// connection.end();

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


