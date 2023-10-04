import React from "react";

import "styles/Insights.css";

import { InsightsCard } from "app/common/insights/InsightsCard";
import { InsightsCardData } from "app/mock/insights";

export const Insights = () => {
  return (
    <div className="insights_page">
      <div className="container">
        <div className="insights_banner">
          <h1>Instagram</h1>
          <div className="insights_select">
            <select className="form-select" aria-label="Default select example">
              <option value="">Month</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select className="form-select" aria-label="Default select example">
              <option value="1">Instagram</option>
              <option value="2">FaceBook</option>
              <option value="3">Twitter</option>
            </select>
          </div>
        </div>
        <div className="stats_card">
          {InsightsCardData?.map((details) => {
            return <InsightsCard details={details} key={details?.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
