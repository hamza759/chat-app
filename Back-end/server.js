import express from "express";
import dotenv from "dotenv"
import cookieParser from  "cookie-parser"


import authRoutes from "./routes/auth.route.js"
import messagesRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"

import {app,server} from './socket/socket.js'


import connectMongodb from "./db/connectmongodb.js";

// const  app = express();


const PORT = process.env.PORT || 5000;//this mean post value should be in .evn folder or 3000


dotenv.config(); //load environment variables from.env file


app.use(express.json()); //to parse the incoming request  with json payloads (from req.body) 
app.use(cookieParser());


app.use("/api/auth",authRoutes)   //this is known as middle ware
app.use("/api/messages",messagesRoutes)
app.use("/api/users",userRoutes)

// app.get("/",(req,res)=> {
//   // root route http://localhost:5000;
//   res.send("hello world!");
// });

server.listen(5000,() => {
   connectMongodb()
  console.log(`Server is running at post ${PORT}`)
})


