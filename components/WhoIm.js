import React from "react";

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
            <img
              className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top"
              src="/assets/imgs/placeholders/img-1.png"
              alt="Monst"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-24 my-auto">
            <img
              src="/assets/imgs/icons/quote.svg"
              alt="Monst"
              className="wow animate__animated animate__fadeIn"
              data-wow-delay=".2s"
            />
            <h2
              className="my-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              Una cosa es una cosa y otra cosa es otra cosa
            </h2>
            <p className="mb-1 text-lg">
              <strong
                className="text-blue-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".4s"
              >
                EL Beny
              </strong>
            </p>
            <p
              className="text-gray-500 text-xs wow animate__animated animate__fadeIn"
              data-wow-delay=".5s"
            >
              Actor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIm;
