import React from 'react'
import MyLectures from '../components/MyLectures'
import { useState ,useContext} from 'react'
import {publicRequest} from "../axios"
import { UserContext } from '../usercontext'

const Home = () => {

  const {user,setUser} = useContext(UserContext)
  return (
    <div className='container py-5'>
    <h1 className='text-success mt-5'>    Welcome {user.username}</h1>
    <p>Your are {user.isAdmin?"an admin" :"not an admin"}</p>

    <h3 className='text-warning my-5'>Your Lectures</h3>
    <MyLectures instId={user._id}/>
    </div>
  )
}

export default Home
