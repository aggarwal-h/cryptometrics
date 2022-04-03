import classNames from "classnames";
import React from "react";

function DropdownItem({
  children,
  className,
  onClick,
  selected,
  disabled,
  id,
}) {
  return (
    <div
      className={classNames(className, "py-2 px-4 rounded-xl mx-2", {
        "opacity-75 text-gray-400 dark:text-gray-500": disabled,
        "bg-dark-600 text-white dark:bg-white dark:text-black": selected,
        "hover:bg-gray-200 dark:hover:bg-dark-600 dark:text-white cursor-pointer":
          !disabled && !selected,
      })}
      onMouseDown={selected || disabled ? undefined : onClick}
    >
      <button
        disabled={disabled}
        id={id ? id : undefined}
        className="text-left"
      >
        {children}
      </button>
    </div>
  );
}

export default DropdownItem;
