import React, { useState, useEffect } from "react";
import GoogleImg from "assets/home/google.png";
// import HeartImg from "assets/home/heart.svg";
import shuffle from "shuffle-array";

import {
  // HeartImage,
  HeartSubImage,
  HeartIcon,
  Center,
} from "../styles";
import { AiFillHeart } from "react-icons/ai";

const styles = [
  { top: "1.6rem" },
  { top: "0.5rem", left: "4rem" },
  { top: "0.5rem", right: "4rem" },
  { top: "0.5rem", left: "4rem" },
  { top: "0.5rem", right: "4rem" },
  { top: "0.9rem", left: "2rem" },
  { top: "2rem", right: "0.7rem" },
  { top: "2rem", left: "0.7rem" },
  { top: "0.9rem", right: "2rem" },
  { top: "4rem", left: "0rem" },
  { top: "4rem", right: "0rem" },
  { top: "6rem", left: "0rem" },
  { top: "6rem", right: "0rem" },
  { bottom: "-0.7rem" },
  { top: "8rem", left: "1.3rem" },
  { top: "8rem", right: "1.3rem" },
  { top: "10rem", left: "3.2rem" },
  { top: "10rem", right: "3.2rem" },
  { top: "12rem", left: "5rem" },
  { top: "12rem", right: "5rem" },
  { bottom: "-0.7rem", left: "2rem" },
  { bottom: "1rem", left: "3rem" },
  { bottom: "3rem", left: "4.5rem" },
  { bottom: "9.5rem", left: "8.9rem" },
  { bottom: "11rem", left: "9.8rem" },
  { bottom: "13.5rem", left: "11.5rem" },
  { bottom: "15rem", left: "12.5rem" },
  { bottom: "13rem", left: "14.5rem" },
  { bottom: "15rem", left: "9.5rem" },
];

const useInterval = (callback, delay) => {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const colors = ["#eb4031", "#4085f5", "#fbbd00", "#30a952"];

const HeartComponent = () => {
  const [seconds, setSeconds] = React.useState(0);

  useInterval(() => {
    setSeconds(seconds + 1);
  }, 18);

  return (
    <Center data-aos="zoom-in">
      <HeartSubImage alt="img" src={GoogleImg} />
      {styles.map((i, k) => (
        <AiFillHeart
          style={{
            position: "absolute",
            zIndex: 3,
            ...i,
            color: shuffle.pick(colors),
          }}
          className="animate__animated animate__pulse animate_infinite"
          key={k}
          size={18}
        />
      ))}
    </Center>
  );
};

export default HeartComponent;
