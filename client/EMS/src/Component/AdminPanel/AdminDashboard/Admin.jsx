import React from 'react'
import './Admin.css';

import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../NavLeft/Navbar';
import LeftSide from '../NavLeft/Leftside';


const Admin = () => {

  const Navigate=useNavigate() 

  const addEmp=(id)=>{
    Navigate(`/form`)
   }

  const data = [
    {
        id: 1,
        employeeId: '11',
        accountNumber: '1234567890',
        emailid: 'ABCD0123456',
        password: '1234 5678 9012',
        number: '90909090',
        age: '56',
        gender: 'male',
        image: 'https://tse3.mm.bing.net/th?id=OIP.krOpfaYGnwpp-9apD4gvAAHaE8&pid=Api&P=0&h=180',
        manager: 'laal singh'
    },
    {
      id: 2,
        employeeId: '22',
        accountNumber: '1234567890',
        emailid: 'ABCD0123456',
        password: '1234 5678 9012',
        number: '90909090',
        age: '56',
        gender: 'male',
        image: 'https://tse3.mm.bing.net/th?id=OIP.krOpfaYGnwpp-9apD4gvAAHaE8&pid=Api&P=0&h=180',
        manager: 'lala'
    },
    {
      id: 3,
        employeeId: '22',
        accountNumber: '1234567890',
        emailid: 'ABCD0123456',
        password: '1234 5678 9012',
        number: '90909090',
        age: '56',
        gender: 'male',
        image: 'https://tse3.mm.bing.net/th?id=OIP.krOpfaYGnwpp-9apD4gvAAHaE8&pid=Api&P=0&h=180',
        manager: 'harch'
    },
    {
      id: 4,
        employeeId: '22',
        accountNumber: '1234567890',
        emailid: 'ABCD0123456',
        password: '1234 5678 9012',
        age: '56',
        number: '90909090',
        gender: 'male',
        image: 'https://tse3.mm.bing.net/th?id=OIP.krOpfaYGnwpp-9apD4gvAAHaE8&pid=Api&P=0&h=180',
        manager: 'slappuehar'
    },
    {
      id: 5,
        employeeId: '55',
        accountNumber: '1234567890',
        emailid: 'ABCD0123456',
        password: '1234 5678 9012',
        age: '56',
        number: '90909090',
        gender: 'male',
        image: 'https://tse3.mm.bing.net/th?id=OIP.krOpfaYGnwpp-9apD4gvAAHaE8&pid=Api&P=0&h=180',
        manager: 'videsh'
    },
    {
      id: 6,
        employeeId: '66',
        accountNumber: '1234567890',
        emailid: 'ABCD0123456',
        password: '1234 5678 9012',
        age: '56',
        number: '90909090',
        gender: 'male',
        image: 'https://tse3.mm.bing.net/th?id=OIP.krOpfaYGnwpp-9apD4gvAAHaE8&pid=Api&P=0&h=180',
        manager: 'videsh'
    },
    {
      id: 7,
        employeeId: '77',
        accountNumber: '1234567890',
        emailid: 'ABCD0123456',
        password: '1234 5678 9012',
        age: '56',
        number: '90909090',
        gender: 'male',
        image: 'https://tse3.mm.bing.net/th?id=OIP.krOpfaYGnwpp-9apD4gvAAHaE8&pid=Api&P=0&h=180',
        manager: 'videsh'
    }
];
 
const deleteEmp=()=>{
     
}

  return (
    <div>
       <div class="parent">
       <Navbar></Navbar>
       <LeftSide></LeftSide>
        <div class="main">
         <div className="up1">
            <div className="circle">
                  <img src="https://i.pinimg.com/originals/69/b8/66/69b866fe7731b295199eee7d25b55aeb.png" alt="" />
            </div>
            <div className="text2">
                  <p>Hello Admin</p>
                  <p>Manager of the Company</p>
            </div>
           
            
         </div>
        </div>
         <div className="main3">
        <div className="down2">
        
          <div className="table-container">
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Employee ID</th>
                            <th>Email Id</th>
                            <th>Password</th>
                            <th>Number</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Image</th>
                            <th>Manager</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.employeeId}</td>
                                <td>{employee.emailid}</td>
                                <td>{employee.password}</td>
                                <td>{employee.number}</td>
                                <td>{employee.age}</td>
                                <td>{employee.gender}</td>
                                <td> <img src={employee.image} alt="err" style={{ width: '60px', height: '60px',borderRadius:'20px',objectFit: 'cover' }}  /></td>
                                <td>{employee.manager}</td>
                  
                                <td className="action-buttons">
                                   <Link to="/editPersonal"><button id='edit'><CiEdit/></button></Link>
                                   <button id='delete' onClick={deleteEmp}><MdDeleteOutline /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="addEmp1">
              <button className='btn' onClick={addEmp}>Add Employee</button>
            </div>
          </div>
         </div>
    </div>
    </div>
  )
}

export default Admin