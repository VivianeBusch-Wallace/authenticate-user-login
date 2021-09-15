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

// cookies >>

// sessions >>

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

// root route >>

// Notes and stuff >>
/*
Try to put mongoose in top, probably still works



*/
