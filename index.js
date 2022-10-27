const express = require("express")
const app = express()
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/courseDetails.json");

app.get("/", (req, res) => {
    res.send("Progress hub is generating wait bro...")
})

app.get("/category", (req, res) => {
    res.send(categories);
})
app.get("/category/:id", (req, res) => {
    const id = req.params.id;
    const course = courses.filter(course => course.category_id === id)
    res.send(course);
})

app.get("/courses", (req, res) => {
    res.send(courses)
})

app.get("/courseDetails/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log("Progress hub server is listening on port", port)
})