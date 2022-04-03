import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import Input from "./Input";

function SearchInput({ onChange, value, onFocus, onBlur, initialValue }) {
  return (
    <div className="relative">
      <Input
        className="w-52 h-12 text-base font-semibold outline-none dark:text-white px-3 pr-10 rounded-2xl bg-gray-100 dark:bg-dark-500"
        placeholder="Search"
        type="text"
        onChange={onChange}
        initialValue={initialValue || undefined}
        value={value || undefined}
        symbolRight={<SearchIcon className="w-6 h-6 dark:text-white" />}
        onFocus={onFocus || undefined}
        onBlur={onBlur || undefined}
      ></Input>
    </div>
  );
}

export default SearchInput;
