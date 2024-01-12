const express = require('express');

const multerUploads = require("../configs/multer.config")

const router = express.Router();

const fruitController = require("../controllers/fruits.controller");
const isAuthorized = require('../middlewares/isAuthorized.middleware');

router.get("/",isAuthorized, fruitController.getFruits)

router.get("/:id",fruitController.getFruitById)

router.post("/",isAuthorized,multerUploads,fruitController.createFruit)

router.put("/:id",multerUploads, fruitController.updateFruit)

router.delete("/:id",fruitController.deleteFruit)

module.exports = router;