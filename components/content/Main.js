import React from "react";

function Main(props) {
  return (
    <main className="flex flex-col flex-auto overflow-auto min-h-screen pl-0 transition-[padding] duration-200 dark:bg-dark-800">
      {props.children}
    </main>
  );
}

export default Main;
