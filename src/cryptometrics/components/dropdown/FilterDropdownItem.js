import React from "react";
import classNames from "classnames";
import { ArrowRightIcon } from "@heroicons/react/outline";

// selected: boolean
function FilterDropdownItem({
  children,
  selected,
  onClick,
  id,
  disabled = false,
}) {
  return (
    <div
      className={classNames(
        "py-3 px-4 rounded-xl dark:text-neutral-100 border-1 transition-all duration-100 cursor-pointer",
        {
          "border-transparent": !selected,
          "bg-dark-800  border-indigo-600 font-semibold": selected,
          "hover:bg-dark-800": !disabled,
        }
      )}
      onClick={disabled || !onClick ? undefined : () => onClick(id)}
      id={`${id}-option`}
    >
      <div className="flex flex-row items-center">
        {children}
        {selected && (
          <span className="ml-auto">
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        )}
      </div>
    </div>
  );
}

export default FilterDropdownItem;
