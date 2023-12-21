import * as userService from '../services/user.service'
import HttpStatus from 'http-status-codes'

export const loginUser = async(req,res)=>{
  try {
    const data=await userService.loginUser(req.body)
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'User LoggedIn Successfully'
    })
  } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: error.message
      })
  }
}