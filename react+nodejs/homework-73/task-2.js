const express = require("express");
const port = 8000;
const app = express();
const Vigenere = require("caesar-salad").Vigenere;
const key = "supersecretkey";

app.get("/", (req, res) => {
  res.redirect("/encode/Hello-World");
});

app.get("/encode/:word", (req, res) => {
  const encode = Vigenere.Cipher(key).crypt(req.params.word);
  res.send(`Encode: ${encode}`);
});

app.get("/decode/:word", (req, res) => {
  const decode = Vigenere.Decipher(key).crypt(req.params.word);
  res.send(`Decode: ${decode}`);
});

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
