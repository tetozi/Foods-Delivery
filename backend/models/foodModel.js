import mongoose from "mongoose";



const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name of pizza'],
        unique: true,
    },
    ingredients:{
        type:String
    },
    price: {
        type: Number,
        required: [true, "Pizza must have a  price"]
    },
    imageUrl: {
        type: String,
        required: [true, 'Pizza  must have a image']
    },
})

const Food = mongoose.model('Food', foodSchema)

export default Food