import React from "react";
import { Button } from "../button";
import RadioInputForm from "../radio/RadioForm";
import classNames from "classnames";

export function SecondaryFilterDropdown({
  open,
  onSelectedFilterChange,
  radioOptions,
  radioValue,
  onRadioChange,
  inputValue,
  onInputChange,
  onFilterAdd,
  inputLeftSymbol,
  inputRightSymbol,
  inputType,
  inputEnabled = true,
}) {
  return (
    <div
      className={classNames(
        "bg-white dark:bg-dark-600 border-1 border-slate-600 sm:border-transparent w-72 rounded-xl sm:mt-2 transition-all duration-100 px-5 py-2 overflow-y-scroll shadow-xl dark:shadow-lg dark:shadow-dark-600",
        {
          block: open,
          hidden: !open,
        }
      )}
    >
      <RadioInputForm
        options={radioOptions}
        radioValue={radioValue}
        onRadioChange={onRadioChange}
        inputValue={inputValue}
        onInputChange={onInputChange}
        inputLeftSymbol={inputLeftSymbol}
        inputRightSymbol={inputRightSymbol}
        inputType={inputType}
        onSubmit={onFilterAdd}
        inputEnabled={inputEnabled}
      />
      <div className="flex flex-row space-x-2 mb-2">
        <Button
          className="bg-neutral-100 text-gray-700 font-semibold"
          onClick={() => onSelectedFilterChange(null)}
        >
          Cancel
        </Button>
        <Button
          className="bg-indigo-600 text-white font-semibold w-full"
          onClick={onFilterAdd}
          type="submit"
          disabled={inputEnabled && inputValue === ""}
        >
          Filter
        </Button>
      </div>
    </div>
  );
}

export default SecondaryFilterDropdown;
