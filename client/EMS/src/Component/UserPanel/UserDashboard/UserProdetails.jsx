import React from 'react'
import './User.css';
import Navbar from '../NavLeft/Navbar';
import UserLeftSide from '../NavLeft/UserLeftside';

const UserProdetails = () => {
  return (
 <div>
      <div class="parent">
       <Navbar></Navbar>
       <UserLeftSide></UserLeftSide>
       
       <div class="main4">
            <div className="down4">
            <h1 style={{fontSize:"45px", fontWeight:"600"}}>Professional Details</h1>

       <div className="card2">
            <div className="detail1">
                <strong>Employee ID:</strong> 22
            </div>
            <div className="detail1">
                <strong>Account Number:</strong> 1234567890
            </div>
            <div className="detail1">
                <strong>IFSC Code:</strong> ABCD0123456
            </div>
            <div className="detail1">
                <strong>Aadhar Card:</strong> 1234 5678 9012
            </div>
            <div className="detail1">
                <strong>PAN Card:</strong> ABCDE1234F
            </div>
            <div className="detail1">
                <strong>Company Name:</strong> Example Corp
            </div>
            <div className="detail1">
                <strong>Designation:</strong> Software Engineer
            </div>
            <div className="detail1">
                <strong>Type:</strong> Full-time
            </div>
            <div className="detail1">
                <strong>Address:</strong> gaav
            </div>
        </div>
        </div>
       </div>
      </div>
 </div>
  )
}

export default UserProdetails