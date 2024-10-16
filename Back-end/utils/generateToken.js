import jwt from 'jsonwebtoken';

const gernatotokenAndsessionCookie =(userId,res) => 
  {
const token = jwt.sign({userId},process.env.JWT_SECRET,{
  expiresIn:'15d'

})  
res.cookie("jwt",token,{
  maxAge:15 * 24 * 60 * 60 * 1000,
  httpOnly:true,   // prevent xxs attack cross site scripting attacks
  sameSite:"strict", // csrf attack croos site request  frogery attacks
  secure:process.env.NODE_ENV !== "production" // only send cookie over https
})
  }
  export default gernatotokenAndsessionCookie;