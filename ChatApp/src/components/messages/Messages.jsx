import { useEffect, useRef } from "react";
import useGetMess from "../../hooks/useGetMess";
import Skeleton from "../skeletons/Skeleton";
import Mess from "./Mess";
import useListenMess from "../../hooks/useListenMess";

const Messages = () => {
  const { loading, messages } = useGetMess();
  useListenMess();
  const lastmessref = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastmessref.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [messages]); // when the messages is changing run this useeffect

  return (
    <div className="px-4 flex-1 overflow-auto ">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastmessref}>
            <Mess message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <Skeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white text-1xl">
          Send a Message To Start Conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
