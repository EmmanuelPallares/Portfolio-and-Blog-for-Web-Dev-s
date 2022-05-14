import "../styles/globals.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Script from "next/script";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.welcomeMessage = "Welcome to vitoz.dev!";
  }, []);

  return (
    <>
      <Script src="../path/to/flowbite/dist/flowbite.js"></Script>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
