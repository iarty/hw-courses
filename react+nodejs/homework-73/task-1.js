const express = require("express");
const port = 8000;
const app = express();

app.get("/", (req, res) => {
  res.redirect("/Hello-World");
});

app.get("/:message", (req, res) => {
  res.send(req.params.message);
});

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
