import User from "../models/USER.model.js";
import bcrypt from "bcryptjs"
import gernatotokenAndsessionCookie from "../utils/generateToken.js";


export const signup = async(req, res) => { 
    try {
      const {fullname,username,password,confirmpassword,gender} = req.body;
      if(password !== confirmpassword) { 
       return res.status(404).json({error: "password don't match"});
      }
      const user = await User.findOne({username});
      if (user) {
        return res.status(409).json({error: "user already exists"});
      }
      // Hash Password
     const salt = await bcrypt.genSalt(8)
     const haspass = await bcrypt.hash(password,salt)

      const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`
      const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`

     const newUser = new User({
      fullname,
      username,
      password:haspass,
      gender,
      profilepic: gender === "male"? boyprofilepic : girlprofilepic,
     })

    if (newUser) {
      // gernate JWT token here

      gernatotokenAndsessionCookie(newUser._id, res);
      await newUser.save();
      

      res.status(201).json({
       _id: newUser._id,
       fullname: newUser.fullname,
       username: newUser.username,
       profilepic: newUser.profilepic,
      })
    }else{
      res.status(400).json({error:"invalid user data"})
    }

    } catch (error) {
      console.log("Error is singup controller",error.message)
      res.status(500).json({error: "internal server error in Signup"})
    }
}


export const login = async (req, res) => {
  try {
     const {username,password}=req.body;

    //  if (!username || !password) {
    //   return res.status(400).json({ error: "Username and password are required" });
    // }


     const user = await User.findOne({username});
     if (!user) {
      return res.status(400).json({error: "User not found!"})
    }

     const ispasscorrect = await bcrypt.compare(password, user?.password || "");

     if (!user || !ispasscorrect) {
       return res.status(400).json({error: "invalid username or password"})
     }


    gernatotokenAndsessionCookie(user._id,res)
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilepic: user.profilepic,
 
    })
  

  } catch (error) {
    console.log("Error is login controller",error.message)
      res.status(500).json({error: "internal server error"})
  }
}

export const logout = (req, res) => {
  try {
       res.cookie("jwt","",{ maxAge:0 });
       res.status(200).json({message:"sucessfully logged out"})
  } catch (error) {
    console.log("Error in logout controller",error.message)
      res.status(500).json({error: "internal server error"})
  }
}