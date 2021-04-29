var mysql = require("mysql");
const db = mysql.createPool({
  host: "http://cloud.park-cloud.co19.kr/",
  user: "root",
  password: "134625",
  database: "test2",
});

module.exports = db;
