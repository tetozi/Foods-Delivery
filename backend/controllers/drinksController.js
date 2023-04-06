

import Drink from '../models/drinkModel.js';
import { catchAsync } from '../utils/catchAsync.js';




// CREATE PIZZA
export const createDrink = catchAsync(async (req, res, next) => {
    const newDrink = await Drink.create(req.body);

    res.status(201).json({
        status:'success',
        data:{
            drink: newDrink
        }
    })
})


export const getAllDrink = catchAsync( async (req, res, next) => {
  
    const drinks = await Drink.find()
    
    // SEND RESPONSE
    res.status(200).json(
     
        drinks
      
    );
 
});