import emoji from "emoji-dictionary";
const Conversation = () => {
  return (
    <>
      <div className="flex gap-3 items-center hover:bg-red-950 p-2 rounded-lg py-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 ">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-white">Hamza Jamil</p>
            <span className="text-xl">
              {emoji.getUnicode("man_technologist")}
            </span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
