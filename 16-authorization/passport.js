const bcrypt = require("bcrypt-nodejs")
const db = require("./db")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const GitHubStrategy = require("passport-github").Strategy

passport.use(new LocalStrategy(authenticate))
passport.use("local-register", new LocalStrategy({passReqToCallback: true}, register))

// OAuth Github
passport.use(new GitHubStrategy({
    clientID: '9a943b03e6bfaf44364b',
    clientSecret: 'fcec4fc1534d14391eaf0ba1e2c828097c7e1529',
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    
    // console.log(profile) -> Use this when first using OAUTH

    db("users")
      .where("oauth_provider", "github")
      .where("oauth_id", profile.username)
      .first()
      .then((user) => {
        if(user){
          return done(null, user)
        }

        const newUser = {
          oauth_provider: "github",
          oauth_id: profile.username,
        }

        return db("users")
          .insert(newUser)
          .then(ids => {
            newUser.id = ids[0]
            done(null, newUser)
          })
      })
  }
));

function authenticate(email, password, done){
  db("users")
    .where("email", email)
    .first()
    .then((user) => {
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return done(null, false, {message: "invalid user and password combination"})
      }

      done(null, user)
    }, done)
}

function register(req, email, password, done) {
  db("users")
    .where("email", email)
    .first()
    .then((user) => {
      if (user) {
        return done(null, false, {message: "an account with that email has already been created"})
      }
      if (password !== req.body.password2) {
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
        .then((ids) => {
          newUser.id = ids[0]
          done(null, newUser)
        })
    })
}


passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  db("users")
    .where("id", id)
    .first()
    .then((user) => {
      done(null, user)
    }, done)
})