import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { ChevronDownIcon } from "@heroicons/react/outline";

function getCoin(list, id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id == id) {
      return list[i];
    }
  }
  return null;
}

function Dropdown({ list, value, setValue, disabled }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [value]);

  return (
    <div className="relative">
      <button
        className={classNames(" px-3 py-2 rounded-md font-light", {
          "dark:bg-white dark:text-gray-800": false,
          "dark:bg-black dark:text-gray-400": true,
        })}
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-row items-center space-x-2">
          <p>{getCoin(list, value)?.name}</p>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </button>
      {open && (
        <div className="absolute h-fit max-h-52 min-w-[9rem] w-fit bg-dark-900 top-12 right-0 rounded-xl z-50 overflow-y-scroll">
          <div className="my-2">
            {list.map((coin, index) => {
              return (
                <DropdownItem
                  onClick={() => setValue(coin.id)}
                  key={index}
                  selected={coin.id === value}
                  disabled={disabled.includes(coin.id)}
                >
                  {coin.name}
                </DropdownItem>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function DropdownItem({ children, onClick, selected, disabled }) {
  return (
    <div
      className={classNames("py-2 px-4 rounded-xl mx-2", {
        "opacity-75 dark:text-gray-500": disabled,
        "bg-white dark:text-black": selected,
        "hover:bg-dark-600 dark:text-white cursor-pointer":
          !disabled && !selected,
      })}
      onClick={selected || disabled ? undefined : onClick}
    >
      {children}
    </div>
  );
}

export default Dropdown;
