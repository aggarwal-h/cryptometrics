import React from "react";

function Container(props) {
  return (
    <div className="container mx-auto pt-8 p-2 sm:p-8 md:py-16 md:pr-12 md:pl-4">
      {props.children}
    </div>
  );
}

export default Container;
