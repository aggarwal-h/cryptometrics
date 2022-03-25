import classNames from "classnames";
import React from "react";

function TableHeader({ children, className }) {
  return (
    <th
      className={classNames(
        "w-full flex justify-between bg-gray-50 dark:bg-dark-800 dark:shadow-lg dark:shadow-dark-800 my-4 mx-2 px-6 text-slate-900 dark:text-white",
        className
      )}
    >
      {children}
    </th>
  );
}

export default TableHeader;
