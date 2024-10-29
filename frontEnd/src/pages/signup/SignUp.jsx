import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 shadow-md bg-gray-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-100 ">Signup</h1>

        <form>
          <div>
            <label className="label">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Ex: Barani Vignesh" className="w-full input input-bordered h-10"/>
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Ex: baranivignesh" className="w-full input input-bordered h-10"/>
          </div>

          <div>
          <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password " className="w-full input input-bordered h-10"/>
          </div>

          <div>
          <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password " className="w-full input input-bordered h-10"/>
          </div>

          {/* Gender checkbox.... */}
          <GenderCheckBox/>

          <div className="flex justify-center mb-3">
            <button className="btn btn-info btn-block  mt-2 text-base">Signup</button>
          </div>

          <span className='text-slate-300'>Already have an account?
            <a href="#" className="text-sm font-semibold text-white "> Login</a>
          </span>
          
        </form>
      </div>
    </div>
  )
}

export default SignUp





// STARTER CODE

// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className=" w-full p-6 shadow-md bg-gray-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
//         <h1 className="text-3xl font-semibold text-center text-gray-100 ">Signup</h1>

//         <form>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input type="text" placeholder="Ex: Barani Vignesh" className="w-full input input-bordered h-10"/>
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type="text" placeholder="Ex: baranivignesh" className="w-full input input-bordered h-10"/>
//           </div>

//           <div>
//           <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type="password" placeholder="Enter Password " className="w-full input input-bordered h-10"/>
//           </div>

//           <div>
//           <label className="label">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input type="password" placeholder="Confirm Password " className="w-full input input-bordered h-10"/>
//           </div>

//           {/* Gender checkbox.... */}
//           <GenderCheckBox/>

//           <div className="flex justify-center mb-3">
//             <button className="btn btn-info btn-block  mt-2 text-base">Signup</button>
//           </div>

//           <span className='text-slate-300'>Already have an account?
//             <a href="#" className="text-sm font-semibold text-white "> Login</a>
//           </span>
          
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp