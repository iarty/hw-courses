const { Router } = require("express");
const router = Router();
const TrackHistorySchema = require("../models/TrackHistory");
const UserSchema = require("../models/User");

router.post("/track_history", async (req, res) => {
  const token = req.get("Token");
  if (!token) {
    return res.status(401).json("Unauthorized");
  }
  const existing = await UserSchema.findOne({ token });
  const trackHistory = new TrackHistorySchema({
    userId: existing._id,
    trackId: req.body.trackId
  });
  await trackHistory.save();
  return res.status(200).json("History saved");
});

router.get("/track_history", async (req, res) => {
  const token = req.get("Token");
  if (!token) {
    return res.status(401).json("Unauthorized");
  }

  let history = await TrackHistorySchema.find()
    .populate("userId")
    .populate("trackId");
  history = history.filter(el => el.userId.token === token);
  return res.status(200).json({ history });
});

module.exports = router;
