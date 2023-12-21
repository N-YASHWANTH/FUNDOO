import User from '../models/user.model'
import bcrypt from 'bcrypt'

export const registerUser = async(body)=>{
  const data=await User.findOne({
    email:body.email
  })
  if(data!=null){
    throw new Error ('User already exists');
  }
  else{
    const hashedPassword=await bcrypt.hash(body.password,10)
    const data=await User.create({
      ...body,
      password: hashedPassword
    })
    return data
  }
}