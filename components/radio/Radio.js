import React from "react";
import classNames from "classnames";

function Radio({ selected, radioValue, radioLabel, onChange }) {
  return (
    <label className="inline-flex items-center w-full cursor-pointer">
      <input
        type="radio"
        className="form-radio h-4 w-4 accent-indigo-600 hover:accent-indigo-700"
        value={radioValue}
        checked={selected === radioValue}
        onChange={onChange}
      />
      <span
        className={classNames("font-poppins ml-2 text-base", {
          "dark:text-white font-extralight": selected !== radioValue,
          "dark:text-indigo-500": selected === radioValue,
        })}
      >
        {radioLabel}
      </span>
    </label>
  );
}
export default Radio;
