var db = require('../db').connection;




module.exports = {
  messages: {
    get: function (callback) {
      console.log("in the models get");
      // var queryString = 'select messages.id, messages.text, messages.roomname, users.username from messages \
      //                   left outer join users on (messages.userid = user.id) \
      //                   order by messages.id desc';
      var queryString = 'select * from messages';
      console.log("db?", db);
      db.query(queryString, function(err, results){
        console.log(results);
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryString = 'insert into messages (text, userid, roomname) \
                         values (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryString, params, function(err, results){
        callback(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {  
    	var queryString = 'select * from users';
    	db.query(queryString, function(err, results){
    		callback(results);
    	});
    },
    post: function (params, callback) {
    	var queryString = 'insert into users(username) values (?)';
    	db.query(queryString, params, function(err, results){
    		callback(results);
    	});
    }
  }
};

