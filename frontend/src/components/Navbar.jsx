import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../usercontext'

const Navbar = () => {
  const {user, setUser} = useContext(UserContext)
  return (
    <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#6C757D"}} data-bs-theme="dark">
    <div className="container">
    <h2 className="text-light">ideamagix</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
    {
      user?.isAdmin&& <li className="nav-item">
      <Link class="nav-link " aria-current="page" to="/courses">Courses</Link>
    </li>
    }


        {
          user?<li className="nav-item">
          <Link class="nav-link active" aria-current="page" onClick={()=>{setUser(null)}}>Sign Out</Link>
        </li>:
        <>
  
        <li><Link className="nav-link active" to="/login">Login</Link></li>
        <li><Link className="nav-link active" to="/signup">Sign Up</Link></li>
        </>
          
       
         
        
        }
      </ul>
    </div>
  </div>
  </nav>
  )
}

export default Navbar
