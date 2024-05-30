import React, { useState } from "react";
import "./Project.css";
import Navbar from "../NavLeft/Navbar";
import LeftSide from "../NavLeft/Leftside";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const Project = () => {
  const Navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState("All");
  const projectsData = [
    {
      id: 1,
      employeeId: 11,
      projectName: "ECommerce",
      startDate: "2024-05-04",
      endDate: "2024-05-05",
      status: "Completed",
      description: "doing frontend css property",
      projectManager: "Lala Raam",
    },
    {
      id: 2,
      employeeId: 11,
      projectName: "ECommerce",
      startDate: "2024-05-04",
      endDate: "2024-05-06",
      status: "Assigned",
      description: "doing frontend css property",
      projectManager: "Lala Raam",
    },
    {
      id: 3,
      employeeId: 11,
      projectName: "ECommerce",
      startDate: "2024-05-04",
      endDate: "2024-05-06",
      status: "On Going",
      description: "doing frontend css property",
      projectManager: "Lala Raam",
    },
    {
      id: 4,
      employeeId: 11,
      projectName: "ECommerce",
      startDate: "2024-05-04",
      endDate: "2024-05-05",
      status: "On Hold",
      description: "doing frontend css property",
      projectManager: "Lala Raam",
    },
    {
      id: 5,
      employeeId: 11,
      projectName: "ECommerce",
      startDate: "2024-05-04",
      endDate: "2024-05-06",
      status: "Completed",
      description: "doing frontend css property",
      projectManager: "Lala Raam",
    },
    {
      id: 6,
      employeeId: 11,
      projectName: "ECommerce",
      startDate: "2024-05-04",
      endDate: "2024-05-05",
      status: "Assigned",
      description: "doing frontend css property",
      projectManager: "Lala Raam",
    },
    {
      id: 7,
      employeeId: 11,
      projectName: "ECommerce",
      startDate: "2024-05-04",
      endDate: "2024-05-06",
      status: "On Hold",
      description: "doing frontend css property",
      projectManager: "Lala Raam",
    },
    {
      id: 8,
      employeeId: 11,
      projectName: "ECommerce",
      startDate: "2024-05-04",
      endDate: "2024-05-05",
      status: "On Going",
      description: "doing frontend css property",
      projectManager: "Lala Raam",
    },
    {
      id: 9,
      employeeId: 11,
      projectName: "ECommerce",
      startDate: "2024-05-04",
      endDate: "2024-05-06",
      status: "Assigned",
      description: "doing frontend css property",
      projectManager: "Lala Raam",
    },
    {
      id: 10,
      employeeId: 11,
      projectName: "ECommerce",
      startDate: "2024-05-04",
      endDate: "2024-05-05",
      status: "On Going",
      description: "doing frontend css property",
      projectManager: "Lala Raam",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Assigned":
        return "blue";
      case "On Going":
        return "green";
      case "On Hold":
        return "orange";
      case "Completed":
        return "purple";
      default:
        return "pink";
    }
  };

  const filteredProjects =
    selectedStatus === "All"
      ? projectsData
      : projectsData.filter((project) => project.status === selectedStatus);

  const addProj = () => {
    Navigate("/addProject");
  };

  return (
    <div>
      <div className="parent">
        <Navbar />
        <LeftSide />

        <div className="main">
          <div className="top">
            <button
              className="statu"
              style={{
                backgroundColor: getStatusColor("Assigned"),
                color: "white",
              }}
              onClick={() => setSelectedStatus("Assigned")}
            >
              Assigned
            </button>
            <button
              className="statu"
              style={{
                backgroundColor: getStatusColor("On Going"),
                color: "white",
              }}
              onClick={() => setSelectedStatus("On Going")}
            >
              On Going
            </button>
            <button
              className="statu"
              style={{
                backgroundColor: getStatusColor("On Hold"),
                color: "white",
              }}
              onClick={() => setSelectedStatus("On Hold")}
            >
              On Hold
            </button>
            <button
              className="statu"
              style={{
                backgroundColor: getStatusColor("Completed"),
                color: "white",
              }}
              onClick={() => setSelectedStatus("Completed")}
            >
              Completed
            </button>
            <button
              className="statu"
              style={{
                backgroundColor: getStatusColor("All"),
                color: "white",
              }}
              onClick={() => setSelectedStatus("All")}
            >
              All
            </button>
            <button className="statu" onClick={addProj}>
              Add Project
            </button>
          </div>
          <div className="down1">
            {filteredProjects.map((project) => (
              <div className="card" key={project.id}>
                <p
                  style={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  Employee
                </p>
                <p>
                  Id:{" "}
                  <span style={{ fontWeight: 400 }}>{project.employeeId}</span>
                </p>
                <p>
                  Project:{" "}
                  <span style={{ fontWeight: 400 }}>{project.projectName}</span>
                </p>
                <div className="date">
                  <p>
                    Start Date:{" "}
                    <span style={{ fontWeight: 400 }}>{project.startDate}</span>
                  </p>
                  <p>
                    End Date:{" "}
                    <span style={{ fontWeight: 400 }}>{project.endDate}</span>
                  </p>
                </div>
                <p>
                  Status:{" "}
                  <span
                    className="status"
                    style={{
                      fontWeight: 400,
                      backgroundColor: getStatusColor(project.status),
                    }}
                  >
                    {project.status}
                  </span>
                </p>
                <div id="des">
                  <p>Description:</p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      {project.description}
                    </span>
                  </p>
                </div>
                <div id="pr">
                  <p>Project Manager:</p>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      {project.projectManager}
                    </span>
                  </p>
                </div>
                <div id="btn">
                  <Link to="/editProject">
                    <button className="btn">Edit</button>
                  </Link>
                  <button className="btn">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
