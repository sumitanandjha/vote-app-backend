require('dotenv').config();
const express = require("express");
const authRoute = require("./routes/authRoute");
const electionRoute = require('./routes/createElection');
const mongoose = require('mongoose');
const app = express();
const getElectionbyID = require('./routes/getElectionbyId');
const cors = require('cors');
const castVote = require('./routes/castVote');
const bodyParser = require('body-parser');
const getElection = require("./routes/getElection");
const cronJob = require('./tasks/cronJob');
const MONGO_URI = process.env.MONGO_URI;

// app.use('/',(req,res)=>{
//     res.json({message: "This is our first trial"});
// })


// const corsOptions = {
//     origin: 'https://voting-app-frontend-sandy.vercel.app/', // Replace with your frontend's actual URL
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.) to be sent
//     optionsSuccessStatus: 204 // Some legacy browsers (e.g., IE11) choke on 204
//   };
  
  app.use(cors());
  
app.use(bodyParser.json());

// Route for login and signup
app.use('/auth',authRoute);


// Route for creating election
app.use('/root',electionRoute);

// Route for getting elections
app.use('/all',getElection)

// Route for casting vote
app.use('/cast',castVote);

// Route to fetch election by id only
app.use('/election', getElectionbyID);

cronJob;

mongoose
    .connect(MONGO_URI)
    .then(()=>{
        app.listen(5000, ()=>{
            console.log("Listening to Port 5000");
        })
        console.log("Connected to database")
    })
    .catch((err)=>{
        console.log(err)
    })



console.log("Hello everyone");