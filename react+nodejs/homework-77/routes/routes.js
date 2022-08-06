const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");
const nanoid = require("nanoid");
const fs = require("fs");
const { uploadPath } = require("../config");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) =>
    cb(null, nanoid() + path.extname(file.originalname))
});

const upload = multer({ storage });

router.post("/newThread", upload.single("image"), (req, res) => {
  if (!req.body.comment) {
    return res.status(400).json({ error: "Comment field cannot be empty" });
  }

  if (req.file) {
    req.body.image = `uploads/${req.file.filename}`;
  }

  if (!req.body.author) {
    req.body.author = "Anonymous";
  }

  const date = new Date().toISOString();
  const fileName = `./DB/${date}.txt`;
  fs.writeFile(
    fileName,
    JSON.stringify({ id: nanoid(), ...req.body, date }),
    err => {
      if (err) {
        return res.status(400).json({ message: err });
      }
    }
  );
  return res.status(201).json({ message: { ...req.body, datetime: date } });
});

router.get("/threads", (req, res) => {
  const path = "./DB/";
  fs.readdir(path, async (err, files) => {
    if (files) {
      const threads = files.map(fileName =>
        JSON.parse(fs.readFileSync(path + fileName))
      );
      return res.status(200).json(threads);
    }
    return res.status(200).json([]);
  });
});

module.exports = router;
