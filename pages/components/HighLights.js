import React from "react";

const HighLights = () => {
  return (
    <div className="flex-1 bg-[#111823]">
      <div class="flex-1 flex flex-col items-center">
        <h3 class="text-white mt-2 py-1.5 2xl:text-5xl md:text-5xl text-3xl  font-extrabold md:leading-[60px] leading-snug lg:leading-[60px] text-center biggestUIlibrary t-f-c bg-clip-text">
          TitleSub Component.js
        </h3>
        <p class="md:text-lg text-base leading-snug mt-[30px] text-center dark:text-gray-400 text-gray-600 md:w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur, nisl eget congue consectetur, nisl nunc aliquet elit,
          euismod euismod nisi nisl eget congue consectetur, nisl nunc
        </p>
      </div>
      <section className="2xl:px-4 lg:px-10 px-4">
        <div className="flex flex-col items-center">
          <div className="mx-auto container grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4 2xl:gap-x-20 gap-x-0 2xl:gap-y-0 gap-y-12 mt-14">
            <div className="flex flex-col items-center justify-center">
              <img
                alt="Responsive Design Icon"
                src="https://cdn.tuk.dev/assets/bgs/responsive-design.png"
                className="hidden dark:block"
              />
              <h4 className="2xl:text-2xl text-xl font-semibold leading-6 text-gray-800 dark:text-gray-50">
                Responsive design
              </h4>
              <p className="w-64 text-base leading-snug text-center dark:text-gray-400 text-gray-600 mt-3">
                Adaptive design that provides a consistent experience across
                breakpoints
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                alt="Tested Components Icon"
                src="https://cdn.tuk.dev/assets/tested-components.png"
                className="dark:block hidden mt-5"
              />
              <h4 className="2xl:text-2xl text-xl font-semibold leading-6 text-gray-800 dark:text-gray-50 pt-[22px] ">
                Tested components
              </h4>
              <p className="w-64 text-base leading-snug text-center dark:text-gray-400 text-gray-600 mt-3">
                Rigorously tested components that meet the highest quality
                standards.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                alt="Cross-browser Compatible Icon"
                src="https://cdn.tuk.dev/assets/bgs/crossbrowser-compatible.png"
                className="dark:block hidden"
              />
              <h4 className="2xl:text-2xl text-xl  font-semibold leading-6 text-gray-800 dark:text-gray-50">
                Cross browser compatible
              </h4>
              <p className="w-64 text-base leading-snug text-center dark:text-gray-400 text-gray-600 mt-3">
                Cross browser compatible components that are consistent
                throughout the web
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                alt="Accessibility image"
                src="https://cdn.tuk.dev/assets/bgs/accesible.png"
                className="hidden dark:block"
              />
              <h4 className="2xl:text-2xl text-xl font-semibold leading-6 text-gray-800 dark:text-gray-50">
                Inclusive &amp; accessible
              </h4>
              <p className="w-64 text-base leading-snug text-center dark:text-gray-400 text-gray-600 mt-3">
                Built on the curb-cut effect, WCAG accessibility comes baked in
                for a truly inclusive experience
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighLights;
