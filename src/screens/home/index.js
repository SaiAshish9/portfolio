import React from "react";

import {
  Intro,
  Skills,
  Info,
  Bugs,
  Languages,
  Achievements,
  Experience,
  Projects,
  OffersComponent,
} from "./components";

function App() {
  return (
    <>
      <Intro />
      <Skills />
      <OffersComponent />
      <Info />
      <Languages />
      <Achievements />
      <Experience />
      <Projects />
      <Bugs />
    </>
  );
}

export default App;
