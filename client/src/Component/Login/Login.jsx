import React from 'react';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { MdOutlineAccountCircle } from "react-icons/md";

import './Login.css';

const Login = () => {
  return (
    <div className='page'>
      <div className="login">
        <div className="text">
          <p>Sign In</p>
          <span id='account'><MdOutlineAccountCircle/></span>
        </div>
        <div className="form">
          <div className="input-container">
            <HiOutlineMail className="icon" />
            <input type="text" placeholder='Enter Email Id' />
          </div>
          <div className="input-container">
            <HiOutlineLockClosed className="icon" />
            <input type="password" placeholder='Enter Password' />
          </div>
          <button className='btn'>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
