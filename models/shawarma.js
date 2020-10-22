var orm = require("../config/orm.js");
var shawarma = {

  // Select a shawarma from the db.
  selectAll: function(cb) {
    orm.selectAll("shawarmas", function(res) {
      cb(res);
    });
  },

  // Add a shawarma from the db.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("shawarmas", cols, vals, function(res) {
      cb(res);
    });
  },

  // Update a shawarma from the db.
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("shawarmas", objColVals, condition, function(res) {
      cb(res);
    });
  },

  // Delete a shawarma from the db.
  deleteOne: function(condition, cb) {
    orm.deleteOne("shawarmas", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = shawarma;
