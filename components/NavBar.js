import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import newlogo from "../assets/newlogo.svg";
import { getNavigationProps } from "../lib/data";

export const getNavItems = async () => {
  const NAVITEMS = await getNavigationProps(NAVIGATIONQUERY);
  return {
    props: NAVITEMS,
  };
};

export const NavBar = (NAVITEMS) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap p-3">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Image
              src={newlogo}
              alt="An SVG of an eye"
              className="bg-transparent"
            />

            <div className="px-3 py-2 rounded text-xl hover:bg-[#111823] hover:text-white font-bold  tracking-wide">
              vitoz.dev
            </div>
          </a>
        </Link>
        <button
          className="inline-flex p-3 hover:bg-[#111823] rounded lg:hidden text-black ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-[#111823] hover:text-white">
                Home
              </a>
            </Link>
            <Link href="/projects">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-[#111823] hover:text-white">
                Projects
              </a>
            </Link>
            <Link href="/blog">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-[#111823] hover:text-white">
                Blog
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-blackd font-bold items-center justify-center hover:bg-[#111823] hover:text-white">
                About
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
