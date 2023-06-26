import React, { useEffect, useState } from 'react'
import Createlecture from '../components/Createlecture'
import { useParams } from 'react-router-dom'
import { publicRequest } from '../axios'
import LectureCard from '../components/LectureCard'
import AssignInstructor from '../components/AssignInstructor'

const SingleCourse = () => {
   const {id}= useParams()
   const [thisCourse, setThisCourse] = useState({});
   const [lectures, setLectures] = useState([]);
   const [show ,setShow] = useState(false)
   useEffect(()=>{
    publicRequest.get(`/courses/getCourse/${id}`).then(res=>setThisCourse(res.data))
   },[])

   useEffect(()=>{
    publicRequest.post("/lectures/getCourseLectures",{courseId:id}).then(res=>setLectures(res.data))
   },[])
  return (
    <div className='container'>
   <h2 className='text-center my-5'>{thisCourse.name}</h2>
   <h3 className='text-center my-5'>{thisCourse.level}</h3>
   <p className='text-center'>{thisCourse.description}</p>
  <h5> Lectures:</h5>
  <div className='row my-4'>
  {lectures.map(l=><LectureCard lecture={l}/>)}
  </div>
  
      <button className='btn btn-success my-5' onClick={()=>{setShow(!show)}}>{show?"close":"add lecture"}</button>
      
      {show &&
        <Createlecture courseId={id} lectures={lectures} setLectures={setLectures}/>}

    </div>
  )
}

export default SingleCourse
