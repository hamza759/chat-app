import User from "../models/USER.model.js";
export const getUsersforsidebar = async (req,res) =>{
  try {
    
   const loggedUserId = req.user._id;
   const filterUser = await User.find({_id:{$ne:loggedUserId}}).select("-password") // give all users except the one how looged in or it can be me (current authticated user)
   res.status(200).json(filterUser)

  } catch (error) {
    console.log("Error in getUserforsidebar",error.message)
    res.status(500).json({error:"internal server error"})
  }
}