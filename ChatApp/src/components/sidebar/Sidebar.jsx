import Conversations from "./Conversations";
import Searchinput from "./Searchinput";
import LogoutButton from "../LogoutButton";
const Sidebar = () => {
  return (
    <div className="border-r border-black  p-4 flex flex-col">
      <Searchinput></Searchinput>
      <div className="divider px-3"></div>
      <Conversations></Conversations>
      <LogoutButton></LogoutButton>
    </div>
  );
};

export default Sidebar;
