import React from "react";

import { Container, Label, MailIcon, GithunIcon } from "./styles";

import I18n from "common/I18n";

const Footer = () => {
  return (
    <Container>
      <Label
        onClick={() => {
          const win = window.open("https://www.linkedin.com/in/sai-ashish-237784188/", "_blank");
          win.focus();
        }}
      >
        <I18n t="about" />
      </Label>
      <MailIcon />
      <GithunIcon />
    </Container>
  );
};

export default Footer;
