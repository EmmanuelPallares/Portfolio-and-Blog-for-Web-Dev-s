import React from "react";
import Image from "next/image";
import NextGenerationofsoftware from "../../public/assets/Nextgenerationofsoftware.svg";
import Modernandresponsive from "../../public/assets/Modernandresponsive.svg";
import Researchanddevelopment from "../../public/assets/Researchanddevelopment.svg";

const WhyUs = () => {
  return (
    <section
      className="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden bg-[#11081f] text-white"
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
                  className="text-xs py-1 px-3  font-semibold  rounded-xl wow animate__animated animate__swing"
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
                <div className="w-8 mr-5">
                  <Image
                    className="w-6 h-6"
                    stroke="currentColor"
                    src={NextGenerationofsoftware}
                    width={255}
                    height={255}
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold font-heading">
                    {`Next generation of Software`}
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
                  <Image
                    className="w-6 h-6"
                    stroke="currentColor"
                    src={Modernandresponsive}
                    width={32}
                    height={32}
                  />
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
                  <Image
                    className="w-6 h-6"
                    stroke="currentColor"
                    src={Researchanddevelopment}
                    width={32}
                    height={32}
                  />
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