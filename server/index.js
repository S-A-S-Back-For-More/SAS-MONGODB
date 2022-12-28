
// *************NOTE: when installing packages=> stop server(ctrl+c), install packages, and restart server again*************************************

const express = require('express');
//config() help with having a dotenv file with vars in it
const dotenv = require('dotenv').config();
const{errHandler} = require('./middleware/errorMidddleware')
//ACCES PORT STORED IN DOTENV (if not working for some reason will access 3001)
const port = process.env.PORT || 3001;
const app = express();
//mongodb set up
// const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);
// mongoose.connect('mongodb+srv://admin1:password12345@cluster0.sphd033.mongodb.net/SAS-Travel?retryWrites=true&w=majority');



//middleware
app.use(express.json())
 .use(express.urlencoded({ extended: false }))

//accesing the router defined in routes folder
app.use('/api/posts', require('./routes/Posts'))
//err handler
app.use(errHandler)

//start server // ctrl + c --kill terminal
app.listen(port, () =>{console.log(`App listening on port ${port}`)});        