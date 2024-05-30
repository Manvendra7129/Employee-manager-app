import React from 'react'
import "./Project.css"
import Navbar from '../NavLeft/Navbar'
import LeftSide from '../NavLeft/Leftside'

const ProjectUpdate = () => {
  return (
    <div>
       <div className="parent">
        <Navbar></Navbar>
        <LeftSide></LeftSide>
        <div className="down3">
        <div className="card3">
          <div className="inputCont" style={{display:"flex",justifyContent:"center"}}>
            <p style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}>Employee Name</p>
            
          </div>
        
          <div className="inputCont">
            <p style={{ fontWeight: "600", marginRight: '5px' }}>Id:</p>
            <input type="number" placeholder='Edit Id' name='id' />
          </div>
          <div className="inputCont">
            <p style={{ fontWeight: "600", marginRight: '5px' }}>Project:</p>
            <input type="text" name='project' />
          </div>
          <div className="inputCont">
            <p style={{ fontWeight: "600", marginRight: '5px' }}>Start Date:</p>
            <input type="date" name='start' />
          </div>
          <div className="inputCont">
            <p style={{ fontWeight: "600", marginRight: '5px' }}>End Date:</p>
            <input type="date" name='end' />
          </div>
          <div className="inputCont">
            <p style={{ fontWeight: "600", marginRight: '5px' }}>Description:</p>
            <input type="text" name='employee' placeholder='Description of project' />
          </div>
          <div className="inputCont">
            <p style={{ fontWeight: "600", marginRight: '5px' }}>Project Manager:</p>
            <input type="text" name='employee' placeholder='Enter project manager' />
          </div>
          <div className="inputCont1">
            <p style={{ fontWeight: "600", marginRight: '5px' }}>Status:</p>
            <div className="statusInd">
              <button className='statu1 st1'>Assigned</button>
              <button className='statu1 st2'>On Going</button>
              <button className='statu1 st3'>On Hold</button>
              <button className='statu1 st4'>Completed</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
 
  )
}

export default ProjectUpdate