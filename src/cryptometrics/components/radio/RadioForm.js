import classNames from "classnames";
import React from "react";
import Input from "../inputs/Input";

export function RadioInputForm({
  inputLeftSymbol,
  inputRightSymbol,
  inputType,
  options,
  radioValue,
  onRadioChange,
  inputValue,
  onInputChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col py-2 space-y-2">
        {Object.keys(options).map((key) => {
          return (
            <div key={"radio_option_" + key}>
              <Radio
                selected={radioValue}
                radioValue={key}
                radioLabel={options[key].name}
                id={key}
                onChange={onRadioChange}
              />
              <div className="my-1">
                {key === radioValue && (
                  <Input
                    placeholder="Enter a value here..."
                    initialValue={inputValue}
                    onChange={onInputChange}
                    symbolLeft={inputLeftSymbol}
                    symbolRight={inputRightSymbol}
                    type={inputType}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
}

export function Radio({ selected, radioValue, radioLabel, onChange }) {
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
        {radioLabel}
      </span>
    </label>
  );
}
