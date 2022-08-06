const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  album: { type: Types.ObjectId, ref: "Albums" }
});

module.exports = model("Tracks", schema);
