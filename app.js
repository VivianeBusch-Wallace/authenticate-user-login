// ALL IMPORTS >>

// initializing express >>
const express = require("express");
const app = express();

// starting morgan >>
const morgan = require("morgan");
app.use(morgan("dev"));

// cookie-parser and express-session >>
const session = require("express-session");
const cookieParser = require("cookie-parser");

// express-validator >>
const validator = require("express-validator");

// view imports >>
const hbs = require("express-handlebars");
const path = require("path");

// authenticate
const authentication = require("./routes/auth");

// SETUP >>

// for data  processing >>
app.use(express.json()); // << for being able to parse json data (from requests)
app.use(express.urlencoded({ extended: true })); // << for being able to receive data from forms

// setting up handlebars as view engine >>
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutDir: __dirname + "views/layouts/",
  })
);

// validation setup >>
const { body, validationResult } = validator;

// cookies >>
app.use(cookieParser());
// sessions >>
app.use(
  expressSession({
    secret: "secretSecret", // later to be put into .env
    saveUninitialized: false,
    resave: false,
  })
);

// connecting to MongoDB (database) >>
// mongoose import for mongoDB >>
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connected successfully."))
  .catch((err) => {
    console.log(`There was an error connecting to the database ${err.message}`);
  });

// allow uploads >>
app.use("/uploads", express.static("uploads")); // need to create dir myself?

// root route >>
app.use("/", authentication);

// const users = require("./routes/users");
// app.use("/users", users);
// const user = require("./routes/user");
// app.use("/user", user);

// Notes and stuff >>
/*
Try to put mongoose in top, probably still works



*/
