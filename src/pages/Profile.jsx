import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import AddProfile from '../components/AddProfile'
import ProfileCard from '../components/ProfileCard'
function Profile() {
  const[uploadProfile,setUploadProfile]=useState({})
  return (
    <div>
      
        <AddProfile setUploadProfile={setUploadProfile}/>
       

     

        </div>
     
  )
}

export default Profile