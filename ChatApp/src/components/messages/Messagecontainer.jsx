import Messageinput from "./Messageinput";
import Messages from "./Messages";
import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import { TiMessage } from "react-icons/ti";
import { useAuthcontext } from "../../Context/Authcontext";
const Messagecontainer = () => {
  const { setSelectedConversation, SelectedConversation } = useConversation();

  useEffect(() => {
    // cleaning funciton unmount
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]); // in dep when somehthin change init i will return aboe fun
  // so above functon is after you loogedout  there is no selected conversation becasue it clean the conversation

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!SelectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-red-900 px-4 py-2 mb-2">
            <span className="label-text text-white">To: &nbsp;&nbsp; </span>
            <span className="text-white font-bold">
              {SelectedConversation.fullname}
            </span>
          </div>
          <Messages />
          <Messageinput />
        </>
      )}
    </div>
  );
};

export default Messagecontainer;

const NoChatSelected = () => {
  const { authUser } = useAuthcontext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullname} ❄</p>

        <p>Select a chat to start messaging</p>
        <TiMessage className="text-4xl md:text-5xl text-center" />
      </div>
    </div>
  );
};
