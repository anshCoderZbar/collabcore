import React from "react";
import { ColorRing } from "react-loader-spinner";

export const Loader = ({ isLoading }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <ColorRing
        visible={isLoading}
        height="50"
        width="50"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["0a090b"]}
      />
    </div>
  );
};
