import {Schema,model} from 'mongoose'

const userSchema = new Schema(
  {
    userName: { 
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    confirmPassword: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

export default model('User',userSchema)
