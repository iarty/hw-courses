const mysqlDb = require("../db");
const { Router } = require("express");
const router = Router();

router.get("/comments", async (req, res) => {
  try {
    const comments = req.query.news_id
      ? await mysqlDb
          .connection()
          .query("SELECT * FROM `comments` WHERE news_id =?", req.query.news_id)
      : await mysqlDb.connection().query("SELECT * FROM `comments`");
    return res.status(200).json({ comments: comments[0] });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.post("/comments", async (req, res) => {
  try {
    if (!req.body.comment) {
      return res.status(400).json({ error: "Comment field is empty!!!" });
    }
    const response = await mysqlDb
      .connection()
      .query(
        "INSERT INTO `comments` (`news_id`,`author`,`comment`) VALUES" +
          "(?,?,?)",
        [req.body.id, req.body.author || "Anonymous", req.body.comment]
      );
    const comments = await mysqlDb
      .connection()
      .query("SELECT * FROM `comments` WHERE id =?", response[0].insertId);
    const [TextRow] = comments[0];
    return res.status(201).json({ comments: TextRow });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.delete("/comments/:id", async (req, res) => {
  try {
    await mysqlDb
      .connection()
      .query("DELETE FROM `comments` WHERE id =?", req.params.id);
    return res.status(200).json("Deleted");
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong, try again" });
  }
});

module.exports = router;
