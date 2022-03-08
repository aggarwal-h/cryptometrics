import { ArrowRightIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import { RadioInputForm } from "../radio/RadioForm";
import { filterOptions } from "../../constants";

export function FilterDropdown({ open, setOpen, addFilter }) {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const [radioValue, setRadioValue] = useState("is");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (selectedFilter) {
      setRadioValue(
        filterOptions[selectedFilter].options[
          Object.keys(filterOptions[selectedFilter].options)[0]
        ].name
      );
    }
  }, [selectedFilter]);

  const onRadioChange = ({ target: { value } }) => {
    setRadioValue(value);
  };

  const onInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onSelectedFilterChange = (filterId) => {
    setSelectedFilter(filterId);
  };

  const onFilterAdd = () => {
    addFilter({
      subject: filterOptions[selectedFilter].name,
      condition: radioValue,
      value: inputValue,
    });
    setOpen(false);
  };

  return (
    <div className="absolute flex flex-row z-50">
      <div
        className={classNames(
          "dark:bg-dark-600 w-48 h-max max-h-72 rounded-xl mt-2 transition-all duration-100 p-1 overflow-y-scroll shadow-lg shadow-dark-600"
        )}
      >
        {Object.keys(filterOptions).map((key) => {
          return (
            <FilterDropdownItem
              key={"primary_option_" + key}
              selected={selectedFilter === key}
              id={key}
              onClick={onSelectedFilterChange}
            >
              {filterOptions[key].name}
            </FilterDropdownItem>
          );
        })}
      </div>
      {selectedFilter && (
        <span className="ml-3">
          <SecondaryFilterDropdown
            open={true}
            onSelectedFilterChange={onSelectedFilterChange}
            radioOptions={filterOptions[selectedFilter]?.options}
            radioValue={radioValue}
            onRadioChange={onRadioChange}
            inputValue={inputValue}
            onInputChange={onInputChange}
            onFilterAdd={onFilterAdd}
          />
        </span>
      )}
    </div>
  );
}

export function SecondaryFilterDropdown({
  open,
  onSelectedFilterChange,
  radioOptions,
  radioValue,
  onRadioChange,
  inputValue,
  onInputChange,
  onFilterAdd,
}) {
  return (
    <div
      className={classNames(
        "dark:bg-dark-600 w-72 max-h-72 rounded-xl mt-2 transition-all duration-100 px-5 py-2 overflow-y-scroll",
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
        >
          Filter
        </Button>
      </div>
    </div>
  );
}

// selected: boolean
function FilterDropdownItem({ children, selected, onClick, id }) {
  return (
    <div
      className={classNames(
        "py-3 px-4 rounded-xl dark:text-neutral-100 hover:bg-dark-800 border-1 transition-all duration-100 cursor-pointer",
        {
          "border-transparent": !selected,
          "bg-dark-800  border-indigo-600 font-semibold": selected,
        }
      )}
      onClick={() => onClick(id)}
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
