const express = require('express');
const app = express();
//mongodb set up
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://admin1:password12345@cluster0.sphd033.mongodb.net/SAS-Travel?retryWrites=true&w=majority')

//start server // ctrl + c --kill terminal
app.listen(3001, () =>{console.log('listening on port 3001')});