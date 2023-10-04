import { Table } from "app/common/projects/Table";
import React from "react";
import { Link } from "react-router-dom";

import "styles/Projects.css";

export const Projects = () => {
  return (
    <div className="project_component">
      <div className="container">
        <div className="d-flex align-items-center  project_top">
          <h2>Home/</h2>
          <Link to={"/projects"}>Projects</Link>
        </div>
        <div className="project_heading">
          <h1>Projects</h1>
        </div>
        <Table />
      </div>
    </div>
  );
};
