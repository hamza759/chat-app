import {Server} from 'socket.io';
import http from 'http';
import express from 'express';


const app = express();
const server = http.createServer(app);
const io = new Server(server,{
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  }
});


const userSocketMap = {};   //{userId:socketID}



export const getReceiverSocketId = (recevierId) => {
	return userSocketMap[recevierId];
};

io.on('connection',(socket) => {
  console.log("user connected",socket.id)

  const userId = socket.handshake.query.userId;
  if(userId != "undefined") userSocketMap[userId] = socket.id;

  // io amit() is used to send the events  to all the connected clients
  io.emit("getonlineUsers", Object.keys(userSocketMap))

  // socket .on si ued to listen in the event  can be used both on client side and on server side
  socket.on('disconnect',() => {
    console.log("user disconnected",socket.id)

    delete userSocketMap[userId];
    io.emit("getonlineUsers", Object.keys(userSocketMap))
  })

})

export {app,io,server};