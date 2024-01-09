const express = require('express');
const cors = require("cors");
const helmet = require("helmet")

const app = express();

const apiRouter = require("./api/v1/api")

app.use(helmet())
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/v1", apiRouter)

// app.use("")

module.exports = app;