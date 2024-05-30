
import React from 'react';
import "./NavbarLeftSide.css"
import { CiLogout } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className="nav">
      <p style={{fontSize:"40px",fontFamily:"poppins",fontWeight:"400"}}>EMPLOYEE MANAGEMENT SYSTEM</p>
      <button className="logout"><CiLogout /></button>
    </div>
  );
}

export default Navbar;
