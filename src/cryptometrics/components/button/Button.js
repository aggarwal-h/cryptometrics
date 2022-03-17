import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Custom button component
 *
 * @component
 * @example
 * return (
 *   <Button className="bg-indigo-500 text-white" onClick={() => console.log("Button pressed")}>
 *      Hello!
 *   </Button>
 * )
 */
function Button({ children, className, onClick }) {
  return (
    <button
      className={classNames("py-2 px-5 rounded-xl", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  /**
   * The content inside the button
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional CSS classes for the button (optional)
   */
  className: PropTypes.string,
  /**
   * The function to run when button is pressed
   */
  onClick: PropTypes.func,
};

export default Button;
