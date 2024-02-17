const Fruit = require("../models/fruits.model")

const Cloudinary = require("cloudinary").v2;

const DatauriParser = require("datauri/parser");
const parser = new DatauriParser();

const getFruits = async (req,res,next) => {
    try{
        const {page = 1, limit = 10} = req.query;
        const fruits = await Fruit.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({createdAt: -1})
        .exec();
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
        if(!fruit){
            return res.status(404).json({
                error: "Fruit not found"
            })
        }
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
        const {name,price,unit} = req.body;
        const inputImage = req.file;
        let imageUrl = '';
        if(inputImage != null){
            const imageFile = inputImage.buffer;
            const result = parser.format(".png", imageFile);
            const imageData = await Cloudinary.uploader.upload(result.content, {
                folder :"Fruits",
                use_filename : true,
                unique_filename : false
            });
            imageUrl = imageData.secure_url;
        }
        const newFruit = await Fruit.create({
            name: name,
            price: price,
            imageUrl: imageUrl,
            unit:unit
        });

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
        const {name,price,unit} = req.body;
        const fruitId = req.params.id;
        const fruit = await Fruit.findById(fruitId);
        let newImageUrl;
        if(!fruit){
            return res.status(404).json({
                error: "Fruit not found"
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
            newImageUrl = imageData.secure_url;
        }
        const updates = {
            name: name || fruit.name,
            price: price || fruit.price,
            imageUrl: newImageUrl || fruit.imageUrl,
            unit:unit || fruit.unit
        }
        Object.assign(fruit, updates);
        const updatedFruit = await fruit.save();
        return res.status(200).json({
            message: "Fruit updated successfully",
            data: updatedFruit
        })

    }catch(error){
        next(error)
    }
}

const deleteFruit = async (req,res,next) => {
    try{
        const fruitId = req.params.id;
        const fruit = await Fruit.findById(fruitId);
        if(!fruit){
            return res.status(404).json({
                error: "Fruit not found"
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
