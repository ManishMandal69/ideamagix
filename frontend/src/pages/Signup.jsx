import React, { useState, useContext } from 'react'
import {publicRequest} from "../axios"
import { UserContext } from '../usercontext';


const Signup = () => {
  const { user, setUser } = useContext(UserContext);
  const [userData,setUserData] = useState({username:"", email:"", password:""})
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    publicRequest.post("/auth/register",userData).then(res=>setUser(res.data)).catch(err=>console.log(err))
    setUserData({username:"",email:"",password:""})
  }
  return (
    <div className='container'>
    <form className="row g-3 mt-5">
  <div class="col-md-6">
  <label for="inputUserName4" className="form-label">User Name</label>
    <input type="UserName" className="form-control" value={userData.username} onChange={(e)=>{setUserData({...userData,username:e.target.value})}} />
    <label for="inputEmail4" className="form-label">Email ID</label>
    <input type="email" className="form-control" id="inputEmail4" value={userData.email} onChange={(e)=>{setUserData({...userData,email:e.target.value})}}/>
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" value={userData.password} onChange={(e)=>{setUserData({...userData,password:e.target.value})}}/>
  </div>
  <div className="col-12">
  </div>
  <div className="col-12">
    <button type="submit" onClick={handleSubmit} class="btn btn-primary">Sign up</button>
  </div>
</form>
</div>
  )
}

export default Signup
