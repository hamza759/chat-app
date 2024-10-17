import { RiUserSearchLine } from "react-icons/ri";

const Searchinput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="__Search"
        className="input input-bordered border-red-800 rounded-xl flex"
      />
      <button
        type="submit"
        className="btn  bg-transparent border-none hover:bg-red-900 text-white"
      >
        <RiUserSearchLine className="text-3xl" />
      </button>
    </form>
  );
};

export default Searchinput;
