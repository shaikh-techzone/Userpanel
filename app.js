const express = require('express');
// var session = require('express-session');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const flash = require('connect-flash');

//Importing Routes
const home = require('./routes/home')

//Creating express app
const app = express();

//Declaring port
const port = process.env.port || 8070;

//Register view engine
app.set('view engine', 'ejs');

//Middleware and Static files
app.use(express.static('public'));
// app.use('/uploads',express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(flash());



//Database URI
const dbURI = 'mongodb+srv://wicked:test12345@mongoprojects.8mmhw.mongodb.net/fyp?retryWrites=true&w=majority';

//Connection to DB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        //Server listening
        app.listen(port, () => {
            console.log(`Server in action at port: ${port}`);
        });
        console.log('Connected to DB');
    })
    .catch((err) => console.log('Error: ', err));

    app.use('/', home);


