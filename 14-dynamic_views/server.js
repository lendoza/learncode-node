const express = require("express")
const knex = require("knex")
const bodyParser = require("body-parser")

const staticAssets = __dirname + "/public";

const db = knex({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        database: "test",
    }
})

express()
    .use(bodyParser.json())
    .set("view engine", "hjs")
    .use(express.static(staticAssets))


    // View Routes 

    .get("/users", (req, res, next) => {
        db("users")
            // Async Promise
            .then((users) => {
                res.render("users", {
                    title: "All Users!",
                    users,
                })
            }, next)
    })

    .get("/tweets/:user_id", (req, res, next) => {
        const { user_id } = req.params;
        db("tweets")
            .where("user_id", user_id)
            .then((tweets) => {
                res.render("tweets", {
                    title: "My User Tweets!",
                    tweets,
                })
            }, next)
    })

    // REST API

    .post('/users', (req, res, next) => {
        // Can add validations
        db('users')
            .insert(req.body)
            .then((userIds) => {
                res.send(userIds)
            }, next)
    })
    .get('/users/:id', (req, res, next) => {
        const { id } = req.params;
        db('users')
            // where specifies one user
            .where('id', id)
            .first()
            .then((users) => {
                res.send(users)
            }, next)
    })
    .put('/users/:id', (req, res, next) => {
        const { id } = req.params;
        db('users')
            .where('id', id)
            .update(req.body)
            .then((result) => {
                if(result === 0){
                    return res.sendStatus(400)
                }
                res.sendStatus(200);
            }, next)
    })
    .delete('/users/:id', (req, res, next) => {
        const { id } = req.params;
        db('users')
            .where('id', id)
            .delete()
            .then((result) => {
                if(result === 0){
                    return res.sendStatus(400)
                }
                res.sendStatus(200);
            }, next)
    })
    .listen(3000)
