import React from "react";

import { Container } from "./styles";

import Card from "./components/card";

const Info = () => {
  return (
    <Container>
      {[...Array(5).keys()].map((i, k) => (
        <Card key={k} />
      ))}
    </Container>
  );
};

export default Info;
