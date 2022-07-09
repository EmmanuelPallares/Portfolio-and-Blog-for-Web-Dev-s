import React from "react";
import paypalvector from "../assets/paypalvector.svg";
import Image from "next/image";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButton = () => {
  const initialOptions = {
    "client-id": process.env.CLIENT_ID,
  };
  return (
    <div className="py-5">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons />
      </PayPalScriptProvider>
    </div>
  );
};

export default PaypalButton;
