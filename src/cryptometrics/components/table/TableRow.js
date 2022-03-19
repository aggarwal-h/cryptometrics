import classNames from "classnames";
import React from "react";

function TableRow({ children, className }) {
  return (
    <tr
      className={classNames(
        "w-full flex justify-between dark:bg-dark-600 my-4 mx-2 px-6 rounded-2xl cursor-pointer text-slate-900 dark:text-white hover:dark:bg-slate-900",
        className
      )}
    >
      {children}
    </tr>
  );
}
export default TableRow;
