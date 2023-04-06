import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import AppError from './error/AppError.js';
import morgan from 'morgan';
import {globalError} from './middleware/errorMidleware.js'
import authRouter from './Routes/authRouter.js'
import foodRouter from './Routes/foodRouter.js'
import drinkRouter from './Routes/drinkRouter.js'
import checkoutRouter from './Routes/checkoutRouter.js'



const app = express()
app.use(express.static('public'))
app.use(morgan('combined'))

app.use(express.json());

app.use(cors());

app.use('/user', authRouter)
app.use('/food', foodRouter)
app.use('/drink', drinkRouter)
app.use('/shopingcart', checkoutRouter)
app.all('*', (req, res, next) => {
 
    next(new AppError('Page not found '), 404)
  })
  
app.use(globalError)



export default app