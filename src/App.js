import React, { useEffect, useState } from "react";

import { Header, Footer } from "layout";

import {
  Intro,
  Skills,
  Info,
  Languages,
  Achievements,
  Experience,
  Projects,
} from "screens/home/components";

import { Container, FabButton } from "./styles";

import { useStore } from "store";

import axios from "axios";

import { IoIosArrowUp } from "react-icons/io";

import Overlay from "common/modal";

function App() {
  const {
    actions: { setCount },
  } = useStore();

  const [scrolled, isScrolled] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", checkHeader);
    var checkHeader = setInterval(() => {
      let scrollPosition = Math.round(window.scrollY);
      if (scrollPosition > 10) {
        isScrolled("scrolled");
      } else {
        isScrolled(null);
      }
    }, 300);
    () => {
      window.removeEventListener("scroll");
      clearInterval(checkHeader);
    };
  }, []);

  async function checkCount() {
    if (!localStorage.getItem("first")) {
      localStorage.setItem("first", true);
    } else {
      axios("https://api.countapi.xyz/get/saiashish9/portfolio/?update=1")
        .then(({ value }) => setCount(value > 1 ? value : 1))
        .catch((e) => {
          setCount(1);
        });
    }
  }

  function handleFabClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    checkCount();
  }, []);

  return (
    <Container>
      <Header scrolled={scrolled} />
      <Intro />
      <Skills />
      <Info />
      <Languages />
      <Achievements />
      <Experience />
      <Projects />
      <Footer />
      {scrolled && (
        <FabButton onClick={handleFabClick}>
          <IoIosArrowUp />
        </FabButton>
      )}
      <Overlay />
    </Container>
  );
}

export default App;
