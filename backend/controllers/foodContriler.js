import Food from "../models/foodModel.js";
import { catchAsync } from '../utils/catchAsync.js';


export const getAllFood = catchAsync( async (req, res, next) => {
  
    const foods = await Food.find()
    
    // SEND RESPONSE
    res.status(200).json(
     
         foods
      
    );
 
});

// GET SINGLE PIZZA
export const getFood = catchAsync( async (req, res) => {

    const food = await Food.findById(req.params.id);
    
   // Return ERROR
    if(!food) {
      return  next(new AppError("Pizza not found"), 404)
      }

    res.status(200).json(food);
  
});




// CREATE PIZZA
export const createFood = catchAsync(async (req, res, next) => {
    const newPizza = await Food.create(req.body);

    res.status(201).json({
        status:'success',
        data:{
            food: newPizza
        }
    })
})


//Update Food
export const updateFood = catchAsync( async (req, res, next) => {
  
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
       runValidators: true
    });
    if(!food) {
      return  next(new AppError("Product not found"), 404)
      }

    res.status(200).json({
      status: 'success',
      data: {
        food
      }
    });

});

export const deleteProduct = catchAsync( async (req, res, next) => {
  
  const food =  await Food.findByIdAndDelete(req.params.id);

    if(!food) {
      return  next(new AppError("Product not found"), 404)
      }

    res.status(204).json({
      status: 'success',
      data: null
    });
 
});
