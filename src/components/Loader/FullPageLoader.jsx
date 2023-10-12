import React from "react";

import { FallingLines } from "react-loader-spinner";

export const FullPageLoader = () => {
  return (
    <div className="full_loader">
      <FallingLines
        color="#0a090b"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};
