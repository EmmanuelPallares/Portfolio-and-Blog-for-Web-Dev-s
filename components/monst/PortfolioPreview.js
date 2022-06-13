import React from "react";
import Slider1 from "../../components/slider/Slider1";
const PortfolioPreview = () => {
  return (
    <>
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
              <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                <h2
                  className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  Simple Solution for <span className="">Complex</span>{" "}
                  Connections
                </h2>
                <p
                  className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                  data-wow-delay=".9s"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-wrap">
              <div className="relative w-full">
                <div
                  className="carausel-2-columns slick-carausel"
                  id="carausel-2-columns-1"
                >
                  <Slider1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPreview;
