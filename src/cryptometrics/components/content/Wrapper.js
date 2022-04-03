import React from "react";

function Wrapper(props) {
  return <div className="flex">{props.children}</div>;
}

export default Wrapper;
