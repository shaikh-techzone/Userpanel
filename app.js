const express = require("express");
// var session = require('express-session');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const flash = require("connect-flash");

//Importing Routes
const home = require("./routes/home");
const about = require("./routes/about");
const joblist = require("./routes/job-list");
const collegelist = require("./routes/college-list");
const internshiplist = require("./routes/internship-list");
const scholarshiplist = require("./routes/scholarship-list");
const unilist = require("./routes/university-list");

const jobdetail = require("./routes/job-detail");
const collegedetail = require("./routes/college-detail");
const internshipdetail = require("./routes/internship-detail");
const scholarshipdetail = require("./routes/scholarship-detail");
const unidetail = require("./routes/university-detail");
const contact = require("./routes/contact");

//Creating express app
const app = express();

//Declaring port
const port = process.env.port || 8070;

//Register view engine
app.set("view engine", "ejs");

//Middleware and Static files
app.use(express.static("public"));
// app.use('/uploads',express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(flash());

//Database URI
const dbURI =
  "mongodb+srv://wicked:test12345@mongoprojects.8mmhw.mongodb.net/fyp?retryWrites=true&w=majority";

//Connection to DB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    //Server listening
    app.listen(port, () => {
      console.log(`Server in action at port: ${port}`);
    });
    console.log("Connected to DB");
  })
  .catch((err) => console.log("Error: ", err));

app.use("/", home);
app.use("/", about);
app.use("/", joblist);
app.use("/", collegelist);
app.use("/", internshiplist);
app.use("/", scholarshiplist);
app.use("/", unilist);
app.use("/", jobdetail);
app.use("/", collegedetail);
app.use("/", internshipdetail);
app.use("/", scholarshipdetail);
app.use("/", unidetail);
app.use("/", contact);
