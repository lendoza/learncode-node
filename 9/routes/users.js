const express = require("express");
const router = express.Router();

router
    .get("/", (req, res) => {
        res.send(users);
    })
    .get("/:id", (req, res) => {
        const { id } = req.params;
        const user = users.find(user => user.id == id);

        if(user){
            res.send(user);

        } else{
            res.status(404).send(`User ${id} does not exist`);
        }
    })
    .delete("/:id", (req, res) => {
        const { id } = req.params;
        const index = users.findIndex(user => user.id == id);

        if(index > -1){
            users.splice(index, 1);
            res.sendStatus(200);
        } else{
            res.status(404).send(`User ${id} does not exist`);
        }
    })
    .post("/", (req, res) => {
        console.log(req.body)
        res.send("mr.postman")
    })
;

module.exports = router;

// Stored in Memory so it won't permanently update

const users = [{
  "id": 1,
  "first_name": "Laura",
  "last_name": "Franklin",
  "email": "lfranklin0@youku.com",
  "gender": "Female",
  "ip_address": "38.12.212.204"
}, {
  "id": 2,
  "first_name": "Eric",
  "last_name": "Burke",
  "email": "eburke1@toplist.cz",
  "gender": "Male",
  "ip_address": "227.174.51.110"
}, {
  "id": 3,
  "first_name": "Terry",
  "last_name": "Murphy",
  "email": "tmurphy2@abc.net.au",
  "gender": "Male",
  "ip_address": "152.181.208.75"
}, {
  "id": 4,
  "first_name": "Amanda",
  "last_name": "Carpenter",
  "email": "acarpenter3@fema.gov",
  "gender": "Female",
  "ip_address": "225.179.49.14"
}, {
  "id": 5,
  "first_name": "Christine",
  "last_name": "Ruiz",
  "email": "cruiz4@mashable.com",
  "gender": "Female",
  "ip_address": "6.73.17.105"
}, {
  "id": 6,
  "first_name": "Jason",
  "last_name": "Morris",
  "email": "jmorris5@nationalgeographic.com",
  "gender": "Male",
  "ip_address": "37.63.63.246"
}, {
  "id": 7,
  "first_name": "Lois",
  "last_name": "Matthews",
  "email": "lmatthews6@sfgate.com",
  "gender": "Female",
  "ip_address": "157.178.199.99"
}, {
  "id": 8,
  "first_name": "Nancy",
  "last_name": "Gonzales",
  "email": "ngonzales7@biglobe.ne.jp",
  "gender": "Female",
  "ip_address": "121.93.191.142"
}, {
  "id": 9,
  "first_name": "Billy",
  "last_name": "Martinez",
  "email": "bmartinez8@patch.com",
  "gender": "Male",
  "ip_address": "76.49.103.63"
}, {
  "id": 10,
  "first_name": "Jonathan",
  "last_name": "Webb",
  "email": "jwebb9@google.pl",
  "gender": "Male",
  "ip_address": "150.218.197.148"
}, {
  "id": 11,
  "first_name": "Craig",
  "last_name": "Nguyen",
  "email": "cnguyena@spiegel.de",
  "gender": "Male",
  "ip_address": "27.61.90.237"
}, {
  "id": 12,
  "first_name": "Maria",
  "last_name": "Gilbert",
  "email": "mgilbertb@auda.org.au",
  "gender": "Female",
  "ip_address": "74.125.56.66"
}, {
  "id": 13,
  "first_name": "Julia",
  "last_name": "Reid",
  "email": "jreidc@rediff.com",
  "gender": "Female",
  "ip_address": "162.237.76.186"
}, {
  "id": 14,
  "first_name": "Randy",
  "last_name": "Phillips",
  "email": "rphillipsd@yale.edu",
  "gender": "Male",
  "ip_address": "137.243.144.246"
}, {
  "id": 15,
  "first_name": "Wayne",
  "last_name": "Kim",
  "email": "wkime@squidoo.com",
  "gender": "Male",
  "ip_address": "199.140.11.253"
}, {
  "id": 16,
  "first_name": "Jerry",
  "last_name": "Romero",
  "email": "jromerof@deviantart.com",
  "gender": "Male",
  "ip_address": "143.186.59.126"
}, {
  "id": 17,
  "first_name": "Victor",
  "last_name": "Berry",
  "email": "vberryg@samsung.com",
  "gender": "Male",
  "ip_address": "32.204.27.224"
}, {
  "id": 18,
  "first_name": "Andrea",
  "last_name": "Jones",
  "email": "ajonesh@si.edu",
  "gender": "Female",
  "ip_address": "66.117.220.241"
}, {
  "id": 19,
  "first_name": "Julia",
  "last_name": "Robertson",
  "email": "jrobertsoni@hao123.com",
  "gender": "Female",
  "ip_address": "169.255.51.128"
}, {
  "id": 20,
  "first_name": "Christina",
  "last_name": "Henry",
  "email": "chenryj@dell.com",
  "gender": "Female",
  "ip_address": "41.31.50.224"
}];