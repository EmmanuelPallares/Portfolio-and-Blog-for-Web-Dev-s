import React from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import newlogo from "../assets/newlogo.svg";

const Footer = () => {
  return (
    <>
      <section className="py-20">
        <div
          className="container px-4 mx-auto wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
            <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
              <Link href="/">
                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                  <Image className="h-10" src={newlogo} alt="vitozdev" />
                </a>
              </Link>
            </div>
            <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
              <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
                For research and investment, you can <strong>support</strong> my
                projects via <strong>paypal.</strong>
              </p>
            </div>

            <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0 font-bold">
              <p className="mb-2 lg:mb-4 lg:text-lg  font-heading text-blueGray-800">
                Quick Links
              </p>
              <Link href="/brand">
                <p className="lg:text-lg underline underline-offset-2">Brand</p>
              </Link>
              <Link href="/faqs">
                <p className="lg:text-lg underline underline-offset-2">
                  Frequently Asked Questions
                </p>
              </Link>
            </div>
            <div className="w-full lg:w-1/5 px-3">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                e-mail
              </p>

              <p className="lg:text-lg text-blueGray-400">
                emmanuelpallares50@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <p className="text-sm text-[#111823]">
              &copy; 2022. All rights reserved.
              <a className="text-[#E93D44]" href="https://vitoz.dev">
                {" "}
                <br />
                vitoz.dev
              </a>
            </p>
            <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
              <a
                className="inline-block px-2"
                href="https://twitter.com/EPallaresDev"
              >
                <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
