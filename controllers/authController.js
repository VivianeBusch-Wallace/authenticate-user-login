const User = require("../models/userModel");

// authentication functions

const accessPermission = {};

// checking if the user is an admin >>
accessPermission.roleCheckMW = (req, res, next) => {
  if (req.cookies.role !== "ADMIN") {
    return res
      .status(401)
      .send(
        "Sorry, you are not the admin.<br> <a href='/'>Cancel and go to Home</a>"
      );
  }
  next();
};

// checking if user is allowed to delete anything >>
accessPermission.allowedToDeleteMW = async (req, res, next) => {
  const id = req.params.id;

  // if the user is an admin or if his user ID from the cookies matches the ID from params >>
  if (req.cookies.role == "ADMIN" || req.cookies.user_id == id) {
    next();
  } else {
    return res
      .status(401)
      .send(
        "Sorry, you don't have the permissions needed to delete.<br> <a href='/'>Cancel and go to Home</a>"
      );
  }
};

// checking if the user is allowed to view >>
accessPermission.allowedToViewMW = async (req, res, next) => {
  const username = req.params.name;

  //   const user = await User.findOne({ username : username});
  const user = await User.findOne({ username });

  if (req.cookies.role == "ADMIN" || req.cookies.user_id == user._id) {
    next();
  } else {
    return res
      .status(401)
      .send(
        "Sorry, you are not allowed to view.<br> <a href='/'>Cancel and go to Home</a>"
      );
  }
};

module.exports = accessPermission;
