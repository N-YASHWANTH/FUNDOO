import User from '../models/user.model'
import bcrypt from 'bcrypt'

export const loginUser = async(body)=>{
  const data=await User.findOne({
    email:body.email
  })
  if(!data){
    throw new Error ('User doesnot exists');
  }
  else if(!bcrypt.compare(data.password,body.password)){
    throw new Error('Invalid password')
  }
  else{
    return data
  }
}