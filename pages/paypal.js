import { PayPalButton } from "react-paypal-button-v2";
import React from "react";

const Test = () => {
  return (
    <div>
      <PayPalButton
        clientId={process.env.CLIENT_ID}
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={() => {
          alert("Transaction completed ");
        }}
      />
    </div>
  );
};

export default Test;
