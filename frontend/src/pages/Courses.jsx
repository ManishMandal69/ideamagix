import React, { useEffect, useState } from 'react'
import Createcourse from '../components/Createcourse'
import { publicRequest } from '../axios';
import CourseCard from '../components/CourseCard';

const Courses = () => {


    const [liveCourses, setLiveCourses] = useState([]);

    

    useEffect(()=>{
            publicRequest.get("/courses/getAllCourses").then(res=>setLiveCourses(res.data))
    },[])


  return (
    <div className="container">
    <div className='row'>
    <div className="col-md-6">
    <h2 className='my-5'>Creat a Course</h2>
    <Createcourse liveCourses={liveCourses} setLiveCourses={setLiveCourses}/>   
    </div>
    <div className="col-md-6">
   <h2 className='my-5'>Current Courses</h2>
   {liveCourses?.map(c=><CourseCard course={c}/>)}
    </div>
   
    </div>
    </div>
   
  )
}

export default Courses
