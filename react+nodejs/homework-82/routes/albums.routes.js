const { Router } = require("express");
const router = Router();
const { upload } = require("../multer");
const AlbumSchema = require("../models/Albums");

router.get("/albums", async (req, res) => {
  const albums = req.query.artist
    ? await AlbumSchema.find({ owner: req.query.artist }).populate("owner")
    : await AlbumSchema.find().populate("owner");

  if (albums.length) {
    return res.status(200).json({ albums });
  }
  return res.status(404).json({ message: "Not found" });
});

router.get("/albums/:id", async (req, res) => {
  const album = await AlbumSchema.findOne({ _id: req.params.id }).populate(
    "owner"
  );

  if (album) {
    return res.status(200).json({ album });
  }

  return res.status(404).json({ message: "Not found" });
});

router.post("/albums", upload.single("image"), async (req, res) => {
  const existing = await AlbumSchema.findOne({ name: req.body.name });

  if (existing) {
    return res.status(201).json(existing);
  }

  if (!req.body.name || !req.body.date) {
    return res.status(400).json({ message: "empty name or album date" });
  }

  if (req.file) {
    req.body.image = `uploads/${req.file.filename}`;
  }

  if (Date.parse(req.body.date) < 0 || isNaN(Date.parse(req.body.date))) {
    return res.status(400).json({ message: "Invalid date" });
  }
  const albums = new AlbumSchema({
    name: req.body.name,
    date: new Date(req.body.date),
    image: req.body.image,
    owner: req.body.owner
  });

  await albums.save();

  res.status(201).json({ albums });
});

module.exports = router;
