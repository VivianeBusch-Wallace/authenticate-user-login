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

// mongoose import for mongoDB >>
const mongoose = require("mongoose");

// SETUP >>

// for data  processing >>
app.use(express.json()); // << for being able to parse json data
app.use(express.urlencoded({ extended: true })); // << for being able to receive data from forms

// Notes and stuff >>
/*
Try to put mongoose in top, probably still works



*/
