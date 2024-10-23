import { useEffect } from "react";
import { UseSocketContext } from "../Context/SocketContext"
import useConversation from "../zustand/useConversation"
import notificationSound  from "../assets/sounds/mixkit-long-pop-2358.wav"
import { useAuthcontext } from "../Context/Authcontext";

const useListenMess = () => {

 const {socket} =  UseSocketContext();
 const {messages,setMessages} =  useConversation();
const {authUser} = useAuthcontext();

  useEffect(()=>{
//   socket?.on('newMessage',(newMess)=>{
//     newMess.ShouldShake = true
//     const sound = new Audio(notificationSound)
//     sound.play()
//     setMessages([...messages, newMess])
//   });

socket?.on('newMessage', (newMess) => {
  if (newMess.recevierId === authUser._id) {
    newMess.ShouldShake = true;
    const sound = new Audio(notificationSound);
    sound.play();
    setMessages([...messages, newMess]);
  }
});
  return () => 
    socket?.off('newMessage');
 },[socket, messages, setMessages, authUser._id])
}

export default useListenMess


