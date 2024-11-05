import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

  const [input,setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const {loading, signup} = useSignup();

  const handleCheckBoxChange = (gender)=>{
    setInput({...input,gender})
  }

  const handleSubmit=async(event)=>{
    event.preventDefault();
    // console.log(input);
    await signup(input)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 shadow-md bg-gray-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-100 ">Signup</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Ex: Barani Vignesh" className="w-full input input-bordered h-10" value={input.fullName} onChange={(event)=>setInput({...input,fullName:event.target.value})}/>
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Ex: baranivignesh" className="w-full input input-bordered h-10" value={input.username} onChange={(event)=>setInput({...input,username:event.target.value})}/>
          </div>

          <div>
          <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password " className="w-full input input-bordered h-10" value={input.password} onChange={(event)=>setInput({...input,password:event.target.value})}/>
          </div>

          <div>
          <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password " className="w-full input input-bordered h-10" value={input.confirmPassword} onChange={(event)=>setInput({...input,confirmPassword:event.target.value})}/>
          </div>

          {/* Gender checkbox.... */}
          <GenderCheckBox 
          onCheckBoxChange={handleCheckBoxChange} 
          selectedGender={input.gender} />

          <div className="flex justify-center mb-3">
            <button className="btn btn-info btn-block  mt-2 text-base" disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Signup"}
            </button>
          </div>

          <span className='text-slate-300'>Already have an account?
            <Link to="/login" className="text-sm font-semibold text-white ">Login</Link>
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