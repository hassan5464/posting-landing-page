import mongoose from "mongoose";


const {Schema} =mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:  true,
  },
  email: {
    type: String,
    required: true,
    unigue: true,
  },
  password:{
    type: String,
    required: true,
  },
  
},
{timesramps: true}
);

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User;
