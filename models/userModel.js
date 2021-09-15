// authentication of user (connected to sessionModel)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  username: {
    type: String,
    required: "You have to provide a username",
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: "You have to provide a password",
  },
  role: String, // example >> "ADMIN"
  avatar: String, // is string because is a path to an image
});

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;
