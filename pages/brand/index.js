import React from "react";

const Brand = () => {
  return (
    <>
      <div className="container mb-6 p-3 text-white">
        <div className="bg-[#E93D44] ">Red Principal</div>
        <div className="bg-[#751f22]"> Darknes Red</div>
        <div className="bg-[#AF2E33]"> Medium Red</div>
      </div>
      <div className="container m-6 p-3 text-white">
        <div className="bg-[#111823]">Blue Main</div>
        <div className="bg-[#203449]">Blue Medium</div>
        <div className="bg-[#4d5d6D]">Blue Light</div>
      </div>
      <div className="container m-6 p-3 text-white">
        <div className="bg-[#222529]">Darkness Gray</div>
        <div className="bg-[#4e5154]"> Medium Gray</div>
        <div className="bg-[#D3D3D4] text-[#111823]"> Light Gray</div>
      </div>
    </>
  );
};

export default Brand;
