const { Router } = require("express");
const router = Router();
const UserSchema = require("../models/User");
const nanoid = require("nanoid");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const existing = await UserSchema.findOne({ username });
  if (existing) {
    return res.status(400).json({ message: "Username is already taken" });
  }
  const user = new UserSchema({
    username,
    password
  });
  await user.save();
  return res.status(201).json({ message: "User has been created" });
});

router.post("/sessions", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserSchema.findOne({ username });
  if (!user) {
    return res.status(400).json({ messages: "User not found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Wrong password, try again" });
  }

  const token = nanoid();
  user.token = token;
  await user.save();
  res.status(200).json({ token });
});

module.exports = router;
