const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  information: { type: String, required: true },
  photo: String
});

module.exports = model("Artists", schema);
