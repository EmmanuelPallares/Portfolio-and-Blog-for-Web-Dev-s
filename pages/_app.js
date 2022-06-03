import "../styles/globals.css";
import Head from "next/head";
import Layout from "./components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* The body tag doest appear in nextjs by default */}
      {/* <script src="https://{{cdn}}/prismjs@v1.x/components/prism-core.min.js"></script>
      <script src="https://{{cdn}}/prismjs@v1.x/plugins/autoloader/prism-autoloader.min.js"></script> */}
      {/* <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script> */}
    </>
  );
}

export default MyApp;
