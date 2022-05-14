import "../styles/globals.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.welcomeMessage = "Welcome to vitoz.dev!";
  }, []);

  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
