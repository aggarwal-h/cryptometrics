import React from "react";

function BoldGradientHeading({ children }) {
  return (
    <h1 className="text-4xl font-extrabold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">
      {children}
    </h1>
  );
}

export default BoldGradientHeading;
