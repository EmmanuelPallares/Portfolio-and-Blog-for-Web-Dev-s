import React from "react";
import github from "../assets/github.svg";
import Image from "next/image";
import Link from "next/link";

const TopBanner = () => {
  return (

    
    <div>
      <div className="bg-[#161b22]">
        <div className="max-w-3xl mx-auto py-1 px-1 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg text-white  ">
           
              </span>
              <p className="ml-3 font-medium text-white truncate text-center">
                <span> Welcome </span>
                <p>VERSION 1</p>
              </p>
            </div>

            <div className="sm:order-3 sm:ml-3 inline">
              <a href="https://github.com/EmmanuelPallares" >
                <Image src={github} width="90" height="40" className="text-white" alt="GITHUB LOGO" />
                <p className="font-medium text-justify text-white ">
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
