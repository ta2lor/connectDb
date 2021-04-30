const express = require("express");
const db = require("./config/db");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server Response Success");
});

app.get("/api/db", (req, res) => {
  db.query("select temp from test", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  });
  db.release();
});

app.get("/hello", (req, res) => {
  res.send({ hello: "HELLO REACT from node server.js" });
});
app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
