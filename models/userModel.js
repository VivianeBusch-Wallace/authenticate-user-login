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
  role: String,
  avatar: String,
});

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;
