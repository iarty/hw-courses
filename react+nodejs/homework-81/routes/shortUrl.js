const { Router } = require("express");
const router = Router();
const shortid = require("shortid");
const ShortUrl = require("../models/shortUrl");

const uniq = async short => {
  const test = await ShortUrl.findOne({ short });
  if (test) {
    return uniq(shortid.generate());
  }
  return short;
};

router.get("/:shortUrl", async (req, res) => {
  const existing = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (existing) {
    return res.status(301).redirect(existing.original);
  }

  return res.status(404).json({ message: "Not found" });
});

router.post("/links", async (req, res) => {
  const existing = await ShortUrl.findOne({ original: req.body.url });
  if (existing) {
    return res.status(201).json(existing);
  }

  if (!req.body.url) {
    return res.status(400).json({ message: "empty body" });
  }

  const short = await uniq(shortid.generate());
  const shortUrl = new ShortUrl({
    original: req.body.url,
    short
  });
  await shortUrl.save();
  res.status(201).json(shortUrl);
});

module.exports = router;
