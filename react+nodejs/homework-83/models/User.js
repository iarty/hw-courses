const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: String
});

schema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

schema.set("toJSON", {
  transform: (doc, ret, options) => {
    delete ret.password;
    return ret;
  }
});

module.exports = model("User", schema);
