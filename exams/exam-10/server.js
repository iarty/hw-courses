const express = require("express");
const { PORT } = require("./config");
const mysqlDb = require("./db");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/", require("./routes/news"));
app.use("/", require("./routes/comments"));

const start = async () => {
    try {
        await mysqlDb.connect();
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`);
        });
    } catch (e) {
        console.log("Server Error", e.message);
        process.on("exit", () => {
            mysqlDb.disconnect();
        });
    }
};

start();
