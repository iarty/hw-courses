const express = require("express");
const app = express();
const { PORT } = require("./config");

app.use(express.static("public"));
app.use(express.json());
app.use("/", require("./routes/routes"));

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
