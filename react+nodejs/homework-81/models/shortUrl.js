const { Schema, model } = require("mongoose");

const schema = new Schema({
  original: { type: String, required: true },
  short: { type: String, required: true }
});

module.exports = model("ShortUrl", schema);
