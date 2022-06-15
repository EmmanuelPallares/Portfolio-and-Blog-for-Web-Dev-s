import React from "react";
import TextEffect from "../../components/elements/TextEffect";

const Hero = () => {
  return (
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
        {/* <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-12 pb-4">
        <div
          className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
          data-wow-delay=".1s"
        ></div>
        <div
          className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        ></div>
        <div
          className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
          data-wow-delay=".5s"
        ></div>
        <div
          className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
          data-wow-delay=".7s"
        ></div>
        <div
          className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
          data-wow-delay=".9s"
        ></div>
      </div> */}
      </div>
    </section>
  );
};

export default Hero;
