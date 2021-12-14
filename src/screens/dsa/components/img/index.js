import React from "react";

const Img = ({ src }) => {
  return (
    <img
      src={src}
      alt="img"
      style={{ width: "18rem", margin: "0 auto 2rem" }}
    />
  );
};

export default Img;
