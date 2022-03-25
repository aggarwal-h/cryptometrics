import classNames from "classnames";
import Link from "next/link";
import React from "react";

function SidebarItem({ title, icon, active, to }) {
  return (
    <Link href={to} passHref>
      <a
        className={classNames(
          `flex items-center h-[56px] rounded-xl whitespace-nowrap font-semibold mx-2 px-4 transition-all duration-200 text-gray-700 dark:text-gray-300 select-none hover:bg-gray-200 hover:bg-opacity-40 my-1 dark:bg-dark-800 dark:hover:bg-dark-700 dark:hover:text-gray-200`,
          {
            "text-blue-600 dark:text-blue-600 hover:dark:text-blue-600 bg-gray-200 bg-opacity-40 dark:bg-dark-700 border-2 border-blue-500":
              active,
          }
        )}
      >
        <div className="relative flex justify-center items-center flex-shrink-0 text-[0]">
          {icon}
        </div>
        <div className="ml-4">{title}</div>
      </a>
    </Link>
  );
}

export default SidebarItem;
