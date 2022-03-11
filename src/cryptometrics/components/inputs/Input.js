import React from "react";

function Input({ placeholder, type, onChange, initialValue }) {
  return (
    <input
      className="w-full h-12 text-base focus:ring-indigo-500 focus:border-indigo-500 border-1 border-transparent font-semibold outline-none dark:text-white px-3 pr-3 rounded-2xl bg-dark-800"
      placeholder={placeholder}
      type={type ? type : "text"}
      onChange={onChange}
      defaultValue={initialValue || ""}
    ></input>
  );
}

export default Input;
