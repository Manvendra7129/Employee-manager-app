import React from "react";
import Navbar from "../NavLeft/Navbar";
import LeftSide from "../NavLeft/Leftside";
import { useRef } from "react";

const EditPersonal = () => {

   const employee={
         id:useRef(),
         manager:useRef()
   }
   const update=()=>{
      
   }

  return (
    <div>
      <div class="parent">
        <Navbar></Navbar>
        <LeftSide></LeftSide>
        <div class="main1">
          <div className="down4">
            <div className="pro">
              <h1>Employee Personal Details</h1>
            </div>
            <div class="card4">
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Employee
              </p>
              
              <div class="inputCon">
                <p style={{ fontWeight: "600", marginRight: "5px" }}>
                  Employee Id:
                </p>
                <input type="number" ref={employee.id} />
              </div>
              
              <div class="inputCon">
                <p style={{ fontWeight: "600", marginRight: "5px" }}>
                  Reporting Manager:
                </p>
                <input type="number" id="manager"ref={employee.manager} />
              </div>

              <div className="update">
                <button className="btn" onClick={update}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPersonal;
