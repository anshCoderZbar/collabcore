import React from "react";

import { BsArrowDown, BsArrowUp, BsInfoLg } from "react-icons/bs";

export const InsightsCard = ({ details }) => {
  return (
    <div className="card card-stats mb-4 mb-xl-0">
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <div className="d-flex align-items-center gap-2">
              <h5 className="card-title ">{details?.heading}</h5>
              <div className="insights_info_icon">
                <BsInfoLg />
              </div>
            </div>
            <span className="insights_numbers">{details?.numbers}</span>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <div
              className="icon_vshc icon-shape  rounded-circle "
              style={{ background: details?.bgColor, color: details?.color }}
            >
              {details?.icon}
            </div>
          </div>
        </div>
        <p className="mt-1 mb-0  text-sm fw-semibold">
          {details?.inc && (
            <span style={{ color: "#10af65" }}>
              <BsArrowUp />
              {details?.inc}
            </span>
          )}
          {details?.dec && (
            <span style={{ color: "#a44242" }}>
              <BsArrowDown />
              {details?.dec}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
