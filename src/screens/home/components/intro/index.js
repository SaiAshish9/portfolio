import React from "react";

import { Container, AvatarImg, Label, ImgContainer, SubTitle } from "./styles";

import LightAvatar from "assets/home/lightAvatar.png";
import DarkAvatar from "assets/home/darkAvatar.png";

import { useStore } from "store";

import { Theme } from "constants/index";

const Intro = () => {
  const {
    state: { theme },
  } = useStore();

  return (
    <Container>
      <ImgContainer>
        <AvatarImg src={theme === Theme.dark ? DarkAvatar : LightAvatar} />
        <Label>
          Full stack web, native / cross-platform <br />
          mobile app developer
        </Label>
        <SubTitle>Final year computer science student</SubTitle>
      </ImgContainer>
    </Container>
  );
};

export default Intro;
