import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";


  // const navigate = useNavigate();
  // onClick={navigate("/signup")}

const Login = () => {
  const[username,setUsername] = useState("");
  const [password,setPassword] = useState("")

  const{loading,login} =useLogin()

  const handleSubmit = async(e) =>{
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 shadow-md bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-100 ">Login</h1>

        <form onSubmit={handleSubmit}>
          <div>
{/* daisy ui comp.... */}
            <label className="label">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>

          <div>
          <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="text" placeholder="Enter password " className="w-full input input-bordered h-10" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>

          <div className="flex justify-center mt-3">
            <button className="btn btn-info w-full mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>

         <span>Don't have an account?<Link to="/signup" className="text-sm hover:text-white mt-2 inline-block">Signup</Link></span>
          
        </form>
      </div>
    </div>
  );
};

export default Login;






