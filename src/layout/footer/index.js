import React from "react";

import { Container, Label, MailIcon, GithunIcon } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Label>About</Label>
      <MailIcon />
      <GithunIcon />
    </Container>
  );
};

export default Footer;
