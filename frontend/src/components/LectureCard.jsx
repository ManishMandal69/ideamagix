import React, { useEffect, useState } from 'react'
import AssignInstructor from './AssignInstructor';
import { publicRequest } from '../axios';
import moment from "moment"

const LectureCard = ({lecture}) => {
    const [toggle, setToggle] = useState(false);
    const [lec, setlec] = useState(lecture);
    const [name, setname] = useState("Loading");
    useEffect(()=>{
        lec.instructor&&publicRequest.get(`/instructors/getInstructor/${lec.instructor}`).then(res=>setname(res.data.username))
    },[])

    return (
 <div className='col-md-3'>
 <div className="card  border border-danger " >
 
    <div className="card-body">
    {console.log(lec?.instructor)}
      <h5 className="card-title">{lec.title}</h5>
      <p className="card-text">{moment(lec.date).format("DD-MM-YYYY")}</p>
      {!lec.instructor?<button onClick={()=>setToggle(!toggle)} className='btn btn-success'>{toggle?"Back":"Assign"}</button>:<p>{name}</p>}
     
    </div>
    {toggle&&<AssignInstructor lectureId={lec._id} lec={lec} setlec={setlec} setToggle={setToggle} setname={setname} />}
  </div>
 </div>
    
  
  )
}

export default LectureCard
