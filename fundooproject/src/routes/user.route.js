import express from 'express'
import * as userController from '../controllers/user.controller'

const router = express.Router()

router.post('/loginUser',userController.loginUser) 

export default router  
