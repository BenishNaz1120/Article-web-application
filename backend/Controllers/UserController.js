const express = require("express");
const router = express.Router();
const User = require("../Modal/Usermodal");
const bcrypt = require("bcrypt");

router.get("/:email/:password", async (req, res) => {
    const email = req.params.email;
    const password = req.params.password;
    const get = await User.findOne({ email: email });
    const hash = await get.password;
    console.log(hash);
    const comapre = await bcrypt.compare(password, hash);
    // console.log(comapre);
    if (!comapre) {
        console.log("error");
    } else {
        res.send(comapre);
    }
});

router.post("/", async (req, res) => {
    const users = await User(req.body);
    password = users.password;
    const saltPasssword = await bcrypt.genSalt(10);

    bcrypt
        .hash(password, saltPasssword)
        .then((hash) => {
            users.password = hash;
        })
        .then(() => users.save())
        .then((users) => {
            res.send(users);
        })
        .catch((err) => {
            res.status(404).send(err.message);
        });
});
router.get("/:email", (req, res) => {
    let email = req.params.email;
    //console.log(getid);
    const get = User.findOne({ email: email });
    get
        .then((get) => {
            res.send(get);
        })
        .catch((err) => {
            res.status(404).send(err.message);
        });
});

module.exports = router;
