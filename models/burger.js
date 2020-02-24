// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll(function (response) {
      cb(response);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (name, cb) {
    orm.insertOne(name, function (response) {
      cb(response);
    });
  },
  updateOne: function (id, cb) {
    orm.updateOne(id, function (response) {
      cb(response);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
