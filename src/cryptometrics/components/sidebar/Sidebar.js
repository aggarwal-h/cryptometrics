import React from "react";
import Image from "next/image";
import { ChartBarIcon, GlobeIcon } from "@heroicons/react/outline";
import SidebarItem from "./SidebarItem";

function Sidebar({ active }) {
  return (
    <div className="hidden lg:block w-64 min-w-[16rem] dark:text-white">
      {/* Sidebar Head */}
      <span className="flex justify-center items-center mt-5" id="crypto-logo">
        <Image
          className=""
          src="/crypto_logo.png"
          width="190%"
          height="100%"
          objectFit="contain"
          alt="CryptoMetrics-logo-large"
          priority={true}
        />
      </span>

      {/* Sidebar Navigation */}
      <div className="flex flex-col overflow-x-hidden flex-grow">
        <nav className="ml-1 my-8 cursor-pointer px-2">
          <SidebarItem
            title="Home"
            icon={<GlobeIcon className="w-6 h-6" />}
            to="/"
            active={active === "home"}
          />
          <SidebarItem
            title="Compare"
            icon={<ChartBarIcon className="w-6 h-6" />}
            to="/compare"
            active={active === "compare"}
          />
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
