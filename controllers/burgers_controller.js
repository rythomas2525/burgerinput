var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var tableData = {
      burgers: data
    };
    console.log(tableData);
    res.render("index", tableData);
  });
});


router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body.burger_name, function (result) {
    console.log(req.body.burger_name + " has been added");
    res.json({ id: result.insertId });
  });
});



router.put("/api/burgers/:id", function (req, res) {
  var ID = req.params.id;

  console.log("conditionID = ", ID);

  burger.updateOne(true, ID, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
