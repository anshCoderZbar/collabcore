import React from "react";
import { Tooltip } from "react-tooltip";
import ReactApexChart from "react-apexcharts";

import { IoInformation } from "react-icons/io5";
import { BsArrowUpShort } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";

export const EariningCard = () => {
  const series = [
    {
      data: [
        [1, 10000],
        [2, 12000],
        [3, 16000],
        [4, 28000],
        [5, 30000],
      ],
    },
  ];

  const options = {
    chart: {
      type: "area",
      zoom: {
        autoScaleYaxis: false,
      },
      toolbar: {
        show: false,
        autoSelected: "pan",
      },
    },
    xaxis: {
      range: 4,
      tickAmount: 4,
    },
    yaxis: {
      labels: {
        formatter: (value) => Math.round(value),
      },
      max: 30000,
      tickAmount: 1,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      colors: ["#1751D0"],
    },
    colors: ["#1751D0"],
    fill: {
      colors: ["#1751D0"],
    },
    series: series,
  };

  return (
    <div className="dashboard_head_card ">
      <div className="card_top">
        <div className="card_text">
          <div className="d-flex align-items-center position-relative">
            <h3>Earnings</h3>
            <div id="earnings" className="info_dash_icon">
              <IoInformation />
              <Tooltip anchorSelect="#earnings" place="right">
                <span className="tooltip_txt">Earnings</span>
              </Tooltip>
            </div>
            <div className="view_card_detail">
              <BiDotsVerticalRounded />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <p>$33,982</p>
            <div className="perc_inc">
              <BsArrowUpShort />
              <p>2.45%</p>
            </div>
          </div>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={120}
        />
      </div>
    </div>
  );
};
