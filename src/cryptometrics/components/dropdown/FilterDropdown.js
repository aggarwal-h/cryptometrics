import { ArrowRightIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React, { useState, useEffect, useRef } from "react";
import Button from "../button/Button";
import RadioInputForm from "../radio/RadioForm";
import { CSSTransition } from "react-transition-group";

export function FilterDropdown({
  filterOptions,
  setOpen,
  addFilter,
  dropdownRef,
}) {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [radioValue, setRadioValue] = useState("is");
  const [inputValue, setInputValue] = useState("");
  const secondaryDropdownRef = useRef(null);

  useEffect(() => {
    if (selectedFilter) {
      setRadioValue(Object.keys(filterOptions[selectedFilter].options)[0]);
    }
  }, [filterOptions, selectedFilter]);

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
      subject: selectedFilter,
      condition: radioValue,
      value: inputValue,
    });
    setOpen(false);
  };

  return (
    <div className="absolute flex flex-row z-50" ref={dropdownRef}>
      <div
        className={classNames(
          "dark:bg-dark-600 w-56 h-max max-h-72 rounded-xl mt-2 transition-all duration-100 p-1 overflow-y-scroll shadow-lg shadow-dark-600"
        )}
      >
        {Object.keys(filterOptions).length > 0 ? (
          Object.keys(filterOptions).map((key) => {
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
          })
        ) : (
          <FilterDropdownItem disabled>No options available</FilterDropdownItem>
        )}
      </div>
      <CSSTransition
        in={selectedFilter !== null}
        classNames="secondary-dropdown"
        timeout={300}
        unmountOnExit
        nodeRef={secondaryDropdownRef}
      >
        {selectedFilter ? (
          <span className="ml-3" ref={secondaryDropdownRef}>
            <SecondaryFilterDropdown
              open={true}
              onSelectedFilterChange={onSelectedFilterChange}
              radioOptions={filterOptions[selectedFilter]?.options}
              radioValue={radioValue}
              onRadioChange={onRadioChange}
              inputValue={inputValue}
              onInputChange={onInputChange}
              onFilterAdd={onFilterAdd}
              inputLeftSymbol={filterOptions[selectedFilter]?.symbol_left}
              inputRightSymbol={filterOptions[selectedFilter]?.symbol_right}
              inputType={filterOptions[selectedFilter]?.input_type}
            />
          </span>
        ) : (
          <div ref={secondaryDropdownRef}></div>
        )}
      </CSSTransition>
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
  inputLeftSymbol,
  inputRightSymbol,
  inputType,
}) {
  return (
    <div
      className={classNames(
        "dark:bg-dark-600 w-72 max-h-72 rounded-xl mt-2 transition-all duration-100 px-5 py-2 overflow-y-scroll shadow-lg shadow-dark-600",
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
          disabled={inputValue === ""}
        >
          Filter
        </Button>
      </div>
    </div>
  );
}

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
