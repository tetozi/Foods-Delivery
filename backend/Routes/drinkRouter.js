import express from "express";
import { createDrink ,getAllDrink} from "../controllers/drinksController.js";



const router =  express.Router()


router.post('/create', createDrink)
router.get('/',getAllDrink )


export default router