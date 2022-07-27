import Link from "next/link";
import Image from "next/image";
import React from "react";
import newlogo from "../../assets/newlogo.svg";

import { useState, useEffect } from "react";
import TopBanner from "../TopBanner";

const Header = ({ handleHidden }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      {/* <TopBanner /> */}
      <header
        className={
          scroll
            ? "bg-transparent sticky-bar mt-4 stick"
            : "bg-transparent sticky-bar mt-4"
        }
      >
        <div className="container bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            <Link href="/">
              <a className="text-3xl font-semibold leading-none">
                <Image className="h-10" src={newlogo} alt="Monst" />
              </a>
            </Link>

            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              <li className="pt-4 pb-4">
                {/* Home */}
                <Link href="/">
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Home
                  </a>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/blog">
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Blog
                  </a>
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link href="/projects">
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Projects
                  </a>
                </Link>
              </li>
              <li className="group relative pt-4 pb-4 has-child">
                <Link href="#">
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    About
                  </a>
                </Link>
                <ul className="drop-down-menu min-w-200">
                  <li>
                    <Link href="/brand">
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Brand
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/team">
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Team
                      </a>
                    </Link>
                  </li> */}

                  <li>
                    <Link href="/faqs">
                      <a className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">
                        Faqs
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="pt-4 pb-4">
                <Link href="/marketplace">
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    MarketPlace
                  </a>
                </Link>
              </li>
            </ul>
            <div className="hidden lg:block"></div>
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
                onClick={handleHidden}
              >
                <svg
                  className="fill-current h-4 w-4"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
