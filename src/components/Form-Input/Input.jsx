import React from "react";

export const FormInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
