import mongoose from "mongoose";


const drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name of drink'],
        unique: true,
    },
    price: {
        type: Number,
        required: [true, "Product must have a  price"]
    },
    ingredients:{
        type:String
    },imageUrl: {
        type: String,
        required: [true, 'Product  must have a image']
    },

})


const Drink = mongoose.model('Drink', drinkSchema )

export default Drink