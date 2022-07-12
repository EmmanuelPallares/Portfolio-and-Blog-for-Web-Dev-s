import React from "react";
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
        id="1analitycs"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="afterInteractive" id="2analitycs">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
