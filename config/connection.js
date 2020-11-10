const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "tyduzbv3ggpf15sx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "e7ucem3qwn918utb",
    password: "qprl8665c5rfsu2d",
    database: "shawarmasJawsDB"
  });
}
connection.connect();
module.exports = connection;
