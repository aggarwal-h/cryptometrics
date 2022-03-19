import React from "react";
import Button from "./Button";

export default function FilterButton({ icon, onClick }) {
  return (
    <Button
      className="mx-1 mt-2 font-sans font-normal bg-dark-600 rounded-lg dark:text-neutral-200 dark:hover:text-indigo-600 inline-flex h-10 w-10 justify-center items-center whitespace-nowrap"
      onClick={onClick}
    >
      <span className="text-white">{icon}</span>
    </Button>
  );
}
