import { useState } from "react";
import { RiUserSearchLine } from "react-icons/ri";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const Searchinput = () => {
  const [search, setsearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("search term must be at least 3 characters long");
    }
    const conversation = conversations.find((user) =>
      user.fullname.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      //Controls which conversation is actively selected and displayed in your chat app.
      setsearch("");
    } else {
      toast.error("No conversation found with that name");
    }
  };

  return (
    <form onSubmit={handlesubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="__Search"
        className="input input-bordered border-red-800 rounded-xl flex"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn  bg-transparent border-none  hover:bg-red-900 text-white"
      >
        <RiUserSearchLine className="text-3xl" />
      </button>
    </form>
  );
};

export default Searchinput;
