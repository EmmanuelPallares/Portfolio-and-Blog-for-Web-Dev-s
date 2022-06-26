import React from "react";
import Link from "next/link";
const AboutLine = () => {
  return (
    <section className="py-20" id="how-we-work">
      <div className="container">
        <div className="flex flex-wrap -mx-8">
          <div className="w-full lg:w-1 px-8">
            <div className="mb-12 lg:mb-0 pb-12 py-10 lg:pb-0 border-b lg:border-b-0 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <img
                  className="h-16 w-16 rounded-full object-cover"
                  src="https://media.graphassets.com/qpGRqMdSSayRediLU6bg"
                  alt="Monst"
                />
                <div className="pl-4">
                  <strong className="mt-6 mb-2 text-md">
                    Emmanuel Pallares Prieto
                  </strong>
                  <p className="text-gray-500 text-xs mt-3">Admin</p>
                </div>
              </div>
              <p
                className="mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn select-none"
                data-wow-delay=".3s"
              >
                Hi I'm Emmanuel Pallares alias vitoz.dev and I'm a Jr Full-stack
                Javascript Developer from México am 26 years old, I have a
                degree in finance administration from UVEG. When I was
                introduced to basics skills was hell and very hard for me
                because everything was new for me but instead give up something
                part of me was fascinated and wants to learn more and more I
                spend an hour at hour watching and reading about programming,
                languages, frameworks, develop areas and more trying to become a
                real developer, always be a lover of tech but never went to dive
                for understanding all the process behind any program or app.
                That feeling I take to find my professional paradigm. I'm
                considering a full autodidact person and always want to improve
                and do more complex developments. Also the programming It takes
                to learn English and my logic skills as growth since the first
                day. I choose the path of web development because was my
                favorite and feels more comfortable. I'm looking to become a Sr
                web developer who helps people and businesses through software
                make easier life and leave my fingerprint. Also, I'm a lover of
                gaming, Mountain Bike Sports, and meet people who love coding.
                Below there are some of the technologies that I implement in my
                developments. I choose the path of web development because was
                my favorite and feels more comfortable. I'm looking to become a
                Sr web developer who helps people and businesses through
                software make easier life and leave my fingerprint. Also, I'm a
                lover of gaming, Mountain Bike Sports, and meet people who love
                coding. Below there are some of the technologies that I
                implement in my developments.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-8">
            <h2
              className="mb-4 text-3xl lg:text-4xl font-bold font-heading max-w-md wow animate__animated animate__fadeIn"
              data-wow-delay=".1s"
            >
              TimeLine
            </h2>
            <ul className="space-y-12">
              <li
                className="flex -mx-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="px-4">
                  <br className="underline " />
                  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                    🌍
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold">vitoz.dev</h3>
                  <span className="text-blueGray-400 text-xs">23/06/2022</span>
                  <p className="text-blueGray-400 leading-loose">
                    Launching finally my website for all the world so happy for
                    that and I'm proud of it.
                  </p>
                </div>
              </li>
              <li
                className="flex -mx-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="px-4">
                  <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                    🙀
                  </span>
                </div>
                <div className="px-4">
                  <h3 className="my-4 text-xl font-semibold">
                    New work at Finvero
                  </h3>
                  <span className="text-blueGray-400 text-xs">13/03/2022</span>

                  <p className="text-blueGray-400 leading-loose">
                    I was hired by Finvero to work on a new project. Finance
                    Skills !!!
                  </p>
                  <p className="text-blueGray-400 leading-loose">
                    Titulation for UVEG process to...
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLine;
