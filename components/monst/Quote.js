import React from "react";

const Quote = (props) => {
  return (
    <p style={{ color: "blue" }} {...props}>
      This is from an MDX component
    </p>
  );
};

export default Quote;
