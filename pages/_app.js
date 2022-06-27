import React from "react";
import Head from "next/head";
import "../styles/prism.css";
import "../public/assets/css/tailwind-built.css";
import "../styles/globals.css";
import "../public/assets/css/animate.min.css";
import "swiper/css";
import "animate.css";
import Layout from "./../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <Script
          src="../public/assets/vendor/counterup"
          type="javascript"
        ></Script>

        <Script src="../public/assets/vendor/jquery-3.6.0.min.js"></Script>
        <Script src="../public/assets/vendor/mobile-menu.js"></Script>
        <Script src="../public/assets/vendor/modernizr-3.6.0.min"></Script>
        <Script src="../public/assets/vendor/scrollup"></Script>
        <Script src="../public/assets/vendor/slick"></Script>
        <Script src="../public/assets/vendor/smooth"></Script>
        <Script src="../public/assets/vendor/textType"></Script>
        <Script src="../public/assets/vendor/waypoints"></Script>
        <Script src="../public/assets/vendor/wow"></Script>
        <Script src="../public/assets/main"></Script> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
