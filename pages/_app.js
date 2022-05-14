import "../styles/globals.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
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

      <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
    </>
  );
}

export default MyApp;
