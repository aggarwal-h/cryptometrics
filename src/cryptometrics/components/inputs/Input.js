import classNames from "classnames";
import React from "react";

function Input({
  className,
  placeholder,
  type,
  onChange,
  initialValue,
  symbolLeft,
  symbolRight,
  id,
  value,
  onFocus,
  onBlur,
}) {
  return (
    <span className="relative flex w-full flex-wrap items-stretch mb-3">
      {symbolLeft && (
        <span className="absolute left-3 w-5 text-center items-center justify-center h-full z-10 py-3">
          <p className="text-black dark:text-white align-top font-extralight">
            {symbolLeft}
          </p>
        </span>
      )}
      <input
        className={classNames(
          "relative w-full h-12 text-base focus:ring-indigo-500 focus:border-indigo-500 border-1 border-transparent font-semibold outline-none dark:text-white rounded-2xl bg-gray-100 dark:bg-dark-800",
          {
            "pr-3": !symbolRight,
            "pr-8": symbolRight,
            "pl-3": !symbolLeft,
            "pl-8": symbolLeft,
          },
          className
        )}
        placeholder={placeholder}
        type={type ? type : "text"}
        onChange={onChange}
        defaultValue={initialValue || ""}
        id={id ? id : undefined}
        value={value || undefined}
        onFocus={onFocus || undefined}
        onBlur={onBlur || undefined}
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
