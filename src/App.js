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
  OffersComponent,
} from "screens/home/components";

import { Container, FabButton } from "./styles";

import { useStore } from "store";

import axios from "axios";

import { IoIosArrowUp } from "react-icons/io";

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
      axios("https://api.countapi.xyz/update/saiashish9/portfolio/?amount=1")
        .then(({ data: { value } }) => setCount(value > 1 ? value : 1))
        .catch((e) => {
          setCount(1);
        });
    } else {
      axios("https://api.countapi.xyz/get/saiashish9/portfolio")
        .then(({ data: { value } }) => {
          setCount(value);
        })
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
      <OffersComponent />
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
    </Container>
  );
}

export default App;
