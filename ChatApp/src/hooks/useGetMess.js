import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"

const useGetMess = () => {
 const [loading,setloading]= useState( )
const { messages,setMessages,SelectedConversation} = useConversation()

useEffect(() => {
   
  const getmess = async () => {
    setloading(true);
   try {
    const res =  await fetch(`/api/messages/${SelectedConversation._id}`);
    const data = await res.json();
    if(data.error) throw  new Error(data.error)
      setMessages(data)
   } catch (error) {
    toast.error(error.message)
   }finally {
    setloading(false);
   }
  } 
  if(SelectedConversation?._id) getmess()
},[SelectedConversation?._id,setMessages])
    
return{loading,messages}

}

export default useGetMess
