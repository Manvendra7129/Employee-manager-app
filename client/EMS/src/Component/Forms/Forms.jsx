
import React, { useState,useRef } from 'react';
import './Forms.css'; 

const Forms = () => {
  const [currentForm, setCurrentForm] = useState('first'); 

  const handleSubmit =()=>{
   
       

  }

  const firstFormRefs = {
    id: useRef(),
    name: useRef(),
    password: useRef(),
    age: useRef(),
    gender: useRef(),
    email: useRef(),
    phone: useRef(),
    image: useRef(),
    manager: useRef()
  };
  const secondFormRefs = {
    id: useRef(),
    account: useRef(),
    designation: useRef(),
    company: useRef(),
    ifsc: useRef(),
    addhar: useRef(),
    pan: useRef(),
    type: useRef(),
    ctc: useRef()
  };

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
            <input type="number" id="id" placeholder='Enter Employee Id' ref={firstFormRefs.id} />
          </div> 
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder='Enter Name' ref={firstFormRefs.name} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder='Enter Password' ref={firstFormRefs.password} />
          </div>
          <div className="form-group">
    <label htmlFor="age">Age:</label>
    <input type="number" id="age" placeholder='Enter Age' ref={firstFormRefs.age} />
  </div>
  <div className="form-group">
    <label htmlFor="gender">Gender:</label>
    <select id="gender" name="gender" required ref={firstFormRefs.gender}>
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input type="text" id="email" placeholder='Enter Email' ref={firstFormRefs.email} />
  </div>
  <div className="form-group">
    <label htmlFor="phone">Phone:</label>
    <input type="number" id="phone" placeholder='Enter Mobile Number' ref={firstFormRefs.phone}/>
  </div>
  <div className="form-group">
    <label htmlFor="address">Address:</label>
    <input type="text" id="address" placeholder='Enter Your Address' ref={firstFormRefs.address}/>
  </div>
  <div class="form-group">
  <label for="image">Image:</label>
  <input type="file" id="image" accept="image/*" class="custom-file-input" ref={firstFormRefs.image}/>
</div>
  <div className="form-group">
    <label htmlFor="manager">Manager:</label>
    <input type="text" id="manager" placeholder='Enter Reporting Manager' ref={firstFormRefs.manager} />
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
            <input type="number" id="id" placeholder='Enter Employee Id'  ref={secondFormRefs.id} />
          </div> 
   <div className="form-group">
     <label htmlFor="name">Account:</label>
     <input type="number" id="account" placeholder='Enter Account Number'  ref={secondFormRefs.account} />
   </div>
   <div className="form-group">
     <label htmlFor="designation">Designation:</label>
     <input style={{marginLeft:"15px"}} type="text" id="designation" placeholder='Enter Designation'  ref={secondFormRefs.designation} />
   </div>
   <div className="form-group">
     <label htmlFor="company">Company:</label>
     <input type="text" id="company" placeholder='Enter Company Name'  ref={secondFormRefs.company} />
   </div>
   <div className="form-group">
     <label htmlFor="ifsc">IFSC:</label>
     <input type="number" id="ifsc" placeholder='Enter IFSC Code'  ref={secondFormRefs.ifsc} />
   </div>
   <div className="form-group">
     <label htmlFor="addhar">Addhar:</label>
     <input type="number" id="addhar" placeholder='Enter Addhar Card Numbder'   ref={secondFormRefs.addhar}/>
   </div>
   <div className="form-group">
        <label htmlFor="pan">pan:</label>
     <input type="text" id="pan" placeholder='Enter Pan Card Numbder'  ref={secondFormRefs.pan} />
  </div>
   <div className="form-group">
     <label htmlFor="type">Type:</label>
     <input type="text" id="type" placeholder='Enter Type '  ref={secondFormRefs.type} />
   </div>
   <div className="form-group">
   <label htmlFor="ctc">CTC:</label>
     <input type="number" id="ctc" placeholder='Enter ctc'   ref={secondFormRefs.ctc}/>
   </div>
  <button className='submit'onClick={handleSubmit}>Submit</button>
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
