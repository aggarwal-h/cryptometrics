import classNames from "classnames";
import React, { useState } from "react";

export function Tabs({ children }) {
  const [tab, setTab] = useState("card-view");

  return (
    <div>
      <div className="flex align-middle w-fit bg-dark-600 rounded-3xl py-2 px-2">
        {children.map((child) => {
          const { id } = child.props;
          return (
            <Tab key={id} {...child.props} activeTab={tab} onClick={setTab} />
          );
        })}
      </div>
      {children.map((child) => {
        if (child.props.id !== tab) return undefined;
        return child.props.children;
      })}
    </div>
  );
}

export function Tab({ id, content, activeTab, onClick }) {
  return (
    <button
      className={classNames(
        "h-10 py-2 px-6 mx-1 rounded-2xl text-white font-semibold hover:bg-dark-800",
        {
          "bg-dark-800": activeTab === id,
        }
      )}
      onClick={() => onClick(id)}
    >
      {content}
    </button>
  );
}
