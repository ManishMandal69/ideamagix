import React from 'react'
import { useState ,useContext} from 'react'
import {publicRequest} from "../axios"
import { UserContext } from '../usercontext'


const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [userData,setUserData] = useState({email:"", password:""})
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    publicRequest.post("/auth/login",userData).then(res=>setUser(res.data)).catch(err=>console.log(err))
    setUserData({email:"",password:""})
  }
  return (
    <div className="container ">
    <form className='login mt-5'>
  <div className="row mb-3 d-flex col-md-6">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" value={userData.email} onChange={(e)=>{setUserData({...userData,email:e.target.value})}}/>
    </div>
  </div>
  <div className="row mb-3 col-md-6">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" value={userData.password} onChange={(e)=>{setUserData({...userData,password:e.target.value})}}/>
    </div>
  </div>
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Sign in</button>
</form>
</div>
  )
}

export default Login
