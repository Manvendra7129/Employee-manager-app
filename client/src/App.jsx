import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Component/Login/Login'
// import User from './Component/UserPanel/UserDashboard/User'
// import Admin from './Component/AdminDashboard/Admin'
 import Forms from './Component/Forms/Forms'
// import Project from './Component/Projects/Project'
// import Payslip from './Component/Payslip/Payslip'
// import ProjectUpdate from './Component/Projects/ProjectUpdate'
// import Employee from './Component/Emp(References)/Employee'
import ViewEmployee from './Component/AdminPanel/ProTable/ViewEmployee'
// import Personal from './Component/AdminPanel/ProTable/Personal'
import PayslipTable from './Component/AdminPanel/ProTable/Paysliptable'
import PayslipEdit from './Component/AdminPanel/ProTable/PayslipEdit'
import UserProject from './Component/UserPanel/UserProject/UserProject'
import Navbar from './Component/AdminPanel/NavLeft/Navbar'
import LeftSide from './Component/AdminPanel/NavLeft/Leftside'
// import UserProdetails from './Component/UserPanel/UserDashboard/UserProdetails'
// import UserFinance from './Component/UserPanel/UserDashboard/UserFinance'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Admin from './Component/AdminPanel/AdminDashboard/Admin'
import Project from './Component/AdminPanel/Projects/Project'
import AddProject from './Component/AdminPanel/Projects/AddProject'
import Payslip from './Component/AdminPanel/Payslip/Payslip'
import ProjectUpdate from './Component/AdminPanel/Projects/ProjectUpdate'
import User from './Component/UserPanel/UserDashboard/User'
import UserFinance from './Component/UserPanel/UserDashboard/UserFinance'
import UserProdetails from './Component/UserPanel/UserDashboard/UserProdetails'
import EditPersonal from './Component/AdminPanel/AdminDashboard/EditPersonal'
import EditProfile from './Component/UserPanel/UserDashboard/EditProfile'
import EditProffesional from './Component/AdminPanel/ProTable/EditProffesional'
// import PayslipEdit from './Component/ProTable/PayslipEdit'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <Login></Login> */}
       {/* <User></User> */}
       {/* <Admin></Admin> */}
       {/* <Forms></Forms>  */}
       {/* <Project></Project> */}
       {/* <ProjectUpdate></ProjectUpdate> */}
       {/* <AddProject></AddProject> */}
       {/* <Payslip></Payslip> */}
       {/* <Employee></Employee> */}      
       {/* <ViewEmployee></ViewEmployee> */}
       {/* <Personal></Personal> */}
       {/* <PayslipTable></PayslipTable> */}
       {/* <UserProject></UserProject> */}
       {/* <Navbar></Navbar> */}
       {/* <LeftSide></LeftSide> */}
       {/* <UserProdetails></UserProdetails> */}
       {/* <UserProdetails></UserProdetails> */}
       {/* <UserFinance></UserFinance> */}
       {/* <PayslipEdit></PayslipEdit> */}
      



     
        
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/projects" element={<Project />} />
          <Route path='/finances' element={<PayslipTable></PayslipTable>}/>
          <Route path="/payslip" element={<Payslip></Payslip>} />
          <Route path="/professional" element={<ViewEmployee></ViewEmployee>} />
          <Route path="/editProject" element={<ProjectUpdate></ProjectUpdate>} />
          <Route path="/form" element={<Forms></Forms>} />
          <Route path="/addProject" element={<AddProject></AddProject>} />
          <Route path="/eidtFin" element={<PayslipEdit></PayslipEdit>}/>
          <Route path="/editPersonal" element={<EditPersonal></EditPersonal>}/>
          <Route path="/editProff" element={<EditProffesional></EditProffesional>}/>
       


        

          
          {/* <Route path="/" element={<User/>} />
          <Route path="/projec" element={<UserProject />} />
          <Route path='/finan' element={<UserFinance></UserFinance>}/>
          <Route path="/paysl" element={<Payslip></Payslip>} />
          <Route path="/profes" element={<UserProdetails></UserProdetails>} />
          <Route path="/editProfile" element={<EditProfile></EditProfile>} /> */}
          
           
        </Routes>
    
      
    </>
  )
}

export default App
