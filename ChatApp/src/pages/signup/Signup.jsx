import { Link } from "react-router-dom";
import Gendercheckbox from "./Gendercheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setinputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handlecheckbox = (gender) => {
    setinputs({ ...inputs, gender });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(signup());
    await signup(inputs);
  };

  return (
    <div className="flex flex-column item center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-lg shadow-md  bg-red-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
        <h1 className="text-3xl font-semibold  text-center text-white">
          SignUp__
          <span className="text-black font-bold   animate-pulse ">ChatApp</span>
        </h1>

        <form onSubmit={handlesubmit}>
          <div>
            <label className="label p-2 ">
              <span className="text-1xl text-white mt-1 mb-1 ">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered w-full   max-w-xs"
              value={inputs.fullname}
              onChange={(e) =>
                setinputs({ ...inputs, fullname: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-1xl text-white mt-1 mb-1">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter User"
              className="input input-bordered w-full max-w-xs"
              value={inputs.username}
              onChange={(e) =>
                setinputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-1xl text-white mt-1 mb-1">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              value={inputs.password}
              onChange={(e) =>
                setinputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-1xl text-white mt-1 mb-1">
                ConfirmPassword
              </span>
            </label>
            <input
              type="password"
              placeholder="ConfrimPassword"
              className="input input-bordered w-full max-w-xs"
              value={inputs.confirmpassword}
              onChange={(e) =>
                setinputs({ ...inputs, confirmpassword: e.target.value })
              }
            />
          </div>
          <Gendercheckbox
            oncheckbox={handlecheckbox}
            selectedgender={inputs.gender}
          ></Gendercheckbox>

          <Link
            to="/login"
            className="text-md hover-underline hover:text-black text-white mt-1  p-1 inline-block"
          >
            {"Already"} have an account!
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className=" loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
