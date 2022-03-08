import classNames from "classnames";
import React from "react";
import Input from "../inputs/Input";

export function RadioInputForm({
  options,
  radioValue,
  onRadioChange,
  inputValue,
  onInputChange,
}) {
  return (
    <div>
      <div className="flex flex-col py-2 space-y-2">
        {Object.keys(options).map((key) => {
          return (
            <div key={"radio_option_" + options[key].id}>
              <Radio
                selected={radioValue}
                radioValue={options[key].name}
                id={options[key].id}
                onChange={onRadioChange}
              />
              <div className="my-1">
                {options[key].name === radioValue && (
                  <Input
                    type="text"
                    placeholder="Enter a value here..."
                    initialValue={inputValue}
                    onChange={onInputChange}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Radio({ selected, radioValue, onChange }) {
  return (
    <label className="inline-flex items-center w-full">
      <input
        type="radio"
        className="form-radio h-4 w-4 accent-indigo-600 hover:accent-indigo-700"
        value={radioValue}
        checked={selected === radioValue}
        onChange={onChange}
      />{" "}
      <span
        className={classNames("font-poppins ml-2 text-base", {
          "dark:text-white font-extralight": selected !== radioValue,
          "dark:text-indigo-500": selected === radioValue,
        })}
      >
        {radioValue}
      </span>
    </label>
  );
}
