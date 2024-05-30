// import React from 'react'
// import './ProfForm.css';
// const ProfForm = () => {
//   return (
//     <div className='fm'>
//    <div className="container">
//            <h1 id='text'>Professional Details</h1> 
//            <form className='details'>
//   <div className="form-group">
//     <label htmlFor="name">Name:</label>
//     <input type="text" id="name" placeholder='Enter Name' />
//   </div>
//   <div className="form-group">
//     <label htmlFor="designation">Designation:</label>
//     <input type="text" id="Designation" placeholder='Enter Designation' />
//   </div>
//   <div className="form-group">
//     <label htmlFor="addhar">Addhar:</label>
//     <input type="number" id="addhar" placeholder='Enter Addhar Card Numbder' />
//   </div>
//   <div className="form-group">
//     <label htmlFor="pan">pan:</label>
//     <input type="text" id="pan" placeholder='Enter Pan Card Numbder' />
//   </div>
//   <div className="form-group">
//     <label htmlFor="bank">Bank:</label>
//     <input type="text" id="bank" placeholder='Enter Bank Details' />
//   </div>
//   <div className="form-group">
//     <label htmlFor="ctc">CTC:</label>
//     <input type="number" id="ctc" placeholder='Enter ctc' />
//   </div>
//   <button className='submit'>Submit</button>
// </form>

//    </div>
//     </div>
//   )
// }

// export default ProfForm







import React, { useState } from 'react';
import './ProfForm.css'; 

const ProForm = () => {
  const [currentForm, setCurrentForm] = useState('first'); 

  const handleNext = (event) => {
    event.preventDefault(); 

    setCurrentForm('second'); 
  };

  const renderForm = (form) => {
    switch (form) {
      case 'first':
        return (
        
          <form className='details' onSubmit={handleNext}>
            <h1 id='text'>Personal Details</h1> 
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
          <button className='submit'>Next</button>
        </form>
        );
      case 'second':
        return (
         
    <div className="container">
            <h1 id='text'>Professional Details</h1> 
            <form className='details'>
   <div className="form-group">
     <label htmlFor="name">Name:</label>
     <input type="text" id="name" placeholder='Enter Name' />
   </div>
   <div className="form-group">
     <label htmlFor="designation">Designation:</label>
     <input type="text" id="Designation" placeholder='Enter Designation' />
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
     <label htmlFor="bank">Bank:</label>
     <input type="text" id="bank" placeholder='Enter Bank Details' />
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
    <div className='fm'>
      <div className="container">
        {renderForm(currentForm)}
      </div>
    </div>
  );
};

export default ProForm;
