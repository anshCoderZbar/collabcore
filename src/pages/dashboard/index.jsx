import React from "react";

import "styles/Dashboard.css";
import "react-tooltip/dist/react-tooltip.css";

import { EariningCard } from "app/common/Dashboard/EariningCard";
import { ProjectCard } from "app/common/Dashboard/ProjectCard";

import { Notification } from "app/common/Dashboard/Notification";
import { ReachCard } from "app/common/Dashboard/ReachCard";

export const Dashboard = () => {
  return (
    <div className="project_dashboard">
      <div className="container">
        <div className="page_heading">
          <h1>Dashboard</h1>
        </div>
        <div className="row page_head_vs">
          <div className="col-lg-4 col-sm-6">
            <EariningCard />
          </div>
          <div className="col-lg-4 col-sm-6">
            <ProjectCard />
          </div>
          <div className="col-lg-4 col-sm-6">
            <ReachCard />
          </div>
        </div>
        <div className="notification_sec">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Notifications</h2>
          </div>
          <div className="notifications">
            <Notification />
          </div>
        </div>
      </div>
    </div>
  );
};
