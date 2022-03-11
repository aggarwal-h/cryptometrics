import classNames from "classnames";
import React from "react";

export default function Button({ children, className, onClick }) {
  return (
    <button
      className={classNames("py-2 px-5 rounded-xl", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
