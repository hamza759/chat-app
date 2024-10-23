import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-column items-center justify-center min-w-96 max-auto ">
      <div className="w-full p-8 rounded-lg shadow-md bg-red-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
        <h1 className="text-3xl font-semibold  text-center text-white">
          Login__
          <span className="text-black font-bold      animate-pulse ">
            ChatApp
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 ">
              <span className="text-1xl text-white mt-1 mb-1">username</span>
            </label>
            <input
              type="text"
              placeholder="Enter User"
              className="input input-bordered w-full max-w-xs"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-1xl text-white mt-1 mb-1">Password</span>
            </label>
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-md hover-underline hover:text-black text-white mt-2  p-2 inline-block"
          >
            {"Dont,s"} have an account
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
