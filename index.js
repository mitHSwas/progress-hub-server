const express = require("express")
const app = express()
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");

app.get("/", (req, res) => {
    res.send("Progress hub is generating wait bro...")
})

app.get("/category", (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log("Progress hub server is listening on port", port)
})