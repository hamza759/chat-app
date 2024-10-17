import { BiSend } from "react-icons/bi";

const Messageinput = () => {
  return (
    <form className="px-3 my-2">
      <div className="w-full  relative">
        <input
          type="text"
          className="border-none outline-none text-lg input-lg rounded-lg block text-white bg-red-700 w-full  px-2
           "
          placeholder="Send Message"
        />
        <button
          type="submit"
          className="absolute text-4xl inset-y-0 right-0   flex  flex-col justify-center item-center px-3"
        >
          <BiSend className="hover:text-white" />
        </button>
      </div>
    </form>
  );
};

export default Messageinput;
