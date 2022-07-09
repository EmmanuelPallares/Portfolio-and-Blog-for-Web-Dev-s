import React from "react";
import github from "../assets/github.svg";
import Image from "next/image";
import Link from "next/link";

const TopBanner = () => {
  return (
    <div>
      <div className="bg-[#751f22]">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-[#751f22]">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </span>
              <p className="ml-3 font-medium text-white truncate text-center">
                <span> Welcome || Bienvenido</span>
                <p>BETA RELEASE</p>
              </p>
            </div>

            <div className="sm:order-3 sm:ml-3 inline">
              <a href="https://github.com/EmmanuelPallares">
                <Image src={github} width="90" height="40" alt="GITHUB LOGO" />
                <p className="font-medium text-justify text-white">
                  Source Code
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
