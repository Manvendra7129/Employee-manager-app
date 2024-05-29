import React from 'react'
import './User.css';
import Navbar from '../NavLeft/Navbar';
import UserLeftSide from '../NavLeft/UserLeftside';

const UserFinance = () => {
  return (
 <div>
      <div class="parent">
       <Navbar></Navbar>
       <UserLeftSide></UserLeftSide>
       
       <div class="main4">
            <div className="down4">
            <h1 style={{fontSize:"45px", fontWeight:"600"}}>Finances Details</h1>

       <div className="card2">
            <div className="detail1">
                <strong>Employee ID:</strong> 22
            </div>
            <div className="detail1">
                <strong>CTC:</strong> 500000
            </div>
            <div className="detail1">
                <strong>PF:</strong>10%
            </div>
            <div className="detail1">
                <strong>HRA:</strong>5%
            </div>
            <div className="detail1">
                <strong>TDS:</strong>8%
            </div>
            <div className="detail1">
                <strong>Allowances:</strong>15%
            </div>
            <div className="detail1">
                <strong>Net Salary:</strong> Software Engineer
            </div>
        </div>
        </div>
       </div>
      </div>
 </div>
  )
}

export default UserFinance