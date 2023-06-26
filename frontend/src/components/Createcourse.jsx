import React, { useState } from 'react'
import {publicRequest} from "../axios"


const Createcourse = ({liveCourses,setLiveCourses}) => {
    const [course,setCourse] = useState({name:"", level:"", description:"", image:""})
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    publicRequest.post("/courses/createCourse",course).then(res=>setLiveCourses(liveCourses=>[...liveCourses,res.data])).catch(err=>console.log(err))
    setCourse({name:"", level:"", description:"", image:""})
  }
  return (
    <div className='container'>
    <form className="row g-3 mt-2">

  <label for="inputName4" className="form-label">Name</label>
    <input type="Name" className="form-control" value={course.name} onChange={(e)=>{setCourse({...course,name:e.target.value})}} />
    <label for="inputlevel4" className="form-label">Level</label>
    <input type="level" className="form-control" id="inputlevel4" value={course.level} onChange={(e)=>{setCourse({...course,level:e.target.value})}}/>
    <label for="inputdescription4" className="form-label">Description</label>
    <input type="description" className="form-control" id="inputdescription4" value={course.description} onChange={(e)=>{setCourse({...course,description:e.target.value})}}/>
    <label for="inputimage4" className="form-label">Image</label>
    <input type="description" className="form-control" id="inputimage4" value={course.image} onChange={(e)=>{setCourse({...course,image:e.target.value})}}/>
 
 
    <button type="submit" onClick={handleSubmit} class="btn btn-danger">Create Courses</button>
 
</form>
</div>
  )
}

export default Createcourse
