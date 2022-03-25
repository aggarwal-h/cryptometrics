import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import classnames from "classnames";
import { useRouter } from "next/router";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={classnames(
        "sticky lg:hidden top-0 left-0 right-0 h-16 z-50 border-gray-200 py-2.5",
        {
          " bg-gray-50 dark:bg-dark-600": open,
          "rounded bg-white dark:bg-dark-900": !open,
        }
      )}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto pl-1 pr-2">
        <Link href="/">
          <a>
            <Image
              src="/crypto_mobile_logo.png"
              width="50%"
              height="40%"
              objectFit="contain"
              alt="CryptoMetrics Icon"
              priority={true}
            />
          </a>
        </Link>
        <button onClick={() => setOpen((open) => !open)}>
          {open ? (
            <XIcon className="w-6 h-6 dark:text-white" />
          ) : (
            <MenuAlt3Icon className="w-6 h-6 dark:text-white" />
          )}
        </button>
      </div>
      <div
        className={classnames(
          "w-full bg-gray-50 dark:bg-dark-600 px-10 pt-2 pb-6 rounded-b-3xl",
          {
            "hidden rounded-2xl": !open,
            "block shadow-xl": open,
          }
        )}
      >
        <ul className="flex flex-col">
          <NavbarListItem href="/" title="Home" />
          <NavbarListItem href="/compare" title="Compare" />
        </ul>
      </div>
    </nav>
  );
}

function NavbarListItem({ href, title }) {
  const router = useRouter();
  return (
    <li>
      <Link href={href}>
        <a
          className={classnames("block rounded-xl p-3 mt-2", {
            "bg-blue-600 text-white": router.pathname === href,
            "bg-gray-100 dark:bg-dark-900 dark:text-white":
              router.pathname !== href,
          })}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

export default Navbar;
