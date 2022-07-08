import React from "react";
import Image from "next/image";
import quote from "../public/assets/quote.svg";
const WhoIm = () => {
  return (
    <section className="py-20 pb-8 overflow-x-hidden">
      <div className="container">
        <div className="flex flex-wrap mb-24">
          <div
            className="relative w-full lg:w-1/2 h-128 mb-20 lg:mb-0 wow animate__animated animate__fadeIn"
            data-wow-delay=".1s"
          >
            <div className="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-blueGray-100 rounded-xl"></div>
            <Image
              className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top bg-red-500"
              src="https://media.graphassets.com/DzgUbj7vQqu0reqhUqlL"
              alt="Monst"
              layout="fill"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-24 my-auto ">
            <Image
              src={quote}
              alt="Monst"
              className="wow animate__animated animate__fadeIn"
              data-wow-delay=".2s"
              width={100}
              height={100}
            />
            <h2
              className="my-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              La verdad os hara libres.
            </h2>
            <p className="mb-1 text-lg">
              <strong
                className="text-gray-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".4s"
              >
                Jesucristo
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIm;
