import React from "react";

const Img = ({ src, left, style, reduceH, large }) => {
  return (
    <img
      src={src}
      alt="img"
      style={{
        width: large ? "100%" : "18rem",
        margin: left
          ? reduceH
            ? "0 0 0.7rem 0"
            : "0 0 2rem 0"
          : reduceH
          ? "0 auto 0.7rem"
          : "0 auto 2rem",
        ...style,
      }}
    />
  );
};

export default Img;
