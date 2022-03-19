import React from "react";

function Filters({ children }) {
  return (
    <div className="flex flex-wrap justify-start items-center">{children}</div>
  );
}

export default Filters;
