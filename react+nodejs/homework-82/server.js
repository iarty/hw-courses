const express = require("express");
const mongoose = require("mongoose");
const dburl = "mongodb://localhost/lastfm";

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/", require("./routes/albums.routes"));
app.use("/", require("./routes/artists.routes"));
app.use("/", require("./routes/tracks.routes"));

const PORT = 8000;

const start = async () => {
  try {
    await mongoose.connect(dburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}...`);
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
};

start();
