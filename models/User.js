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


export default mongoose.models("User", userSchema)