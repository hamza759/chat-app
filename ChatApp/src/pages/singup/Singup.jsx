import Gendercheckbox from "./Gendercheckbox";
const Signup = () => {
  return (
    <div className="flex flex-column item center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-lg shadow-md  bg-red-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
        <h1 className="text-3xl font-semibold  text-center text-white">
          SignUp__
          <span className="text-black font-bold   animate-pulse ">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2 ">
              <span className="text-1xl text-white mt-1 mb-1 ">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered w-full   max-w-xs"
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
            />
          </div>
          <Gendercheckbox></Gendercheckbox>

          <a
            href="#"
            className="text-md hover-underline hover:text-black text-white mt-1  p-1 inline-block"
          >
            {"Already"} have an account!
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// stater code for the signup components
// return (
//   <div className="flex mt-2">
//     <div className="form-control">
//       <label className={`label gap-2 cursor-pointer`}>
//         <span className="label-text text-white">Male</span>
//         <input type="checkbox" className="checkbox border-slate-900" />
//       </label>
//     </div>
//     <div className="form-control">
//       <label className={`label gap-2 cursor-pointer`}>
//         <span className="label-text text-white">FeMale</span>
//         <input type="checkbox" className="checkbox border-slate-900" />
//       </label>
//     </div>
//   </div>
// );
