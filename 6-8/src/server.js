const express = require("express");

const app = express();

app
    // App use always fires
    .use((req, res, next) => {
        var profile = {
            name:"Lenny",
            age:25
        }
    })
    .get("/", (req, res) => {
        res.send("Hello World!")
    })

app.listen(3000, function(){
    console.log("Server!!!");
});