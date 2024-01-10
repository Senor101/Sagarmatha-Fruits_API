const express = require('express');

const multerUploads = require("../configs/multer.config")

const router = express.Router();

const fruitController = require("../controllers/fruits.controller")

router.get("/",fruitController.getFruits)

router.get("/:id",fruitController.getFruitById)

router.post("/",multerUploads,fruitController.createFruit)

router.put("/:id",fruitController.updateFruit)

router.delete("/:id",fruitController.deleteFruit)

module.exports = router;