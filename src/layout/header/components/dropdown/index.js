import React from "react";

import { Container, Label, Icon } from "./styles";

const Dropdown = ({ title }) => {
  return (
    <Container>
      <Label>{title}</Label>
      <Icon />
    </Container>
  );
};

export default Dropdown;
