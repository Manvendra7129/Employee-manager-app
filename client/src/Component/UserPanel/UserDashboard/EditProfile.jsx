
import React, { useState } from 'react';
import './EditProfile.css'; 
import Navbar from '../NavLeft/Navbar';
import UserLeftSide from '../NavLeft/UserLeftside';


const EditProfile = () => {
  const [currentForm, setCurrentForm] = useState('first'); 

  const handleNext = (event) => {
    event.preventDefault(); 
    setCurrentForm('second'); 
  };

  const renderForm = (form) => {
    switch (form) {
      case 'first':
        return (
          <div className="cont">
          <form className='detail' onSubmit={handleNext}>
            <h1 id='text2'>Personal Details</h1>
           
          <div className="frmgroup">
            <label htmlFor="name">Name:</label>
            <input type="text2" id="name" placeholder='Enter Name' />
          </div>
          <div className="frmgroup">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder='Enter Password' />
          </div>
          <div className="frmgroup">
    <label htmlFor="age">Age:</label>
    <input type="number" id="age" placeholder='Enter Age' />
  </div>
  <div className="frmgroup">
    <label htmlFor="gender">Gender:</label>
    <select id="gender" name="gender" required>
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div className="frmgroup">
    <label htmlFor="email">Email:</label>
    <input type="text2" id="email" placeholder='Enter Email' />
  </div>
  <div className="frmgroup">
    <label htmlFor="phone">Phone:</label>
    <input type="number" id="phone" placeholder='Enter Mobile Number' />
  </div>
  <div class="frmgroup">
  <label for="image">Image:</label>
  <input type="file" id="image" accept="image/*" class="custom-file-input"/>
</div>
  <div className="frmgroup">
    <label htmlFor="manager">Address:</label>
    <input type="text2" id="address" placeholder='Enter Your Address' />
  </div>
          <button className='submit'>Next</button>
        </form>
        </div>
        );
      case 'second':
        return (

         
    <div className="cont5">
            <h1 id='text2'>Professional Details</h1> 
            <form className='detail'>
          
   <div className="frmgroup">
     <label htmlFor="name">Account:</label>
     <input type="number" id="account" placeholder='Enter Account Number' />
   </div>
   <div className="frmgroup">
     <label htmlFor="ifsc">IFSC:</label>
     <input type="number" id="ifsc" placeholder='Enter IFSC Code' />
   </div>
   <div className="frmgroup">
     <label htmlFor="addhar">Addhar:</label>
     <input type="number" id="addhar" placeholder='Enter Addhar Card Numbder' />
   </div>
   <div className="frmgroup">
        <label htmlFor="pan">pan:</label>
     <input type="text2" id="pan" placeholder='Enter Pan Card Numbder' />
  </div>
   <div className="frmgroup">
     <label htmlFor="type">Type:</label>
     <input type="text2" id="type" placeholder='Enter Type ' />
   </div>
   <div className="frmgroup">
   <label htmlFor="ctc">CTC:</label>
     <input type="number" id="ctc" placeholder='Enter ctc' />
   </div>
  <button className='submit'>Update</button>
 </form>
     </div>
        );
      default:
        return null; 
    }
  };

  return (
      <div class="parent">
            <Navbar></Navbar>
            <UserLeftSide></UserLeftSide>
    <div className='fm5'>
      <div className="contai">
        {renderForm(currentForm)}
      </div>
    </div>
    </div>
  );
};

export default EditProfile;
