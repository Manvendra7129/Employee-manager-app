import React from 'react'
import "./Project.css"
import Navbar from '../NavLeft/Navbar'
import LeftSide from '../NavLeft/Leftside'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Project = () => {
    const Navigate=useNavigate()
   // const editEmp=()=>{
   //    Navigate('/projectUpdate')
   //   }

   //   const addProject=()=>{
   //    Navigate('/addProject')
   //   }

   const addProj=()=>{
      
      Navigate('/addProject')
      
   }
  return (
    <div>
       <div class="parent">
        <Navbar></Navbar>
        <LeftSide></LeftSide>
        
        <div class="main">
        <div className="top">
              <button className='statu'>Assigned</button>
              <button className='statu'>On Going</button>
              <button className='statu'>On Hold</button>
              <button className='statu'>Completed</button>
              <button className='statu' onClick={addProj}>Add Project</button>
          </div>
         <div className="down1">
   
         <div class="card">
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
                 <div id="btn">
                  <Link to="/editProject"><button className='btn'>Edit</button></Link>
                  <button className='btn' >Delete</button>
                 </div>
         </div>
         <div class="card">
                 <p style={{ fontSize: '25px', fontWeight: 'bold' ,display:'flex',alignContent:'center' ,justifyContent:'center' }}>Employee</p>
                  <p>Id: 11</p>
                 <p>Project:  ECommerce</p>
                 <div className="date">
                 <p>Start Date: 05/04/2024</p>
                 <p>End Date: 05/06/2024</p>
                 </div>
                  <p>Status: <span style={{color:'greenyellow'}}>open</span></p>
                  <div id="des">
                      <p>Description: </p> 
                      <p> doing frontend css property</p>   
                 </div>
                 <div id="pr">
                    <p>Project Manager:</p>
                    <p>Lala Raam</p>
                 </div>
                 <div id="btn">
                  <button className='btn'>Edit</button>
                  <button className='btn'>Delete</button>
                 </div>
         </div>
         <div class="card">
                 <p style={{ fontSize: '25px', fontWeight: 'bold' ,display:'flex',alignContent:'center' ,justifyContent:'center' }}>Employee</p>
                  <p><span className='bold'>Id:</span> 11</p>
                 <p>Project:  ECommerce</p>
                 <div className="date">
                 <p>Start Date: 05/04/2024</p>
                 <p>End Date: 05/06/2024</p>
                 </div>
                  <p>Status: open</p>
                  <div id="des">
                      <p>Description: </p> 
                      <p> doing frontend css property</p>   
                 </div>
                 <div id="pr">
                    <p>Project Manager:</p>
                    <p>Lala Raam</p>
                 </div>
                 <div id="btn">
                  <button className='btn'>Edit</button>
                  <button className='btn'>Delete</button>
                 </div>
         </div>
         <div class="card">
                 <p style={{ fontSize: '25px', fontWeight: 'bold' ,display:'flex',alignContent:'center' ,justifyContent:'center' }}>Employee</p>
                  <p>Id: 11</p>
                 <p>Project:  ECommerce</p>
                 <div className="date">
                 <p>Start Date: 05/04/2024</p>
                 <p>End Date: 05/06/2024</p>
                 </div>
                  <p>Status: open</p>
                  <div id="des">
                      <p>Description: </p> 
                      <p> doing frontend css property</p>   
                 </div>
                 <div id="pr">
                    <p>Project Manager:</p>
                    <p>Lala Raam</p>
                 </div>
                 <div id="btn">
                  <button className='btn'>Edit</button>
                  <button className='btn'>Delete</button>
                 </div>
         </div>
         
         </div>
        </div>
    </div>
    </div>
  )
}

export default Project