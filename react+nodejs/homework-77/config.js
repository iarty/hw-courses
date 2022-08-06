const path = require("path");
const rootPath = __dirname;
const PORT = 8000;

module.exports = {
  PORT,
  rootPath,
  uploadPath: path.join(rootPath, "public", "uploads")
};
