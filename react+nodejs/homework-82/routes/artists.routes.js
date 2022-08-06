const { Router } = require("express");
const router = Router();
const ArtistSchema = require("../models/Artists");
const { upload } = require("../multer");

router.get("/artists", async (req, res) => {
  const artists = await ArtistSchema.find();
  if (artists.length) {
    return res.status(200).json({ artists });
  }
  return res.status(404).json({ message: "Not found" });
});

router.post("/artists", upload.single("photo"), async (req, res) => {
  const existing = await ArtistSchema.findOne({ name: req.body.name });
  if (existing) {
    return res.status(201).json(existing);
  }

  if (!req.body.name || !req.body.information) {
    return res.status(400).json({ message: "empty name or artists info" });
  }

  if (req.file) {
    req.body.photo = `uploads/${req.file.filename}`;
  }
  const artists = new ArtistSchema({
    name: req.body.name,
    information: req.body.information,
    photo: req.body.photo
  });
  await artists.save();
  res.status(201).json({ artists });
});

module.exports = router;
