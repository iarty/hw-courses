const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  userId: { type: Types.ObjectId, ref: "User", required: true },
  trackId: { type: Types.ObjectId, ref: "Tracks", required: true },
  datetime: { type: Date, default: Date.now, required: true }
});

module.exports = model("TrackHistory", schema);
