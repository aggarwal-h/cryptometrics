import React from "react";

export function Filter({
  subject,
  condition,
  value,
  buttonIcon,
  onButtonClick,
}) {
  return (
    <div className="flex flex-wrap justify-start items-center mx-1 mt-2">
      <div className="py-5 pl-5 pr-1 font-sans bg-dark-600 rounded-l-lg dark:text-white inline-flex h-10 justify-center items-center whitespace-nowrap font-normal">
        <span>{subject}&nbsp;</span>
        <span className="font-light dark:text-neutral-300">
          {condition}&nbsp;
        </span>
        <span>{value}</span>
      </div>

      {/* Button */}
      <button
        onClick={onButtonClick}
        className="mr-2 p-2 bg-dark-600 hover:dark:bg-dark-800 rounded-r-lg justify-center items-center h-10 w-10 inline-flex font-thin text-white"
      >
        <span>{buttonIcon}</span>
      </button>
    </div>
  );
}

export function FilterButton({ icon, onClick }) {
  return (
    <button
      className="mx-1 mt-2 font-sans font-normal bg-dark-600 rounded-lg dark:text-neutral-200 dark:hover:text-indigo-600 inline-flex h-10 w-10 justify-center items-center whitespace-nowrap"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export function Filters({ children }) {
  return (
    <div className="flex flex-wrap justify-start items-center">{children}</div>
  );
}
