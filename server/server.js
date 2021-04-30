const express = require("express");
const db = require("./config/db");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server Response Success");
});

app.get("/api/db/select", (req, res) => {
  db.query("select temp from test", (err, data) => {
    if (!err) res.send({ products: data, id: data });
    else res.send(err);
  });
});

app.get("/api/db/insert", (req, res) => {
  db.query("insert into test value(3)", (err, result) => {
    if (err) res.send(err);
    else res.send({ success: true });
  });
});

app.get("/hello", (req, res) => {
  res.send({ hello: "HELLO REACT from node server.js" });
});
app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
