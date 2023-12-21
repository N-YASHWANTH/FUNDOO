import * as userService from '../services/user.service'
import HttpStatus from 'http-status-codes'
import jwt from 'jsonwebtoken'

const secretkey="Yash@123"
export const newUser=async(req,res)=>{
  try{
    const data=await userService.registerUser(req.body)
    const token=jwt.sign({user:data},secretkey) 
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      token: token,
      message: 'User Created Successfully'
    })
  }catch(error){
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    })
  }
}

export const loginUser = async(req,res)=>{
  try {
    const data = await userService.loginUser(req.body)
    const token = jwt.sign({user:data},secretkey)
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      token: token,
      message: 'User logged in Successfully'
    })
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: error.message
    })
  }
}