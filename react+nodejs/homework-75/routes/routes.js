const { Router } = require("express");
const router = Router();
const Vigenere = require("caesar-salad").Vigenere;

router.post("/encode", (req, res) => {
  const encode = Vigenere.Cipher(req.body.password).crypt(req.body.message);
  res.send(encode);
});

router.post("/decode", (req, res) => {
  const decode = Vigenere.Decipher(req.body.password).crypt(req.body.message);
  res.send(decode);
});

module.exports = router;
