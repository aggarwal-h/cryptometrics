import React from "react";
import classNames from "classnames";
import Button from "./Button";
import PropTypes from "prop-types";

/**
 * Button component for toggling items on/off
 *
 * @component
 * @example
 * return (
 *   <ToggleButton id={"demo"} active={"demo2"} setActive={() => console.log("active!")}>
 *      Demo
 *   </ToggleButton>
 * )
 */
function ToggleButton({ children, setActive, active, id, className, tooltip }) {
  return (
    <div className="has-tooltip flex flex-col items-center relative">
      <Button
        className={classNames(
          "px-3 py-2 rounded-md font-light",
          {
            "bg-dark-900 dark:bg-white text-gray-100 dark:text-gray-800":
              active === id,
            "bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-400":
              active !== id,
          },
          className
        )}
        onClick={() => setActive(id)}
      >
        {children}
      </Button>
      {tooltip && (
        <span
          className={classNames(
            "tooltip absolute rounded-lg shadow-lg px-3 py-2 mt-11 w-max",
            {
              "bg-dark-900 dark:bg-white text-gray-100 dark:text-gray-800":
                active === id,
              "bg-white shadow-lg dark:bg-black text-gray-800 dark:text-gray-400":
                active !== id,
            }
          )}
        >
          {tooltip}
        </span>
      )}
    </div>
  );
}

ToggleButton.propTypes = {
  /**
   * The content inside the button
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional CSS classes for the button (optional)
   */
  className: PropTypes.string,
  /**
   * The id of the currently active button
   */
  active: PropTypes.string.isRequired,
  /**
   * The function to run to make button active
   */
  setActive: PropTypes.func.isRequired,
  /**
   * Unique identifier for the button
   */
  id: PropTypes.string.isRequired,
};

export default ToggleButton;
