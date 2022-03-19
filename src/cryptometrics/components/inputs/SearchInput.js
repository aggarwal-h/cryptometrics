import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import Input from "./Input";

function SearchInput({ onChange }) {
  return (
    <div className="relative">
      <Input
        className="w-52 h-12 text-base font-semibold outline-none dark:text-white px-3 pr-10 rounded-2xl bg-dark-700"
        placeholder="Search"
        type="text"
        onChange={onChange}
        symbolRight={<SearchIcon className="w-6 h-6 dark:text-white" />}
      ></Input>
    </div>
  );
}

export default SearchInput;
