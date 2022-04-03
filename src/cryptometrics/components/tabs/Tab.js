import classNames from "classnames";
import React from "react";

function Tab({ id, content, activeTab, onClick }) {
  return (
    <button
      className={classNames(
        "h-10 py-2 px-6 mx-1 rounded-2xl text-black dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-dark-800",
        {
          "bg-gray-200 dark:bg-dark-800": activeTab === id,
        }
      )}
      onClick={() => onClick(id)}
      id={id}
    >
      {content}
    </button>
  );
}

export default Tab;
