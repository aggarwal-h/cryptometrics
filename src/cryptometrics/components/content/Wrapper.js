import React from "react";

function Wrapper(props) {
  return <div className="flex h-screen">{props.children}</div>;
}

export default Wrapper;
