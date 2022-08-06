const { Router } = require("express");
const router = Router();
const TrackSchema = require("../models/Tracks");

router.get("/tracks", async (req, res) => {
  if (req.query.artist) {
    const response = await TrackSchema.find().populate({
      path: "album",
      select: "owner"
    });
    const tracks = response.filter(el => el.album["owner"] == req.query.artist);
    return res.status(200).json({ tracks });
  }

  const tracks = req.query.album
    ? await TrackSchema.find({ album: req.query.album }).populate({
        path: "album",
        populate: "owner"
      })
    : await TrackSchema.find().populate({ path: "album", populate: "owner" });

  if (tracks.length) {
    return res.status(200).json({ tracks });
  }

  return res.status(404).json({ message: "Not found" });
});

router.post("/tracks", async (req, res) => {
  const existing = await TrackSchema.findOne({ name: req.body.name });

  if (existing) {
    return res.status(201).json(existing);
  }

  if (!req.body.name || !req.body.duration) {
    return res.status(400).json({ message: "empty name or track duration" });
  }

  const tracks = new TrackSchema({
    name: req.body.name,
    duration: req.body.duration,
    album: req.body.album
  });

  await tracks.save();

  res.status(201).json({ tracks });
});

module.exports = router;
