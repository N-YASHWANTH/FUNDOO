import User from '../models/user.model'

export const loginUser = async(body)=>{
  const data=await User.findOne({
    email:body.email
  })
  if(!data){
    throw new Error ('User not found');
  }
  else if(data.password!=body.password){
    throw new Error ('Invalid User')
  }
  else{
    return data
  }
}