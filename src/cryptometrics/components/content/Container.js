import React from "react";

function Container(props) {
  return (
    <div className="container mx-auto pt-8 p-2 sm:p-8 md:p-16">
      {props.children}
    </div>
  );
}

export default Container;
