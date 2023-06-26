import React, { useEffect, useState } from 'react'
import { publicRequest } from '../axios';

const AssignInstructor = ({lectureId,setToggle,setlec,lec,setname}) => {

    const [instructors, setInstructors] = useState([]);
    const [selectedInstructor, setSelectedInstructor] = useState(null);


    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!selectedInstructor){
            alert("Select an Instructor")
            return
        }
        console.log(selectedInstructor._id,lectureId)
        publicRequest.post(`/instructors/addLectureToInstructor/${selectedInstructor._id}`,{lectureId:lectureId}).then(res=>{alert("Registered");setlec(lec=>({...lec,instructor:res.data.instructor._id}));setname(res.data.instructor.username);setToggle(false)}).catch(err=>alert(err.response.data.error))
    }

    useEffect(()=>{
publicRequest.get("/instructors/getAllInstructors").then(res=>setInstructors(res.data))
    },[])

  return (
    <div className='p-2'>
      <h4>Choose an instructor</h4>
      {instructors.map(i=><div onClick={()=>setSelectedInstructor(i)} className={`border border-success py-1 rounded my-1 text-warning text-center ${selectedInstructor===i?"bg-danger":"bg-light"}`}>{i.username}</div>)}
   
      <button className='btn btn-success' onClick={handleSubmit}>Submit</button>
      </div>
  )
}

export default AssignInstructor
