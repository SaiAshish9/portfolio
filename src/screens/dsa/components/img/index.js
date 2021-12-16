import React from "react";

const Img = ({ src, left }) => {
  return (
    <img
      src={src}
      alt="img"
      style={{ width: "18rem", margin: left ? "0 0 2rem 0" : "0 auto 2rem" }}
    />
  );
};

export default Img;
