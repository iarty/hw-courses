const PORT = 8000;
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`App has been started on port ${PORT}...`);
});
