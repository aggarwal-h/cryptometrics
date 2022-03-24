import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import FilterDropdownItem from "./FilterDropdownItem";
import SecondaryFilterDropdown from "./SecondaryFilterDropdown";
import classNames from "classnames";

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
              inputEnabled={filterOptions[selectedFilter]?.input_enabled}
            />
          </span>
        ) : (
          <div ref={secondaryDropdownRef}></div>
        )}
      </CSSTransition>
    </div>
  );
}

export default FilterDropdown;
