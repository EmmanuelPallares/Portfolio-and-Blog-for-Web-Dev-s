import React from "react";
import Image from "next/image";

const Preloader = () => {
  return (
    <>
      <div id="preloader-active">
        <div className="preloader flex-1 content-center">
          <div className="logo absolute inset-y-2/4 jump">
            <Image
              src="/assets/imgs/logos/favicon.svg"
              alt="Monst"
              layout="fill"
            />
            <h1 className="text-lg font-semibold">Preloader</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
