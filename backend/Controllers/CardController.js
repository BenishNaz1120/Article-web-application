const express = require("express");
const router = express.Router();
const Cardmodal = require("../Models/Cardmodal");

router.post("/", async (req, res) => {
    try {
        const card = await Cardmodal(req.body);
        card.save();
        res.send(card);
    } catch {
        console.log(error);
    }
});

//Get all data
router.get("/", async (req, res) => {
    const card = await Cardmodal.find();
    res.send(card);
});
//get data by id
router.get("/:id", async (req, res) => {
    const card = await Cardmodal.findById(req.params.id);
    res.send(card);
});
//for delete card
router.delete("/:id", (req, res) => {
    let getid = req.params.id;
    console.log(getid);
    Cardmodal.findByIdAndDelete(getid)

        .then((card) => {
            res.send(card);
        })
        .catch((err) => {
            res.status(404).send(err.message);
        });
});

router.put("/:id", async (req, res) => {
    const card = await Cardmodal.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    });

    res.send(card);
});
module.exports = router;