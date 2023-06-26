import React, { useEffect } from 'react'
import { useState ,useContext} from 'react'
import {publicRequest} from "../axios"
import { UserContext } from '../usercontext'
import LectureCard from './LectureCard'

const MyLectures = ({instId}) => {
  
    const [lectures, setLectures] = useState([]);

    useEffect(()=>{
        publicRequest.post("/lectures/getUserLectures",{instructorId:instId}).then(res=>setLectures(res.data))
    },[])
  return (
    <div>
      <div className="row">
      {lectures.length>0?lectures.map(l=><LectureCard lecture={l}/>):<p>"NO Lectures Yet"</p>}
      </div>
      
    </div>
  )
}

export default MyLectures
