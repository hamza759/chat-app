import { useAuthcontext } from "../../Context/Authcontext";
import useConversation from "../../zustand/useConversation";
import { Extracttime } from "../../utils/Extracttime";

const Mess = ({ message }) => {
  const { authUser } = useAuthcontext();
  const { SelectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const fromattedtime = Extracttime(message.createdAt);
  const chatname = fromMe ? "chat-end" : "chat-start";
  const profilepic = fromMe
    ? authUser.profilepic
    : SelectedConversation?.profilepic;
  const bgcolor = fromMe ? "bg-gray-700 " : "bg-gray-800";
  const shakeclass = message.ShouldShake ? "shake" : "";

  return (
    <div className={` chat ${chatname}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilepic} alt="useravatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white      ${bgcolor}  ${shakeclass} `}>
        {message.message}
      </div>
      <div className="chat-footer text-white  text-sm flex gap-1 items-center">
        {fromattedtime}
      </div>
    </div>
  );
};

export default Mess;
