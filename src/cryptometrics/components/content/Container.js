import React from "react";

function Container(props) {
  return (
    <div className="container mx-auto lg:pt-8 p-2 sm:p-8 md:py-16">
      {props.children}
    </div>
  );
}

export default Container;
