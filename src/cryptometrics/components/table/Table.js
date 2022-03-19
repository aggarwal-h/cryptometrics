import classNames from "classnames";
import React from "react";

function Table({ children, className }) {
  return <table className={classNames("w-full", className)}>{children}</table>;
}

export default Table;
