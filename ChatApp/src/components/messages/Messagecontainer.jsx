import Messageinput from "./Messageinput";
import Messages from "./Messages";
import { TiMessage } from "react-icons/ti";

const Messagecontainer = () => {
  const chatselected = true;

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {chatselected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-red-900 px-4 py-2 mb-2">
            <span className="label-text text-white">To:</span>
            <span className="text-white font-bold"> Hamza Jamil</span>
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
  // const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        {/* <p>Welcome 👋 {authUser.fullName} ❄</p> */}
        <p>Welcome👋 hamzajamil ❄ </p>
        <p>Select a chat to start messaging</p>
        <TiMessage className="text-4xl md:text-5xl text-center" />
      </div>
    </div>
  );
};
