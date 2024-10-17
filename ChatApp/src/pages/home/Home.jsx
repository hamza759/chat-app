import Sidebar from "../../components/sidebar/Sidebar";
import Messagecontainer from "../../components/messages/Messagecontainer";
const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] overflow-hidden  bg-red-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
      <Sidebar></Sidebar>
      <Messagecontainer></Messagecontainer>
    </div>
  );
};

export default Home;
