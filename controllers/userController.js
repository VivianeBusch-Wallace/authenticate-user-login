const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Session = require("../models/sessionModel");
const uuid = require("uuid").v4; // for unique IDs, v4 = version 4, v5 is not compatible

const userControllers = {};

// GET all users >>

// POST a new user - registration >>

// POST user for login >>

// Notes
// try to separate login function into middlware and controller function
