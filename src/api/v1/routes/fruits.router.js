const express = require('express');

const router = express.Router();

const fruitController = require("../controllers/fruits.controller")

router.get("/",fruitController.getFruits)

router.get("/:id",fruitController.getFruitById)

router.post("/",fruitController.createFruit)

router.put("/:id",fruitController.updateFruit)

router.delete("/:id",fruitController.deleteFruit)

module.exports = router;