import React, { useState } from "react";
import Image from "next/image";
import newlogo from "../../assets/newlogo.svg";

import Link from "next/link";

const MobileMenu = ({ hiddenClass, handleRemove }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
          <div className="flex items-center mb-8">
            <Link href="/">
              <a className="mr-auto text-3xl font-semibold leading-none">
                <Image className="h-10" src={newlogo} alt="Monst" />
              </a>
            </Link>
            <button className="navbar-close" onClick={handleRemove}>
              <svg
                className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-dark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewbox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mobile-menu">
              <li className="mb-1 rounded-xl">
                <Link href="/blog">
                  <a className="block p-4 text-sm text-dark hover:bg-blue-50 hover:text-dark rounded-xl">
                    Blog
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/projects">
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    Projects
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/about">
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    About
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/marketplace">
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    MarketPlace
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
