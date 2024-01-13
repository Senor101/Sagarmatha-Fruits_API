const mongoose = require('mongoose');
const { float } = require('webidl-conversions');

const {Schema} = mongoose

const fruitSchema = new Schema({
    name : {
        type : String,
        required : [true, "Fruit name is required"],
        trim: true
    },
    price: {
        type: Number,
        required : [true, "Fruit price is required"],
        trim : true
    },
    imageUrl : {
        type:String
    },
    unit: String
})

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;