const express = require("express")
const app = express()
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Progress hub is generating wet bro...")
})

app.listen(port, () => {
    console.log("Progress hub server is listening on port", port)
})