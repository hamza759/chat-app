import useConversation from "../../zustand/useConversation";
import { UseSocketContext } from "../../Context/SocketContext";
const Conversation = ({ conversation, emoji, lastidx }) => {
  const { setSelectedConversation, SelectedConversation } = useConversation();
  const { onlineuser } = UseSocketContext();
  const isonlineuser = onlineuser.includes(conversation._id);

  const isselec = SelectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-3 items-center hover:bg-red-950 p-2 rounded-lg py-2 cursor-pointer ${
          isselec && "bg-red-950"
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isonlineuser ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilepic} alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1 ">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-white">{conversation.fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastidx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
