import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="text-4xl mt-auto  w-11 text-white hover:bg-red-950 ">
      {!loading ? (
        <BiLogOut onClick={logout} />
      ) : (
        <span className=" cursor-pointer  loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
