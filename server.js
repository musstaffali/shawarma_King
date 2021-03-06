var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mysql://r81odcwjajn5nhub:xb2479978tfuxbrj@rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/x2yqt8ba9y9s2tii

// Export the database functions for the controller (shawramaController.js).
var routes = require("./controllers/shawarmas_controller.js");
app.use(routes);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});

