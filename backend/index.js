const { json } = require("express");
const express = require("express");
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const courseRoutes = require('./routes/courseRoutes')
const instructorRoutes = require('./routes/instructorRoutes')
const lectureRoutes = require("./routes/lectureRoutes")
const authRoutes = require("./routes/authRoutes")
require("dotenv").config()

const corsConfig = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(json())

app.use(cors(corsConfig));

app.use("/api/courses",courseRoutes)
app.use("/api/lectures",lectureRoutes)
app.use("/api/instructors",instructorRoutes)
app.use("/api/auth",authRoutes)

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    app.listen(PORT, () => {
        console.log("connected")
    })
})


app.get("/", (req, res) => {
    console.log("called")
    res.send("connected")
})
