import React from "react";
import "./Payslip.css";
import Navbar from "../NavLeft/Navbar";
import LeftSide from "../NavLeft/Leftside";
import html2pdf from "html2pdf.js"; // Import html2pdf library

const Payslip = () => {
  const handleDownload = () => {
    const payslipContainer = document.getElementById("payslip-container");
    html2pdf().from(payslipContainer).save("payslip.pdf");
  };

  return (
    <div>
      <div className="parent">
        <Navbar />
        <LeftSide />
        <div className="main1">
          <div className="down8">
            <div className="container9" id="payslip-container">
              <div className="header">
                <h1>Employee Payslip</h1>
              </div>
              <div className="employee-details">
                <h2>Employee Details</h2>
                <p>
                  <strong>Employee ID:</strong> 111
                </p>
                <p>
                  <strong>Name:</strong> mohan
                </p>
                <p>
                  <strong>Department:</strong> Finance
                </p>
                <p>
                  <strong>Account Number:</strong> 5500694
                </p>
                <p>
                  <strong>IFSC Code:</strong> IFSC1205
                </p>
              </div>
              <div className="sala">
                <h2>Salary Details</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Basic Salary</th>
                      <th>Net Salary</th>
                      <th>HRA</th>
                      <th>TDS</th>
                      <th>PF</th>
                      <th>Allowance</th>
                      <th>CTC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1000</td>
                      <td>800</td>
                      <td>200</td>
                      <td>0</td>
                      <td>100</td>
                      <td>150</td>
                      <td>1200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="sign">
                <p>Employee Signature</p>
                <p>Manager Signature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download">
        <button className="btn" onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
};

export default Payslip;
