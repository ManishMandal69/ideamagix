import React, { useState } from 'react'
import { publicRequest } from '../axios';

const Createlecture = ({courseId,setLectures,lectures}) => {

  const [lectureData, setlectureData] = useState({title:"",date:"",courseId:courseId});

  const handleSubmit=(e)=>{

    e.preventDefault()
    publicRequest.post("/lectures/createLecture",lectureData).then(res=>setLectures(lectures=>[...lectures,res.data]))
    setlectureData({title:"",date:"",courseId:courseId})
  }

  return (
    <div class="card  mb-3">
  <div class="card-header">Create a Lecture</div>
  <div class="card-body">

    <input placeholder='title' className='form-control my-2' value={lectureData.title} onChange={(e)=>{setlectureData({...lectureData,title:e.target.value})}}/>
    
    <input type='date' className='form-control my-2' value={lectureData.date} onChange={(e)=>{setlectureData({...lectureData,date:e.target.value})}}/>
  <button className='btn btn-success my-2' onClick={e=>handleSubmit(e)}>submit</button>
    </div>
  </div>
  )
}

export default Createlecture
