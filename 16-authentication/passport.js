// Authentication Library

const db = require("./db")
const bcrypt = require("bcrypt-nodejs")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

passport.use(new LocalStrategy(authenticate))
passport.use("local-register", new LocalStrategy({passReqToCallback: true}, register))


function authenticate(email, password, done){
    db("users")
        .where("email", email)
        .first()
        .then((user) => {
            // Never provide hackers with too much info
            if(!user || !bcrypt.compareSync(password, user.password)){
                return done(null, false, {message: "invalid user and password combination"})
            }

            done(null, user)
        }, done)
}

function register(req, email, password, done){
    db("users")
        .where("email", email)
        .first()
        .then((user) => {
            if(user){
                return done(null, false, {message: "an account with that email has already been created"})
            }
            if (password !== req.body.password2){
                return done(null, false, {message: "passwords don't match"})
            }

            const newUser = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: email,
                password: bcrypt.hashSync(password)
            };

            db("users")
                .insert(newUser)
                // An array of ids
                .then((ids) => {
                    newUser.id = ids[0]
                    done(null, newUser)
                })
        })

        
}

passport.serializeUser(function(user, done){
    // All you need to store is user id for cookie
    done(null, user.id)
})

passport.deserializeUser(function(id, done){
    db("users")
        .where("id", id)
        .first()
        .then((user) => {
            done(null, user)
        }, done)
})