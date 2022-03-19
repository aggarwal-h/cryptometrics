import React, { useState } from "react";
import Tab from "./Tab";

function Tabs({ children }) {
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

export default Tabs;
