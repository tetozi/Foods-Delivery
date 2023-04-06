import express from "express";
import { createFood, deleteProduct, getAllFood, getFood, updateFood } from '../controllers/foodContriler.js'
const router = express.Router()



router.post('/create', createFood)
router.get('/', getAllFood)
router.get('/:id', getFood)
router.patch('/:id', updateFood)
router.delete('/:id', deleteProduct)

export default router