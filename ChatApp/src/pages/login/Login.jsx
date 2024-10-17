const Login = () => {
  return (
    <div className="flex flex-column items-center justify-center min-w-96 max-auto ">
      <div className="w-full p-8 rounded-lg shadow-md bg-red-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-15">
        <h1 className="text-3xl font-semibold  text-center text-white">
          Login__
          <span className="text-black font-bold      animate-pulse ">
            ChatApp
          </span>
        </h1>
        <form action="">
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
              type="text"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <a
            href="#"
            className="text-md hover-underline hover:text-black text-white mt-2  p-2 inline-block"
          >
            {"Dont,s"} have an account
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//     <div className="flex flex-column items-center justify-center min-w-96 max-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-red-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
//         <h1 className="text-3xl font-semibold  text-center text-white">
//           Login__
//           <span className="text-red-800    animate-pulse ">ChatApp</span>
//         </h1>
//         <form action="">
//           <div>
//             <label className="label p-2 ">
//               <span className="text-1xl text-white mt-1 mb-1">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter User"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <div>
//             <label className="label p-2 ">
//               <span className="text-1xl text-white mt-1 mb-1">Password</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Password"
//               className="input input-bordered w-full max-w-xs"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm hover-underline hover:text-pink-600 text-white mt-2  p-2 inline-block"
//           >
//             {"Dont,s"} have an account
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
