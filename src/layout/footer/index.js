import React from "react";

import { Container, Label, MailIcon, GithunIcon } from "./styles";

import I18n from "common/I18n";
import { FabButton } from "styles";
import { IoIosArrowUp } from "react-icons/io";

const Footer = ({ scrolled }) => {
  function handleFabClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Container>
        <Label
          onClick={() => {
            const win = window.open(
              "https://www.linkedin.com/in/%F0%9F%9A%80-sai-ashish-237784188/",
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
      {scrolled && (
        <FabButton onClick={handleFabClick}>
          <IoIosArrowUp />
        </FabButton>
      )}
    </>
  );
};

export default Footer;
