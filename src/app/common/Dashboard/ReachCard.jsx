import React from "react";
import { Tooltip } from "react-tooltip";
import ReactApexChart from "react-apexcharts";

import { IoInformation } from "react-icons/io5";
import { BsArrowUpShort } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const ReachCard = () => {
  const series = [
    {
      name: "Session Duration",
      data: [100, 400, 800, 200, 700],
    },
    {
      name: "Page Views",
      data: [190, 280, 550, 170, 800],
    },
  ];

  const options = {
    chart: {
      type: "line",
      zoom: {
        autoScaleYaxis: false,
      },
      toolbar: {
        show: false,
        autoSelected: "pan",
      },
    },
    xaxis: {
      categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan"],
    },
    yaxis: {
      labels: {
        formatter: (value) => Math.round(value),
      },
      max: 1000,
      tickAmount: 1,
    },
    colors: ["#1751D0", "#B0A4F9"],

    dataLabels: { enabled: false },
    legend: {
      show: false,
    },
    series: series,
  };

  return (
    <div className="dashboard_head_card ">
      <div className="card_top">
        <div className="card_text">
          <div className="d-flex align-items-center position-relative">
            <h3>Reach</h3>
            <div id="reach" className="info_dash_icon">
              <IoInformation />
              <Tooltip anchorSelect="#reach" place="right">
                <span className="tooltip_txt">Reach</span>
              </Tooltip>
            </div>
            <div className="view_card_detail">
              <BiDotsVerticalRounded />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <p>982</p>
            <div className="perc_inc">
              <BsArrowUpShort />
              <p>12.68%</p>
            </div>
          </div>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={120}
        />
      </div>
    </div>
  );
};
