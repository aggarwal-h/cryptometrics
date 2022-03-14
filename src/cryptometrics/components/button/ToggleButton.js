import React from "react";
import classNames from "classnames";

export function ToggleButton({ children, setActive, active, id }) {
  return (
    <button
      className={classNames(" px-3 py-2 rounded-md font-light", {
        "dark:bg-white dark:text-gray-800": active === id,
        "dark:bg-black dark:text-gray-400": active !== id,
      })}
      onClick={() => setActive(id)}
    >
      {children}
    </button>
  );
}
