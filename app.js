const express = require('express');
const app = express();

// 
const http = require("http");

const socketio = require ("socketio");


app.get("/", function (req,res){
    res.send("hii");
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});