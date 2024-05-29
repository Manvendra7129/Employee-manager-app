import React from 'react'
import "./Pro.css"
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Navbar from '../NavLeft/Navbar';
import LeftSide from '../NavLeft/Leftside';
import { useState  } from 'react';
import { Link } from 'react-router-dom';

const Protable = () => {

  // const [searchText, setSearchText] = useState(''); 
  const data = [
    {
      id: 1,
      employeeId: '11',
      accountNumber: '1234567890',
      ifscCode: 'ABCD0123456',
      aadharCard: '1234 5678 9012',
      panCard: 'ABCDE1234F',
      companyName: 'Example Corp',
      designation: 'Software Engineer',
      type: 'Full-time',
      address: 'hyderabad'
  },
  {
    id: 2,
      employeeId: '22',
      accountNumber: '1234567890',
      ifscCode: 'ABCD0123456',
      aadharCard: '1234 5678 9012',
      panCard: 'ABCDE1234F',
      companyName: 'Example Corp',
      designation: 'Software Engineer',
      type: 'Full-time',
      address: '1banglore'
  },
  {
    id: 3,
      employeeId: '22',
      accountNumber: '1234567890',
      ifscCode: 'ABCD0123456',
      aadharCard: '1234 5678 9012',
      panCard: 'ABCDE1234F',
      companyName: 'Example Corp',
      designation: 'Software Engineer',
      type: 'Full-time',
      address: 'gaav'
  },
  {
    id: 4,
      employeeId: '22',
      accountNumber: '1234567890',
      ifscCode: 'ABCD0123456',
      aadharCard: '1234 5678 9012',
      panCard: 'ABCDE1234F',
      companyName: 'Example Corp',
      designation: 'Software Engineer',
      type: 'Full-time',
      address: 'shehar'
  },
  {
    id:55,
      employeeId: '55',
      accountNumber: '1234567890',
      ifscCode: 'ABCD0123456',
      aadharCard: '1234 5678 9012',
      panCard: 'ABCDE1234F',
      companyName: 'Example Corp',
      designation: 'Software Engineer',
      type: 'Full-time',
      address: 'videsh'
  }
  ];

  const addEmp=(id)=>{
    Navigate(`/projectUpdate/${id}`)
   }

   const deleteEmp=()=>{
     
   }

  //  const handleSearch = (event) => {
  //   setSearchText(event.target.value.toLowerCase()); // Lowercase for case-insensitive search
  // };

  // const filteredData = searchText
  // ? data.filter((employee) => employee.id.toString() === searchText)
  // : data;


  return (
    <div>
       <div class="parent">
        <Navbar></Navbar>
        <LeftSide></LeftSide>
        
        <div class="main1">
        <div className="down2">
          <div className="pro">
            <h1>Employee Professional Details</h1>
          </div>
          {/* <div className="search-container">
              <label htmlFor="search">Search by ID: </label>
              <input
                type="text"
                id="search"
                value={searchText}
                onChange={handleSearch}
                placeholder="Enter ID to search"
              />
            </div> */}
        
          <div className="table-container">
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Employee ID</th>
                            <th>Account Number</th>
                            <th>IFSC Code</th>
                            <th>Aadhar Card</th>
                            <th>PAN Card</th>
                            <th>Company Name</th>
                            <th>Designation</th>
                            <th>Type</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.employeeId}</td>
                                <td>{employee.accountNumber}</td>
                                <td>{employee.ifscCode}</td>
                                <td>{employee.aadharCard}</td>
                                <td>{employee.panCard}</td>
                                <td>{employee.companyName}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.type}</td>
                                <td>{employee.address}</td>
                                <td className="action-buttons">
    <Link to="/editProff"><button id='edit'><CiEdit/></button></Link>
    <button id='delete' onClick={deleteEmp}><MdDeleteOutline /></button>
</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="addEmp">
              <button className='btn' onClick={addEmp}>Add Employee</button>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Protable