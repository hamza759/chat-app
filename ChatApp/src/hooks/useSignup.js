import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthcontext } from "../Context/Authcontext";

const useSignup = () => {

  const [loading,setloading] = useState(false);
  const{setauthUser} = useAuthcontext()
 
  const signup = async({fullname,username,password,confirmpassword,gender}) => {
  const success = handleinputserrors({fullname,username,password,confirmpassword,gender})
  if (!success) return;

  setloading(true)
   try {
     const res = await fetch("/api/auth/signup",{
        method:"POST",
        headers:{"Content-type": "application/json"},
        body:JSON.stringify({fullname,username,password,confirmpassword,gender})
     })
     const data = await res.json();
     if (data.error) {
         throw new Error(data.error);

     }
     
     localStorage.setItem("chat-user", JSON.stringify(data));
     setauthUser(data)

   } catch (error) {
      toast.error(error.message)
   } finally {
    setloading(false)
   }
  }

  return{loading,signup}
 }
export default useSignup


const handleinputserrors = ({fullname,username,password,confirmpassword,gender}) => {
  if (!fullname || !username || !password  || !confirmpassword || !gender) {
    toast.error("Please fill all the fields")
    return false
  }


  if (password !== confirmpassword) {
    toast.error("password don't' match")
    return false
   
  }

  if (password .length < 6) {
    toast.error("password must be at least 6 characters")
    return false
}
return true
}