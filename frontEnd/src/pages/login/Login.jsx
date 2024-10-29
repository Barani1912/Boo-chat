import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 shadow-md bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-100 ">Login</h1>

        <form>
          <div>
{/* daisy ui comp.... */}
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"/>
          </div>

          <div>
          <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="text" placeholder="Enter password " className="w-full input input-bordered h-10"/>
          </div>

          <div className="flex justify-center mt-3">
            <button className="btn btn-info w-full mt-2">Login</button>
          </div>

         <span>Don't have an account?  <a href="#" className="text-sm hover:text-white mt-2 inline-block">Signup</a></span>
          
        </form>
      </div>
    </div>
  );
};

export default Login;








//STARTER CODE

// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className=" w-full p-6 shadow-md bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
//         <h1 className="text-3xl font-semibold text-center text-gray-100 ">Login</h1>

//         <form>
//           <div>
// {/* daisy ui comp.... */}
//             <label className="label">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"/>
//           </div>

//           <div>
//           <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="text" placeholder="Enter password " className="w-full input input-bordered h-10"/>
//           </div>

//           <div className="flex justify-center mt-3">
//             <button className="btn btn-info w-full mt-2">Login</button>
//           </div>

//          <span>Don't have an account?  <a href="#" className="text-sm hover:text-white mt-2 inline-block">Signup</a></span>
          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
