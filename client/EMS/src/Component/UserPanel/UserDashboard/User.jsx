import React from 'react'
import './User.css';
import Navbar from '../NavLeft/Navbar';
import UserLeftSide from '../NavLeft/UserLeftside';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div>
       <div class="parent">
        <Navbar></Navbar>
        <UserLeftSide></UserLeftSide>
        
        <div class="main">
         <div className="up">
            <div className="circle">
                  <img src="https://i.pinimg.com/originals/69/b8/66/69b866fe7731b295199eee7d25b55aeb.png" alt="" />
            </div>
            <div className="text1">
                  <p>Hello User</p>
                  <p>Full Stack Developer</p>
            </div>
         </div>
         <div className="down">
          <div className="down-left">
            <p>Id:</p>
            <p>Age:</p>
            <p>Mobile:</p>
            <p>Email:</p>
            <p>Company:</p>
            <p>Email:</p>
            <p>Description:</p>
            </div>
            <div className="down-right">
            <p>111</p>
            <p>29</p>
            <p>9922554400</p>
            <p>User@Gmail.com</p>
            <p>XYZ</p>
            <p>user@gmail.com</p>
            <p>Looking for better opportunity to take my carrer on next level</p>
            </div>
            
         </div>
         <div className="profile">
             <Link to="/editProfile"><button className='btn'>Edit Profile</button></Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default User