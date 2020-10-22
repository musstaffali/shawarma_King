var express = require("express");
var shawarma = require("../models/shawarma");

var router = express.Router();


// Render the Shawarmas
router.get("/", function(req, res) {
  shawarma.selectAll(function(data) {

    //convet to object for handlebars!

    var handlebarsObj = {
      shawarmas: data
    };
    console.log(handlebarsObj);
    res.render("index", handlebarsObj);
  });

// POST new Shawarma
  router.post("/api/shawarmas", function(req, res) {
    shawarma.insertOne(
      ["shawarma_name", "ordered"],
      [req.body.shawarma_name, req.body.ordered],
      function(result) {
        // Send back the ID of new Shawarma
        res.json({ id: result.insertId });
      }
    );
  });

// Eat the shawarma
  router.put("/api/shawarmas/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    shawarma.updateOne({ ordered: req.body.ordered }, condition, function(
      result
    ) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

//delete ordered shawarma (when delete btn is clicked)
  router.delete("/api/shawarmas/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    shawarma.deleteOne(condition, function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
});
module.exports = router;
