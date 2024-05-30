import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../NavLeft/Navbar";
import LeftSide from "../NavLeft/Leftside";

const EditPersonal = () => {
  const { id } = useParams(); // Get the employee ID from the URL
  const [employee, setEmployee] = useState({
    employeeId: "",
    name: "",
    emailid: "",
    password: "",
    number: "",
    age: "",
    gender: "",
    image: "",
    manager: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the employee data based on the ID
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`YOUR_API_ENDPOINT/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching the employee data", error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { id, ...employeeData } = employee;
      await axios.put(`localhost:8080/${id}`, employeeData);

      navigate("/admin");
    } catch (error) {
      console.error("Error updating the employee data", error);
    }
  };

  return (
    <div>
      <div className="parent">
        <Navbar />
        <LeftSide />
        <div className="main1">
          <div className="down4">
            <div className="pro">
              <h1>Employee Personal Details</h1>
            </div>
            <div className="card4">
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Employee
              </p>
              <form onSubmit={handleSubmit}>
                <div className="inputCon">
                  <p style={{ fontWeight: "600", marginRight: "5px" }}>
                    Employee Id:
                  </p>
                  <input
                    type="number"
                    name="employeeId"
                    value={employee.employeeId}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputCon">
                  <p style={{ fontWeight: "600", marginRight: "5px" }}>Name:</p>
                  <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputCon">
                  <p style={{ fontWeight: "600", marginRight: "5px" }}>
                    Email Id:
                  </p>
                  <input
                    type="email"
                    name="emailid"
                    value={employee.emailid}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputCon">
                  <p style={{ fontWeight: "600", marginRight: "5px" }}>
                    Password:
                  </p>
                  <input
                    type="password"
                    name="password"
                    value={employee.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputCon">
                  <p style={{ fontWeight: "600", marginRight: "5px" }}>
                    Number:
                  </p>
                  <input
                    type="text"
                    name="number"
                    value={employee.number}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputCon">
                  <p style={{ fontWeight: "600", marginRight: "5px" }}>Age:</p>
                  <input
                    type="number"
                    name="age"
                    value={employee.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputCon">
                  <p style={{ fontWeight: "600", marginRight: "5px" }}>
                    Gender:
                  </p>
                  <input
                    type="text"
                    name="gender"
                    value={employee.gender}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputCon">
                  <p style={{ fontWeight: "600", marginRight: "5px" }}>
                    Image URL:
                  </p>
                  <input
                    type="text"
                    name="image"
                    value={employee.image}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputCon">
                  <p style={{ fontWeight: "600", marginRight: "5px" }}>
                    Manager:
                  </p>
                  <input
                    type="text"
                    name="manager"
                    value={employee.manager}
                    onChange={handleChange}
                  />
                </div>
                <div className="update">
                  <button className="btn" type="submit">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPersonal;
