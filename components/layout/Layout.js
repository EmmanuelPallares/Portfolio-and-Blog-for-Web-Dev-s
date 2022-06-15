import Head from "next/head";
import React, { useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "../Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
  const [hiddenClass, setHiddenClass] = useState("hidden");

  const handleHidden = () => setHiddenClass("");

  const handleRemove = () => {
    if (hiddenClass === "") {
      setHiddenClass("hidden");
    }
  };

  return (
    <>
      <Head>
        <title>vitoz</title>
      </Head>
      <div className="main font-body text-body">
        <Header handleHidden={handleHidden} />
        <MobileMenu hiddenClass={hiddenClass} handleRemove={handleRemove} />
        {children}
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Layout;
