import classNames from "classnames";
import React from "react";

export function Table({ children, className }) {
  return <table className={classNames("w-full", className)}>{children}</table>;
}

export function TableRow({ children, className }) {
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

export function TableHeader({ children, className }) {
  return (
    <th
      className={classNames(
        "w-full flex justify-between dark:bg-dark-800 shadow-lg shadow-dark-800 my-4 mx-2 px-6 text-slate-900 dark:text-white",
        className
      )}
    >
      {children}
    </th>
  );
}

export function TableCell({ children, className }) {
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
