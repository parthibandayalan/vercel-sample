console.log("Hello....");

const express = require("express");
const app = express();
const port = 5000;

app.get("/get", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
