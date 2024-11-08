import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'


const Login=({setShowLogin}) => {

    const[currState,setCurrState] = useState("Login")


  return (
    <div className='login'>
      <form  className="login-container">
        <div className="login-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
            {currState === "Login"?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='password' required />
        </div>
        <button>{currState === "Sign Up"?"Create Account":"Login"}</button>
        
        {currState==="Login" 
        ? <p>Create a new Account?<span onClick={()=> setCurrState("Sign Up")}>Click Here</span></p>
        : <p>Already have an Account? <span onClick={()=> setCurrState("Login")}>Login Here</span></p>}
    
      </form>
    </div>
  )
}

export default Login
