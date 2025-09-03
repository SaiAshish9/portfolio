import React from "react";
import KrishnaImg from "assets/abc.png";

// import HeartImg from "assets/home/heart.svg";
import shuffle from "shuffle-array";

import {
  // HeartImage,
  HeartSubImage,
  Center,
} from "../styles";
import { AiFillHeart, AiFillFire } from "react-icons/ai";

import { useStore } from "store";
import { Theme } from "constants/index";

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

let colors = {
  light: [
    // "#eb4031",
    // "#4085f5",
    // "#fbbd00",
    // "#30a952",
    //
    "#F25022",
    "#7FBA00",
    "#00A4EF",
    "#FFB900",
    "#737373",
  ],
  dark: [
    // "#eb4031",
    // "#4085f5",
    // "#fbbd00",
    // "#30a952",
    //
    "#F25022",
    "#7FBA00",
    "#00A4EF",
    "#FFB900",
    "#737373",
  ],
  love: ["#eb4031", "#FF75A0", "#eb4031", "#eb4031"],
  highContrast: ["yellow", "yellow", "yellow", "white"],
  fire: ["#FF7600", "#FF7600", "orange", "#FF7600", "orange"],
};

const HeartComponent = () => {
  const [seconds, setSeconds] = React.useState(0);

  const {
    state: { theme },
  } = useStore();

  useInterval(() => {
    setSeconds(seconds + 1);
  }, 18);

  // function onLableClick(link) {
  //   const win = window.open(link, "_blank");
  //   win.focus();
  // }

  return (
    <Center
      data-aos="zoom-in"
      // onClick={() =>
      //   onLableClick(
      //     "https://www.linkedin.com/feed/update/urn:li:activity:6865016711754715136/"
      //   )
      // }
    >
      <HeartSubImage alt="img" src={KrishnaImg} />
      {theme !== Theme.fire &&
        styles.map((i, k) => (
          <AiFillHeart
            style={{
              position: "absolute",
              zIndex: 3,
              ...i,
              color: shuffle.pick(colors[theme]),
            }}
            className="animate__animated animate__pulse animate_infinite"
            key={k}
            size={18}
          />
        ))}
      {theme === Theme.fire &&
        styles.map((i, k) => (
          <AiFillFire
            style={{
              position: "absolute",
              zIndex: 3,
              ...i,
              color: shuffle.pick(colors[theme]),
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
