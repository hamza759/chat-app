import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
  senderId:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"User",
   required:true
  },
  recevierId:{
    type:mongoose.Schema.Types.ObjectId,
   ref:"User",
   required:true
  },
  message:{
    type:String,
    required:true
  }
  //  created at updated at
},{timestamps:true})

const Messsage = mongoose.model("Messsage" , messageSchema);
export default Messsage;