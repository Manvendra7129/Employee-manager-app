import React from "react";
import Navbar from "../NavLeft/Navbar";
import LeftSide from "../NavLeft/Leftside";

const PayslipEdit = () => {
  return (
    <div>
      <div class="parent">
        <Navbar></Navbar>
        <LeftSide></LeftSide>
        <div class="main1">
          <div className="down4">
            <div className="pro">
              <h1>Employee Finances Details</h1>
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
                <p style={{ fontWeight: "600", marginRight: "5px" }}>Id:</p>
                <input type="number" placeholder="Edit Id" />
              </div>
              <div class="inputCon">
                <p style={{ fontWeight: "600", marginRight: "5px" }}>
                  Employee Id:
                </p>
                <input type="number" />
              </div>
              <div class="inputCon">
                <p style={{ fontWeight: "600", marginRight: "5px" }}>
                  Employee CTC:
                </p>
                <input type="number" />
              </div>

              <div className="update">
                <button className="btn">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayslipEdit;
