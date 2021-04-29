const express = require("express");
const db = require("./config/db");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server Response Success");
});

app.get("/api/db", (req, res) => {
  db.query("select * from temp1", (err, data) => {
    if (!err) res.send({ products: data });
    else res.send(err);
  });
});

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
