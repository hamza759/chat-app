import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthcontext } from "../Context/Authcontext";

const useLogin = () => {
  const [loading,setloading] = useState();

  const{setauthUser}=useAuthcontext()

  const login = async (username,password) => {
    const success = handleinputserrors(username,password)
    if (!success) return;  // IF TEHRE IS ERROR RETURN OUT OF THIS FUNCTION ELSE RUN THE CODE BELOW
    setloading(true)
    try {
      const res = await fetch("/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({username,password})
      }) 
      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }
      
      localStorage.setItem("chat-user", JSON.stringify(data))
      setauthUser(data)

    } catch (error) {
      toast.error(error.message)
    }finally{
      setloading(false)
    }

  }
  return {loading,login}
}

export default useLogin


const handleinputserrors = (username,password) => {
  if ( !username || !password ) {
    toast.error("Please fill all the fields")
    return false
  }

return true
}
