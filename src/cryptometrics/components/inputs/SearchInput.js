import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function SearchInput() {
  return (
    <div className="relative">
      <input
        className="w-52 h-12 text-base font-semibold outline-none dark:text-white px-3 pr-10 rounded-2xl bg-dark-700"
        placeholder="Search"
        type="text"
      ></input>
      <button className="absolute top-0 right-3 bottom-0 w-6">
        <SearchIcon className="w-6 h-6 dark:text-white" />
      </button>
    </div>
  );
}

export default SearchInput;
