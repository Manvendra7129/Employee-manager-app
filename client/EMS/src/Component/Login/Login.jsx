import React from 'react';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { MdOutlineAccountCircle } from "react-icons/md";
import { useRef } from 'react';
import './Login.css';


const Login = () => {

  const login={
    emailid:useRef(),
    password:useRef()
  }

  const handleLogin = () => {
    const email = login.emailid.current.value;
    const password = login.password.current.value;

    // Assuming you have the API endpoint for login
    axios.post('your-api-endpoint', { email, password })
      .then(response => {
        console.log(response.data);
        // Handle success, maybe set authentication token or redirect to dashboard
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error, maybe show an error message to the user
      });
  };


                // login logic hai bhaiiii

//   axios.post('your-api-endpoint', { email, password })
//   .then(response => {
//     const { role } = response.data; // Assuming backend sends role information

//     if (role === 'user') {
//       history.push('/userpanel'); // Redirect to user panel
//     } else if (role === 'admin') {
//       history.push('/adminpanel'); // Redirect to admin panel
//     } else {
//       console.error('Invalid role received from backend');
//       // Handle invalid role, maybe show an error message to the user
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Handle error, maybe show an error message to the user
//   });
// };


  return (
    <div className='page'>
      <div className="login">
        <div className="text">
          <p>Sign In</p>
          <span id='account'><MdOutlineAccountCircle/></span>
        </div>
        <div className="form">
          <div className="input-container">
            <HiOutlineMail className="icon" />
            <input type="text" placeholder='Enter Email Id' ref={login.emailid} />
          </div>
          <div className="input-container">
            <HiOutlineLockClosed className="icon" />
            <input type="password" placeholder='Enter Password'  ref={login.password} />
          </div>
          <button className='btn' onClick={handleLogin} >Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
