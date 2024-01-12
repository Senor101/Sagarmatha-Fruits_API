const express = require("express");

const fruitsRouter = require('./routes/fruits.router')
const authRouter = require('./routes/auth.router')

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1 align='center'>Welcome to Sagarmatha Fruits API!!</h1>");
  });

router.use("/fruits", fruitsRouter);

router.use("/auth",authRouter)

module.exports = router;