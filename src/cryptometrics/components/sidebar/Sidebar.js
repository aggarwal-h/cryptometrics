import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { ChartBarIcon, GlobeIcon } from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="w-64 dark:text-white">
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
            active={true}
          />
          <SidebarItem
            title="Compare"
            icon={<ChartBarIcon className="w-6 h-6" />}
            to="/map"
            active={false}
          />
        </nav>
      </div>
    </div>
  );
}

function SidebarItem({ title, icon, active, to }) {
  return (
    <Link href={to} passHref>
      <a
        className={classNames(
          `flex items-center h-[56px] rounded-xl whitespace-nowrap font-semibold mx-2 px-4 transition-all duration-200 text-gray-500 dark:text-gray-300 select-none hover:bg-gray-100 hover:bg-opacity-40 my-1 dark:bg-dark-800 dark:hover:bg-dark-700 dark:hover:text-gray-200`,
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

export default Sidebar;
