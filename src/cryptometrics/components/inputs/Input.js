import classNames from "classnames";
import React from "react";

function Input({
  placeholder,
  type,
  onChange,
  initialValue,
  symbolLeft,
  symbolRight,
}) {
  return (
    <span className="relative flex w-full flex-wrap items-stretch mb-3">
      {symbolLeft && (
        <span className="absolute left-3 w-5 text-center items-center justify-center h-full z-10 py-3">
          <p className="dark:text-white align-top font-extralight">
            {symbolLeft}
          </p>
        </span>
      )}
      <input
        className={classNames(
          "relative w-full h-12 text-base focus:ring-indigo-500 focus:border-indigo-500 border-1 border-transparent font-semibold outline-none dark:text-white rounded-2xl bg-dark-800",
          {
            "pr-3": !symbolRight,
            "pr-8": symbolRight,
            "pl-3": !symbolLeft,
            "pl-8": symbolLeft,
          }
        )}
        placeholder={placeholder}
        type={type ? type : "text"}
        onChange={onChange}
        defaultValue={initialValue || ""}
      ></input>
      {symbolRight && (
        <span className="absolute right-3 w-5 text-center items-center justify-center h-full z-10 py-3">
          <p className="dark:text-white align-top font-extralight">
            {symbolRight}
          </p>
        </span>
      )}
    </span>
  );
}

export default Input;
