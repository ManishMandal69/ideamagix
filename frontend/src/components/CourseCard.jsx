import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {
  return (
    <div className='card p-3 my-3'>
      <h3> {course.name}</h3>
      <h5>Level: {course.level}</h5>
      <p>{course.description}</p>
      <button className='btn btn-success'>
      <Link className='nav-link' to={`/course/${course._id}`}>
      View
      </Link>
      
      </button>
    </div>
  )
}

export default CourseCard
