import { Header } from "layout";

import { Intro, Skills } from "screens/home/components";

import Container from "./styles";

function App() {
  return (
    <Container>
      <Header />
      <Intro />
      <Skills />
    </Container>
  );
}

export default App;
