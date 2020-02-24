// Import MySQL connection.
var connection = require("../config/connection.js");




var orm = {
  // Selects everything from burgers table
  selectAll: function (cb) {
    connection.query("SELECT * FROM burgers;", function (err, result) {
      if (err) {
        return res.status(500).end();
      }

      cb(result);
    })


  },

  // Inserts name of burger that you want to enter into database
  insertOne: function (name, cb) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?);", name, function (err, result) {
      if (err) {
        return res.status(500).end();
      };
      console.log(result);
      cb(result);

    })
  },

  // changes devoured from false to true.

  updateOne: function (id, cb) {
    connection.query("UPDATE burgers SET devoured = true WHERE id ?;", id, function (err, result) {
      if (err) { return res.status(500).end(); }
      console.log(result);
      cb(result);
    })
  }

}


// Export the orm object for the model (burger.js).
module.exports = orm;
