const express = require("express");
const path = require("path");
const app = express();

// /../ because working out of src file!!!
// const staticAssets = __dirname + '/../public';

app
    // .use(express.static(staticAssets))
    .set("views", path.join(__dirname + '/../views'))
    .set("view engine", "hjs")
    .get('/', (req, res) => {
        var title = "My Title!"
        var tweets = [
            "What",
            "Cool",
            "DJ KHALED!!!"
        ]
        res.render("index", {
            title: title,
            tweets: tweets,
            showTweets: true,
            partials: {
                header: "header",
                tweets: "tweets"
            }
        })
    })
    .get('/api/profile', (req, res) => {
        var profile = {
            name:"Lenny",
            age:24
        }
        res.send(profile);
    })
;
    
app.listen(3000, function(){
    console.log("Server!!!")
});