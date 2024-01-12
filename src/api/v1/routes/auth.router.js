const express = require("express");

const router = express.Router();

const authController = require("../controllers/auth.controller");

router.post("/login/admin", authController.adminLogin);

module.exports = router;