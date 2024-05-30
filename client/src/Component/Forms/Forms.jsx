
import React, { useState } from 'react';
import './Forms.css'; 

const Forms = () => {
  const [currentForm, setCurrentForm] = useState('first'); 

  const handleNext = (event) => {
    event.preventDefault(); 
    setCurrentForm('second'); 
  };

  const renderForm = (form) => {
    switch (form) {
      case 'first':
        return (
          <div className="container1">
          <form className='details' onSubmit={handleNext}>
            <h1 id='text'>Personal Details</h1>
            <div className="form-group">
            <label htmlFor="id">Id:</label>
            <input type="number" id="id" placeholder='Enter Employee Id' />
          </div> 
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder='Enter Name' />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder='Enter Password' />
          </div>
          <div className="form-group">
    <label htmlFor="age">Age:</label>
    <input type="number" id="age" placeholder='Enter Age' />
  </div>
  <div className="form-group">
    <label htmlFor="gender">Gender:</label>
    <select id="gender" name="gender" required>
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input type="text" id="email" placeholder='Enter Email' />
  </div>
  <div className="form-group">
    <label htmlFor="phone">Phone:</label>
    <input type="number" id="phone" placeholder='Enter Mobile Number' />
  </div>
  <div class="form-group">
  <label for="image">Image:</label>
  <input type="file" id="image" accept="image/*" class="custom-file-input"/>
</div>
  <div className="form-group">
    <label htmlFor="manager">Manager:</label>
    <input type="text" id="manager" placeholder='Enter Reporting Manager' />
  </div>
          <button className='submit'>Next</button>
        </form>
        </div>
        );
      case 'second':
        return (
         
    <div className="container5">
            <h1 id='text'>Professional Details</h1> 
            <form className='details'>
            <div className="form-group">
            <label htmlFor="id"> Id:</label>
            <input type="number" id="id" placeholder='Enter Employee Id' />
          </div> 
   <div className="form-group">
     <label htmlFor="name">Account:</label>
     <input type="number" id="account" placeholder='Enter Account Number' />
   </div>
   <div className="form-group">
     <label htmlFor="designation">Designation:</label>
     <input style={{marginLeft:"15px"}} type="text" id="Designation" placeholder='Enter Designation' />
   </div>
   <div className="form-group">
     <label htmlFor="company">Company:</label>
     <input type="text" id="company" placeholder='Enter Company Name' />
   </div>
   <div className="form-group">
     <label htmlFor="ifsc">IFSC:</label>
     <input type="number" id="ifsc" placeholder='Enter IFSC Code' />
   </div>
   <div className="form-group">
     <label htmlFor="addhar">Addhar:</label>
     <input type="number" id="addhar" placeholder='Enter Addhar Card Numbder' />
   </div>
   <div className="form-group">
        <label htmlFor="pan">pan:</label>
     <input type="text" id="pan" placeholder='Enter Pan Card Numbder' />
  </div>
   <div className="form-group">
     <label htmlFor="type">Type:</label>
     <input type="text" id="type" placeholder='Enter Type ' />
   </div>
   <div className="form-group">
   <label htmlFor="ctc">CTC:</label>
     <input type="number" id="ctc" placeholder='Enter ctc' />
   </div>
  <button className='submit'>Submit</button>
 </form>
     </div>
        );
      default:
        return null; 
    }
  };

  return (
    <div className='fm1'>
      <div className="container">
        {renderForm(currentForm)}
      </div>
    </div>
  );
};

export default Forms;
