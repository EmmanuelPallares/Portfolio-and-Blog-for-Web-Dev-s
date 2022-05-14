import "../styles/globals.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css"
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      {/* The body tag doest appear in nextjs by default */}
      <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
    </>
  );
}

export default MyApp;
