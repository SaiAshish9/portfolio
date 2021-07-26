import React, { useEffect } from "react";

import { Header } from "layout";

import { Intro, Skills, Info, Languages } from "screens/home/components";

import Container from "./styles";

import { useStore } from "store";

import axios from "axios";

function App() {
  const {
    actions: { setCount },
  } = useStore();

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

  useEffect(() => {
    checkCount();
  }, []);

  return (
    <Container>
      <Header />
      <Intro />
      <Skills />
      <Info />
      <Languages />
    </Container>
  );
}

export default App;
