import React from "react";
import paypalvector from "../assets/paypalvector.svg";
import Image from "next/image";

const PaypalButton = () => {
  return (
    <div class="">
      <button type="button">
        <Image
          src={paypalvector}
          alt="donations icon from flaticon "
          className=""
          width={300}
          height={100}
        />
      </button>
    </div>
  );
};

export default PaypalButton;
