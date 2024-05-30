// Navbar.js
import React from "react";
import "./NavbarLeftSide.css";

const Navbar = () => {
  return (
    <div className="nav ">
      <p style={{ fontSize: "40px", fontFamily: "poppins", fontWeight: "400" }}>
        EMPLOYEE MANAGEMENT SYSTEM
      </p>
      <button className="btn">Logout</button>
    </div>
  );
};

export default Navbar;
