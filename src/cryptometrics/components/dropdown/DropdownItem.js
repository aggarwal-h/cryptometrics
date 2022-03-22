import classNames from "classnames";
import React from "react";

function DropdownItem({ children, onClick, selected, disabled }) {
  return (
    <div
      className={classNames("py-2 px-4 rounded-xl mx-2", {
        "opacity-75 dark:text-gray-500": disabled,
        "bg-white dark:text-black": selected,
        "hover:bg-dark-600 dark:text-white cursor-pointer":
          !disabled && !selected,
      })}
      onMouseDown={selected || disabled ? undefined : onClick}
    >
      {children}
    </div>
  );
}

export default DropdownItem;
