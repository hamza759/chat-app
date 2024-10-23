import { BiSend } from "react-icons/bi";
import useSendMess from "../../hooks/useSendMess";
import { useState } from "react";
import toast from "react-hot-toast";

const Messageinput = () => {
  const [message, setmessage] = useState("");
  const { loading, sendMessage } = useSendMess();

  const handlesubmit = async (e) => {
    e.preventDefault();
    // if (!message) return;
    if (!message) {
      toast.error("Empty message can't send");
      return;
    }
    await sendMessage(message);
    setmessage("");
  };

  return (
    <form className="px-3 my-2" onSubmit={handlesubmit}>
      <div className="w-full  relative">
        <input
          type="text"
          className="border-none outline-none text-lg input-lg rounded-lg block text-white bg-red-700 w-full  px-2
           "
          placeholder="Send Message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute text-4xl inset-y-0 right-0   flex  flex-col justify-center item-center px-3"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BiSend className="hover:text-white" />
          )}
        </button>
      </div>
    </form>
  );
};

export default Messageinput;
