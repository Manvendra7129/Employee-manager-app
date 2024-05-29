import React from 'react'
import "./Userproject.css"
import Navbar from '../NavLeft/Navbar'
import UserLeftSide from '../NavLeft/UserLeftside'


const UserProject = () => {
  return (
    <div>
       <div>
       <div class="parent">
          <Navbar></Navbar>
          <UserLeftSide></UserLeftSide>
       
        <div class="main">
         <div className="down1">
         <div class="usercard">
                 <p style={{ fontSize: '25px', fontWeight: 'bold' ,display:'flex',alignContent:'center' ,justifyContent:'center' }}>Employee</p>
                  <p>Id: <span style={{fontWeight:400}}>11</span></p>
                 <p>Project: <span style={{fontWeight:400}}> ECommerce</span></p>
                 <div className="date">
                 <p>Start Date: <span style={{fontWeight:400}}>05/04/2024</span></p>
                 <p>End Date: <span style={{fontWeight:400}}>05/05/2024</span></p>
                 </div>
                  <p>Status: <span className='status' style={{fontWeight:400}}>open</span></p>
                  <div id="des">
                      <p>Description: </p> 
                      <p> <span style={{fontWeight:400}}>doing frontend css property</span></p>   
                 </div>
                 <div id="pr">
                    <p>Project Manager:</p>
                    <p> <span style={{fontWeight:400}}>Lala Raam</span></p>
                 </div>
         </div>
        
         
         </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default UserProject