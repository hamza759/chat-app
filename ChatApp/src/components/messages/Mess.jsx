const Mess = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="" alt="useravatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white   bg-black`}>
        H&lsquo;i there what aup
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:45
      </div>
    </div>
  );
};

export default Mess;
