import Image from "next/image";

import newlogo from "../assets/newlogo.svg";
import TextEffect from "../components/elements/TextEffect";
import Slider1 from "../components/slider/Slider1";
import { getIndexPortfolio } from "../lib/data";

export const getStaticProps = async () => {
  const portfolioIndex = await getIndexPortfolio();

  return {
    props: portfolioIndex,
  };
};

export default function Index(portfolioIndex) {
  return (
    <>
      {/* Bussines Solutions */}

      <section
        className="pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24"
        style={{
          backgroundImage:
            "url('https://media.graphassets.com/Ct2JijaNTc5NhVlfv35b')",
        }}
      >
        <div className="hidden md:block absolute top-0 left-0 mt-32">
          <img
            className="h-64 lg:h-80 jump"
            src="https://media.graphassets.com/OnMhFL3wQ4eJZfb4GxgJ"
            alt="Monst"
          />
        </div>
        <div className="hidden md:block absolute top-0 right-0 mt-32">
          <img
            className="h-64 lg:h-80 jump"
            src="https://media.graphassets.com/gls4d8xjQRC7FWMPQ2I1"
            alt="Monst"
          />
        </div>
        <div className="container">
          <div className="py-12 text-center">
            <div className="max-w-2xl mx-auto mb-8">
              <h2 className="text-white text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                {`Committed to People. `}
                <br />
                <span className="text-bg-blue-400">{`Committed to the Future.`}</span>
              </h2>
              <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                {`I'm `}
                <strong className="text-blue-500">{`developer `}</strong>
                <TextEffect
                  speed={1000}
                  text1={`, a freelancer with a passion for building web applications. `}
                />
                <br />
              </p>
            </div>
            <div>
              <a
                className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animated animate__fadeIn"
                href="#key-features"
              >
                {`Exclusive Features`}
              </a>
              <a
                className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white rounded wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
                href="#how-we-work"
              >
                How We Work?
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-12 pb-4">
            <div
              className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
              data-wow-delay=".1s"
            >
              <img
                className="mx-auto"
                src="https://media.graphassets.com/iktwoq8oR6rjhxAsQlSg"
                alt="Monst"
              />
            </div>
            <div
              className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              <img
                className="mx-auto"
                src="/assets/imgs/logos/brands/brand-2.png"
                alt="Monst"
              />
            </div>
            <div
              className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
              data-wow-delay=".5s"
            >
              <img
                className="mx-auto"
                src="/assets/imgs/logos/brands/brand-3.png"
                alt="Monst"
              />
            </div>
            <div
              className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
              data-wow-delay=".7s"
            >
              <img
                className="mx-auto"
                src="/assets/imgs/logos/brands/brand-4.png"
                alt="Monst"
              />
            </div>
            <div
              className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
              data-wow-delay=".9s"
            >
              <img
                className="mx-auto"
                src="/assets/imgs/logos/brands/brand-5.png"
                alt="Monst"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16 pb-20" id="key-features">
        <div className="container">
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <h2
                className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <span>Solutions for </span>
                <br />
                <span className="">your Business </span>
                <span>
                  Grow <br />
                  on time
                </span>
              </h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p
                className="lg:pl-16 text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                data-wow-delay=".4s"
              >
                {`All my products are ruled for a unique features exclusive it´s online existence. Check them out or watch the video. `}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 -mb-6">
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div
                className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className=" mx-auto mb-4">
                  <svg
                    className="w-8 h-8 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold font-heading">{`Web Development`}</h3>
                <p className="text-sm text-blueGray-400">
                  {`Web development are one of the most popular business solutions, 
                  which combines high advantages with ease mantenance.`}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div
                className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className=" mx-auto mb-4">
                  <svg
                    className="w-8 h-8 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold font-heading">{`Web Design`}</h3>

                <p className="text-sm text-blueGray-400">
                  {`Digital design has become an increasingly
                   important area for a business. With the right
                    design stand out from your competition. `}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div
                className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".7s"
              >
                <div className=" mx-auto mb-4">
                  <svg
                    className="w-8 h-8 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold font-heading">{`Cloud Solutions`}</h3>

                <p className="text-sm text-blueGray-400">
                  {`Cloud solutions can help improve efficiency and agility,
                  reduce cost, participate in new business models,
                  and capture new market opportunities.`}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div
                className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".9s"
              >
                <div className=" mx-auto mb-4">
                  <svg
                    className="w-8 h-8 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold font-heading">
                  {`Custom Services`}
                </h3>
                <p className="text-sm text-blueGray-400">
                  {`Custom services is the way to explore, discover, test, and more. Gives
                  space to creativity for any interested in build next revolution legacy.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why choose video */}
      <section
        className="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden"
        id="key-features"
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <div
                className="lg:py-6 lg:pr-77 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="mb-4">
                  <span
                    className="text-xs py-1 px-3  font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown"
                    data-wow-delay=".9s"
                  >
                    {`Why choose us`}
                  </span>
                  <h2
                    className="text-4xl mt-5 font-bold font-heading wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    {`Exclusive features`}
                  </h2>
                </div>
                <div
                  className="flex items-start py-4 wow animate__animated animate__fadeIn"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                  className="flex items-start py-4 wow animate__animated animate__fadeIn"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                  className="flex items-start py-4 wow animate__animated animate__fadeIn"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
                className="wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <video width="100%" controls>
                  <source
                    src="https://media.graphassets.com/Z7qbpMBeT4OjtYOKF56J"
                    type="video/mp4"
                  />
                </video>
                <img
                  className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
                  src="/assets/imgs/elements/blob-tear.svg"
                  alt="Monst"
                />
                <img
                  className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
                  src="/assets/imgs/elements/blob-tear.svg"
                  alt="Monst"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio preview */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
              <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                <h2
                  className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <span className="text-blue-500">Recent</span> Works
                </h2>
                <p
                  className=" text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn text-blue-500"
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
                  <Slider1 props={portfolioIndex} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
