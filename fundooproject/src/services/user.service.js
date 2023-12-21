import User from '../models/user.model'
import bcrypt from 'bcrypt'

export const registerUser = async(body)=>{
  const data = await User.findOne({
    email:body.email
  })
  if(data!=null){
    throw new Error('User already Exists')
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