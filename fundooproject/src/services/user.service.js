import User from '../models/user.model'
import bcrypt from 'bcrypt'

export const loginUser = async(body)=>{
  const data=await User.findOne({
    email:body.email
  })
  if(!data){
    throw new Error ('User doesnot exists');
  }
  const rs=await bcrypt.compare(body.password,data.password)
  if(!rs){
    throw new Error('Invalid password')
  }
  return data
}


