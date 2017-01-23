const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const passport = require("passport")
const db = require("./db")

require('./passport.js')

express()
    .set("view engine", "hjs")
    // JSON AJAX
    .use(bodyParser.json())
    // HTML FORMS
    .use(bodyParser.urlencoded({extended: false}))
    // Session - a cookie for user information (in memory)
    // Redis  - stores sessions (persistant)
    .use(session({ 
        secret: "I Love Dogs",
        resave: false,
        saveUninitialized: false
    }))
    .use(passport.initialize())
    .use(passport.session())
    .get("/", (req, res, next) => {
        res.send({
            session:req.session,
            // Passport settings from session
            user: req.user,
            authenticated: req.isAuthenticated(),
        })
    })
    .get("/login", (req, res, next) => {
        res.render("login")
    })
    .post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login"
    }))
    .get("/logout", (req, res, next) => {
        req.session.destroy((err) =>{
            res.redirect("/login")
        })
    })
     .get("/signup", (req, res, next) => {
        res.render("signup")
    })
    .post("/signup", passport.authenticate("local-register", {
        successRedirect: "/",
        failureRedirect: "/signup"
    }))
    .listen(3000)
