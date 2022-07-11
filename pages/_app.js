import React from "react";
import Head from "next/head";
import "../styles/prism.css";
import "../public/assets/css/tailwind-built.css";
import "../styles/globals.css";
import "../public/assets/css/animate.min.css";
import "swiper/css";
import "animate.css";
import Layout from "./../components/layout/Layout";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
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
