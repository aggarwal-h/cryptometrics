import React from "react";
import Button from "../button/Button";

function Filter({
  subject,
  condition,
  value,
  symbolLeft,
  symbolRight,
  buttonIcon,
  onButtonClick,
}) {
  return (
    <div
      className="flex flex-wrap justify-start items-center mx-1 mt-2"
      id={["filter", subject, condition, value]
        .join("_")
        .replaceAll(" ", "")
        .toLowerCase()}
    >
      <div className="py-5 pl-5 pr-1 font-sans bg-gray-100 dark:bg-dark-600 rounded-l-lg text-black dark:text-white inline-flex h-10 justify-center items-center whitespace-nowrap font-normal">
        <span>{subject}&nbsp;</span>
        <span className="font-light dark:text-neutral-300 text-black">
          {condition}&nbsp;
        </span>
        <span>
          {symbolLeft}
          {value}
          {symbolRight}
        </span>
      </div>

      {/* Button */}
      <Button
        onClick={onButtonClick}
        className="mr-2 p-2 bg-gray-100 hover:bg-gray-200 dark:bg-dark-600 hover:dark:bg-dark-800 rounded-r-lg rounded-l-none justify-center items-center h-10 w-10 inline-flex font-thin text-black dark:text-white"
      >
        <span>{buttonIcon}</span>
      </Button>
    </div>
  );
}

export default Filter;
