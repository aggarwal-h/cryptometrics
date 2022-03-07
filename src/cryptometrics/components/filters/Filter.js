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
      <div className="py-5 pl-5 pr-1 font-sans font-normal bg-neutral-100 rounded-l-lg dark:text-neutral-900 inline-flex h-10 justify-center items-center whitespace-nowrap">
        <span>{subject}&nbsp;</span>
        <span className="font-light dark:text-neutral-700">
          {condition}&nbsp;
        </span>
        <span>{value}</span>
      </div>

      {/* Button */}
      <button
        onClick={onButtonClick}
        className="mr-2 p-2 bg-neutral-100 hover:dark:bg-neutral-200 rounded-r-lg justify-center items-center h-10 w-10 inline-flex font-thin"
      >
        <span>{buttonIcon}</span>
      </button>
    </div>
  );
}

export function FilterButton({ icon, onClick }) {
  return (
    <button
      className="mx-1 mt-2 font-sans font-normal bg-neutral-100 rounded-lg dark:text-neutral-800 dark:hover:text-indigo-600 inline-flex h-10 w-10 justify-center items-center whitespace-nowrap"
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
