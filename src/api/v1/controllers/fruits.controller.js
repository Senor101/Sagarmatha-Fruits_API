const Fruit = require("../models/fruits.model")

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

    }catch(error){
        next(error)
    }
}

const updateFruit = async (req,res,next) => {
    try{

    }catch(error){
        next(error)
    }
}

const deleteFruit = async (req,res,next) => {
    try{
        const fruitId = req.params.id;
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