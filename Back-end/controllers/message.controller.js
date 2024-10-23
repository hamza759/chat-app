import Conversation from "../models/conversation.model.js";
import Messsage from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";


export const sendMessage = async (req,res) => {
  try {
    const {message} = req.body;
    const {id: recevierId} = req.params;
    const senderId = req.user._id

  let conversation = await Conversation.findOne({
    participants:{$all:[senderId,recevierId]},
  })

  if(!conversation){
    conversation = new Conversation({
      participants:[senderId,recevierId],
    })
  }

  const newMessage = new Messsage({
    senderId,
    recevierId,
    message,
  })

  if (newMessage) {
    conversation.messages.push(newMessage._id)
  }
 
  // await conversation.save()
  // await newMessage.save()

  await Promise.all([conversation.save(),newMessage.save()]);

  
  
		// SOCKET IO FUNCTIONALITY WILL GO HERE
		const receiverSocketId = getReceiverSocketId(recevierId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
      console.log(`Sending message to user: ${recevierId} at socket: ${receiverSocketId}`);

		}



  res.status(201).json(newMessage) 
 
  } catch (error) {
    console.log("error in sending message controller",error.message)
    res.status(500).json({error: "internal server error"})
  }
}

export const getMessages = async (req, res) => {
  try {

    const {id:userTOCHATId} = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants:{$all:[senderId,userTOCHATId]},
    }).populate("messages")
    
    if (!conversation) return res.status(200).json([])
    const messages = conversation.messages

    res.status(200).json(messages)
    
  } catch (error) {
    console.log("error in getting message controller",error.message)
    res.status(500).json({error: "Error in getting message controller"})
  }
}
