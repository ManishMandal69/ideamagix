import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { UserContext } from "./usercontext";
import { useState } from "react";
import Courses from "./pages/Courses";
import SingleCourse from "./pages/SingleCourse";


function App() {
  const [user, setUser] = useState(null)
  return (
    
    <Router>
      <UserContext.Provider value={{user,setUser}}>
      <Navbar/>
      <Routes>
      <Route path="/" element={user?<Home/>:<Login/>}/>
      <Route path="/login" element={user?<Home/>:<Login/>}/>
      <Route path="/signup" element={user?<Home/>:<Signup/>}/>
      <Route path="/courses" element={user?<Courses/>:<Login/>}/>
      <Route path="/course/:id" element={user?<SingleCourse/>:<Login/>}/>
      </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
