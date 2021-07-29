import React from "react";

import { Container, Label, MailIcon, GithunIcon } from "./styles";

import I18n from "common/I18n";

const Footer = () => {
  return (
    <Container>
      <Label>
        <I18n t="about" />
      </Label>
      <MailIcon />
      <GithunIcon />
    </Container>
  );
};

export default Footer;
