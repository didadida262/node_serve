var db = require('../database');
    
var User = function() {};

User.prototype.find = function(id, callback) {
    // var sql = "SELECT * FROM users WHERE user_id =?";
    var sql = "SELECT * FROM user_tbl";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        // connection.query(sql, [id], function(err, results) {
          connection.query(sql, function(err, results) {
            if (err) {
                console.log('3')
                callback(true);
                return;
            }
            console.log('results:', results)
            callback(false, results);
        });
    });
};

module.exports = User;
