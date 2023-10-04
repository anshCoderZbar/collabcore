import React from "react";
import { Tooltip } from "react-tooltip";
import ReactApexChart from "react-apexcharts";

import { IoInformation } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const ProjectCard = () => {
  var options = {
    chart: {
      width: 380,
      type: "donut",
    },

    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ["#000", "#BDB4FE", "#1751D0", "#E6E6E6"],
    },
    legend: {
      labels: ["Fast-Fashion", "Skincare", "Make-up", "Other"],
    },
    colors: ["#000", "#BDB4FE", "#1751D0", "#E6E6E6"],
  };
  const series = [25, 25, 20, 30];

  return (
    <div className="dashboard_head_card">
      <div className="card_top">
        <div className="card_text">
          <div className="d-flex align-items-center position-relative">
            <h3>Projects</h3>
            <div id="project" className="info_dash_icon">
              <IoInformation />
              <Tooltip anchorSelect="#project" place="right">
                <span className="tooltip_txt">Projects</span>
              </Tooltip>
            </div>
            <div className="view_card_detail">
              <BiDotsVerticalRounded />
            </div>
          </div>
        </div>
        <div className="pie_chart">
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            height={150}
          />
        </div>
      </div>
    </div>
  );
};
