import { Table } from "app/common/projects/Table";
import React from "react";

import "styles/Projects.css";

export const Projects = () => {
  return (
    <div className="project_component">
      <div className="container">
        <div className="project_heading">
          <h1>Projects</h1>
        </div>
        <Table />
      </div>
    </div>
  );
};
