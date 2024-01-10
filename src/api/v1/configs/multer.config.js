const multer = require("multer");

const storage = multer.memoryStorage()

const multerUploads = multer({storage:storage}).single("image")

module.exports = multerUploads;