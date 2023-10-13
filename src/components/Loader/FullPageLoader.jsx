import React from "react";

import { FallingLines } from "react-loader-spinner";

export const FullPageLoader = ({ isLoading }) => {
  return (
    <div className="full_loader">
      <FallingLines
        color="#0a090b"
        width="100"
        visible={isLoading}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};
