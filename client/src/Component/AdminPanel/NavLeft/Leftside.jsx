import React from 'react';
import "./NavbarLeftSide.css"
import { Link } from 'react-router-dom';
const LeftSide = () => {

  const styles = {
    color: 'white', 
    textDecoration: 'none',
  };


  return (
    <div className="left">
      <div className='dasboard'>
      <Link to="/" style={styles}><p className='p'>Dashboard</p></Link>
      </div>
      <div className='pro'>
      <Link to="/professional" style={styles}><p className='p'>Professional Info</p></Link>
      </div>
      <div className='project'>
     <Link to="/projects" style={styles}><p className='p'>Projects</p></Link>
      </div>
      <div className='finances'>
      <Link to="/finances" style={styles}><p className='p'>Finances</p></Link>
      </div>
      <div className='payslip'>
      <Link to="/payslip" style={styles}><p className='p'>Payslip</p></Link>
      </div>
    </div>
  );
}

export default LeftSide;
