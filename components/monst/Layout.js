import Head from "next/head";
import React, { useState } from "react";

const Layout = () => {
  return (
    <>
      <Head>
        <title>vitoz.dev - Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script>new WOW().init();</script>
      </Head>
    </>
  );
};

export default Layout;
