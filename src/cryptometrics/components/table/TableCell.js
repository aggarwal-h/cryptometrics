import classNames from "classnames";
import React from "react";

function TableCell({ children, className }) {
  return (
    <td
      className={classNames(
        "flex flex-col justify-center items-center align-middle h-20 px-4 font-semibold",
        className
      )}
    >
      {children}
    </td>
  );
}

export default TableCell;
