
// *************NOTE: when installing packages=> stop server(ctrl+c), install packages, and restart server again*************************************

const express = require('express');
//---help with the terminal GUI by being able to change text colors in terminal
const colors = require('colors');
//config() help with having a dotenv file with vars in it
const dotenv = require('dotenv').config();
const{errHandler} = require('./middleware/errorMidddleware')
//mongodb conn
const connectDB = require('./config/db')
connectDB()

const cors = require('cors')


//ACCES PORT STORED IN DOTENV (if not working for some reason will access 3001)
const port = process.env.PORT || 3001;
const app = express();
//mongodb set up




//middleware
app.use(express.json())
 .use(express.urlencoded({ extended: false }))

//accesing the router defined in routes folder
app.use('/api/posts', require('./routes/Posts'))
//err handler
app.use(errHandler)

// const corsOptions ={
//     origin:'http://localhost:5000/api/posts', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

//start server // ctrl + c --kill terminal
app.listen(port, () =>{console.log(`App listening on port ${port}`)});        