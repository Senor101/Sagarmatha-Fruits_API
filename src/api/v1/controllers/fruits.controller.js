const Fruit = require("../models/fruits.model")

const Cloudinary = require("cloudinary").v2;

const DatauriParser = require("datauri/parser");
const parser = new DatauriParser();

const getFruits = async (req,res,next) => {
    try{
        const fruits = await Fruit.find();
        return res.status(200).json({
            message:"All fruits fetched successfully",
            data:fruits
        })
    }catch(error){
        next(error)
    }
}

const getFruitById = async (req,res,next) => {
    try{
        const fruitId = req.params.id;
        const fruit = await Fruit.findById(fruitId);
        return res.status(200).json({
            message: "Fruit fetched successfully",
            data: fruit
        })
    }catch(error){
        next(error)
    }
}

const createFruit = async (req,res,next) => {
    try{
        const {name,price} = req.body;
        const inputImage = req.file;
        let imageUrl = '';
        if(inputImage != null){
            const imageFile = inputImage.buffer;
            const result = parser.format(".png", imageFile);
            const imageData = await Cloudinary.uploader.upload(result.content, {
                folder :"Fruits",
                use_filename : "true",
                unique_filename : "false"
            });
            imageUrl = imageData.secure_url; 
            console.log(imageUrl)
        }
        const newFruit = await Fruit.create({
            name: name,
            price: price,
            imageUrl: imageUrl
        });
        console.log(newFruit)
        return res.status(201).json({
            message: "Fruit created successfully",
            data: newFruit
        })
    }catch(error){
        next(error)
    }
}

const updateFruit = async (req,res,next) => {
    try{
        const {name,price} = req.body;
        let updates = {};
        const fruitId = req.params.id;
        const fruit = await Fruit.findById(fruitId);
        if(fruit == null){
            return res.status(404).json({
                message: "Fruit not found"
            })
        }
        if(req.file){
            const imageFile = req.file.buffer;
            const result = parser.format(".png", imageFile);
            const imageData = await Cloudinary.uploader.upload(result.content, {
                folder :"Fruits",
                use_filename : true,
                unique_filename : false
            });
            updates.imageUrl = imageData.secure_url; 
        }

    }catch(error){
        next(error)
    }
}

const deleteFruit = async (req,res,next) => {
    try{
        const fruitId = req.params.id;
        const fruit = await Fruit.findById(fruitId);
        if(fruit == null){
            return res.status(404).json({
                message: "Fruit not found"
            })
        }
        const deletedFruit = await Fruit.findByIdAndDelete(fruitId);
        return res.status(200).json({
            message: "Fruit deleted successfully",
            data: deletedFruit
        })
    }catch(error){
        next(error)
    }
}


module.exports = {
    getFruits,
    getFruitById,
    updateFruit,
    createFruit,
    deleteFruit
}