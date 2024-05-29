import React from 'react'
import "./Payslip.css"
import Navbar from '../NavLeft/Navbar'
import LeftSide from '../NavLeft/Leftside'

const Payslip = () => {
  return (
    <div>
       <div class="parent">
        <Navbar></Navbar>
        <LeftSide></LeftSide>
    
        <div class="main1">
          <div className="down8">
          <div class="container9">
        <div class="header">
            <h1>Employee Payslip</h1>
        </div>
        <div class="employee-details">
            <h2>Employee Details</h2>
            <p><strong>Employee ID:</strong> 111</p>
            <p><strong>Name:</strong> mohan</p>
            <p><strong>Department:</strong> Finance</p>
            <p><strong>Account Number:</strong> 5500694</p>
            <p><strong>IFSC Code:</strong> IFSC1205</p>
        </div>
   <div className="sala">
<h2>Salary Details</h2>
<table>
  <tr>
    <th>Basic Salary</th>
    <th>Net Salary</th>
    <th>HRA</th>
    <th>TDS</th>
    <th>PF</th>
    <th>Allowance</th>
    <th>CTC</th>
  </tr>
  <tr>
    <td>1000</td>
    <td>800</td>
    <td>200</td>
    <td>0</td>
    <td>100</td>
    <td>150</td>
    <td>1200</td>
  </tr>
</table>
</div>
          <div className="sign">
            <p>Employee Signature</p>
            <p>Manager Signature</p>
          </div>
          <div className="download">
            <button className='btn'>Download</button>
          </div>
    </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Payslip