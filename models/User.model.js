const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
  },
  password: String,
  email: String,
  animalsAdded: [
    {
    type: Schema.Types.ObjectId,
    ref: "Animal"
    }
  ],
  type:{
    type: String,
  }
});

const User = model("User", userSchema);

module.exports = User;
