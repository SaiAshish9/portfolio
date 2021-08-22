import React from "react";

import { Container, Label, MailIcon, GithunIcon } from "./styles";

import I18n from "common/I18n";

const Footer = () => {
  return (
    <Container>
      <Label
        onClick={() => {
          const win = window.open(
            "https://www.linkedin.com/in/sai-ashish-237784188/",
            "_blank"
          );
          win.focus();
        }}
      >
        <I18n t="about" />
      </Label>
      <MailIcon
        onClick={() => {
          const win = window.open("mailto:saiashish7777@gmail.com", "_blank");
          win.focus();
        }}
      />
      <GithunIcon
        onClick={() => {
          const win = window.open("https://github.com/SaiAshish9", "_blank");
          win.focus();
        }}
      />
    </Container>
  );
};

export default Footer;
