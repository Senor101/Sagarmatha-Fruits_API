const express = require("express");

const fruitsRouter = require('./routes/fruits.router')

const router = express.Router();

router.use("/fruits", fruitsRouter);

module.exports = router;