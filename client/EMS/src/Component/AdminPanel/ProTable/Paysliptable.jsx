import React from 'react'
import "./Pro.css"
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Navbar from '../NavLeft/Navbar';
import LeftSide from '../NavLeft/Leftside';
import { Link } from 'react-router-dom';


const PayslipTable = () => {
  const data = [
    {
        id: 1,
        employeeId: '11',
        ctc:"50000",
        basicsal: 'ABCD0123456',
        pf: '1234 5678 9012',
        hra: 'ABCDE1234F',
        tds: 'Example Corp',
        allowances: 'Software Engineer',
        netsal: 'Full-time'
    },
    {
      id: 2,
        employeeId: '22',
        ctc:"50000",
        basicsal: 'ABCD0123456',
        pf: '1234 5678 9012',
        hra: 'ABCDE1234F',
        tds: 'Example Corp',
        allowances: 'Software Engineer',
        netsal: 'Full-time'
    },
    {
      id: 3,
        employeeId: '33',
        ctc:"50000",
        basicsal: 'ABCD0123456',
        pf: '1234 5678 9012',
        hra: 'ABCDE1234F',
        tds: 'Example Corp',
        allowances: 'Software Engineer',
        netsal: 'Full-time'
    },
    {
      id: 4,
        employeeId: '44',
        ctc:"50000",
        basicsal: 'ABCD0123456',
        pf: '1234 5678 9012',
        hra: 'ABCDE1234F',
        tds: 'Example Corp',
        allowances: 'Software Engineer',
        netsal: 'Full-time'
    },
    {
      id: 5,
        employeeId: '55',
        ctc:"50000",
        basicsal: 'ABCD0123456',
        pf: '1234 5678 9012',
        hra: 'ABCDE1234F',
        tds: 'Example Corp',
        allowances: 'Software Engineer',
        netsal: 'Full-time'
    }
];
  return (
    <div>
       <div class="parent">
        <Navbar></Navbar>
        <LeftSide></LeftSide>
      
        <div class="main1">
        <div className="down2">
          <div className="pro">
            <h1>Employee Finances Details</h1>
          </div>
        
          <div className="table-container">
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Employee ID</th>
                            <th>CTC</th>
                            <th>Basic Salary</th>
                            <th>PF</th>
                            <th>HRA</th>
                            <th>TDS</th>
                            <th>Allowances</th>
                            <th>Net Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.employeeId}</td>
                                <td>{employee.ctc}</td>
                                <td>{employee.basicsal}</td>
                                <td>{employee.pf}</td>
                                <td>{employee.hra}</td>
                                <td>{employee.tds}</td>
                                <td>{employee.allowances}</td>
                                <td>{employee.netsal}</td>
                                <td className="action-buttons">
    <Link to="/eidtFin"><button id='edit'><CiEdit/></button></Link>
    <button id='delete'><MdDeleteOutline /></button>
</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="addEmp">
              <button className='btn'>Add Employee</button>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default PayslipTable