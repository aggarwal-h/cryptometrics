import React from "react";
import classNames from "classnames";
import Button from "./Button";

function ToggleButton({ children, setActive, active, id, className }) {
  return (
    <Button
      className={classNames(
        "px-3 py-2 rounded-md font-light",
        {
          "dark:bg-white dark:text-gray-800": active === id,
          "dark:bg-black dark:text-gray-400": active !== id,
        },
        className
      )}
      onClick={() => setActive(id)}
    >
      {children}
    </Button>
  );
}

export default ToggleButton;
