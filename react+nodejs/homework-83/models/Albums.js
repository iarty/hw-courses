const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  image: String,
  owner: { type: Types.ObjectId, ref: "Artists" }
});

module.exports = model("Albums", schema);
