const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const Cardcontroller = require("./Controllers/CardController");

app.listen(4000, () => {
    console.log("port is conected");
});
app.use(cors());

//DB Conectionnpx
mongoose.set("strictQuery", false);
mongoose
    .connect("mongodb://127.0.0.1:27017/ET-DB", { useNewUrlParser: true })
    .then(() => {
        console.log("db is connected");
    });
app.use(bodyparser.json());
app.use("/card", Cardcontroller);
