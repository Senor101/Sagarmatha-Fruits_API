const express = require('express');

const multerUploads = require("../configs/multer.config")

const router = express.Router();

const fruitController = require("../controllers/fruits.controller");
const isAuthorized = require('../middlewares/isAuthorized.middleware');

router.get("/", fruitController.getFruits)

router.get("/:id",fruitController.getFruitById)

router.post("/",isAuthorized, multerUploads,fruitController.createFruit)

router.put("/:id",isAuthorized, multerUploads, fruitController.updateFruit)

router.delete("/:id",isAuthorized, fruitController.deleteFruit)

module.exports = router;