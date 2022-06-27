import React from "react";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section
      className="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden"
      id="key-features"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2">
            <div
              className="lg:py-6 lg:pr-77 wow animate__animated animate__heartBeat"
              data-wow-delay=".3s"
            >
              <div className="mb-4">
                <span
                  className="text-xs py-1 px-3  font-semibold bg-blue-50 rounded-xl wow animate__animated animate__swing"
                  data-wow-delay="0"
                >
                  {`Why choose us`}
                </span>
                <h2
                  className="text-4xl mt-5 font-bold font-heading wow animate__animated animate__heartBeat"
                  data-wow-delay=".3s"
                >
                  {`Exclusive features`}
                </h2>
              </div>
              <div
                className="flex items-start py-4 wow animate__animated animate__heartBeat"
                data-wow-delay=".5s"
              >
                <div className="w-8 mr-5 ">
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
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold font-heading">
                    {`Next generation of software`}
                  </h3>
                  <p className="text-blueGray-400 leading-loose">
                    {`We use functional programming techniques to build the next generation of software. Focused always on the best practices and the latest technologies.`}
                  </p>
                </div>
              </div>
              <div
                className="flex items-start py-4 wow animate__animated animate__heartBeat"
                data-wow-delay=".7s"
              >
                <div className="w-8 mr-5 ">
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
                      strokeWidth="2"
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold font-heading">
                    {`Modern and responsive`}
                  </h3>
                  <p className="text-blueGray-400 leading-loose">
                    {`The best way to get a premium software product is combined techniques from specialists and merge. 
                  I had a lot of resources free and paid for around the world.`}
                  </p>
                </div>
              </div>
              <div
                className="flex items-start py-4 wow animate__animated animate__heartBeat"
                data-wow-delay=".9s"
              >
                <div className="w-8 mr-5 ">
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
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold font-heading">
                    {`Research and development`}
                  </h3>
                  <p className="text-blueGray-400 leading-loose">
                    {`We are always looking for new ways to improve our products.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
            <div
              className="wow animate__animated animate__heartBeat"
              data-wow-delay=".5s"
            >
              <video width="100%" controls>
                <source
                  src="https://media.graphassets.com/Z7qbpMBeT4OjtYOKF56J"
                  type="video/mp4"
                />
              </video>
              {/* <Image
                className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
                src="/assets/imgs/elements/blob-tear.svg"
                alt="Monst"
              />
              <Image
                className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
                src="/assets/imgs/elements/blob-tear.svg"
                alt="Monst"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
