// Task1: initiate app and run server at 3000
const express = require("express")
const app = new express();
const morgan = require("morgan")
const api = require("./routes/data")

const path = require('path');
app.use(express.static(path.join(__dirname + '/dist/FrontEnd')));
app.use(morgan("dev"))
app.use("/api",api)

require("dotenv").config()
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})


// Task2: create mongoDB connection
const mongoose = require("mongoose");
const { log } = require("console");
mongoose.connect(process.env.mongodb_url)
    .then(() => {
        console.log("Conneted to local DB");
    })
    .catch(() => {
        console.log("Error!! Connection lost..");
    })



//Task 2 : write api with error handling and appropriate api mentioned in the TODO below

app.get("/api", (req, res) => {
    try {
        console.log(req.body);
        res.send("welcome")
    }
    catch (error) {
        res.send(error)

    }
})

//TODO: get data from db  using api '/api/employeelist'




//TODO: get single data from db  using api '/api/employeelist/:id'





//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}






//TODO: delete a employee data from db by using api '/api/employeelist/:id'





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



