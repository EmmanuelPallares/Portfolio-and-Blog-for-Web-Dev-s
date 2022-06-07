import { GraphQLClient, gql } from "graphql-request";
import { getPageProps } from "../lib/data";
import Image from "next/image";
import React from "react";
import hero from "../assets/hero.svg";
import Layout from "../components/layout/Layout";
import Slider2 from "../components/slider/Slider2";
import TextEffect from "../components/elements/TextEffect";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <section className="relative -mt-24 pt-24">
        <div
          className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0"
          style={{ "z-index": "-1" }}
        ></div>
        <div className="container">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="w-full lg:w-1/2 px-3">
              <div className="py-12">
                <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                  <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                    Committed to <span className="text-blue-500">People</span>{" "}
                    and the future
                  </h2>
                  <p className="text-blue-500 text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                    We're
                    <strong className="text-blue-500"></strong>
                    solutions.
                    <span className="typewrite d-inline text-brand">
                      <TextEffect
                        text1="Web Agency"
                        text2="Social Marketing"
                        text3="Social Marketing"
                      />
                    </span>
                  </p>
                  <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn mt-3 text-sm">
                    Helping you maximize bussines model with digitization
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <a
                    className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animated animate__fadeIn"
                    href="#key-features"
                  >
                    Key Features
                  </a>
                  <a
                    className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                    href="#how-we-work"
                  >
                    How We Work?
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
              <div className="flex items-center justify-center">
                <Image className="lg:max-w-lg" src={hero} alt="Monst" />
              </div>
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
                <span className="text-blue-600">your Business </span>
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
                Business solution company sit our any how site used the our
                company any site us it-solve theme is very professional theme
                business & corporate, finance, advisor, solution, company and
                all project used, there are all kinds of websites here.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 -mb-6">
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div
                className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="text-blue-500 mx-auto mb-4">
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
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-2 font-bold font-heading">IT Consultancy</h3>
                <p className="text-sm text-blueGray-400">
                  We believe brand interaction is key to communication. Real
                  innovations and positive customer experience are the heart of
                  success.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div
                className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="text-blue-500 mx-auto mb-4">
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
                      stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-2 font-bold font-heading">Web Development</h3>
                <p className="text-sm text-blueGray-400">
                  We believe brand interaction is key to communication. Real
                  innovations and positive customer experience are the heart of
                  success.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div
                className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".7s"
              >
                <div className="text-blue-500 mx-auto mb-4">
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
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-2 font-bold font-heading">App Development</h3>
                <p className="text-sm text-blueGray-400">
                  We believe brand interaction is key to communication. Real
                  innovations and positive customer experience are the heart of
                  success.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
              <div
                className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                data-wow-delay=".9s"
              >
                <div className="text-blue-500 mx-auto mb-4">
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
                <h3 className="mb-2 font-bold font-heading">
                  Digital Marketing
                </h3>
                <p className="text-sm text-blueGray-400">
                  We believe brand interaction is key to communication. Real
                  innovations and positive customer experience are the heart of
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export async function get() {
  const client = GraphQLClient;

  const { page } = await client.request(getPageProps, {
    locale,
    slug: "home",
  });

  const parsedPageData = await parsePageData(page);

  return {
    props: {
      page: parsedPageData,
      preview,
    },
    revalidate: 60,
  };
}
