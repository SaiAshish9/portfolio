import React from "react";

import { Container, Img, Label, Content } from "./styles";

import AppTownImg from "assets/home/appTown.png";
import PracifyImg from "assets/home/pracify.png";
import InuvestImg from "assets/home/inuvest.png";
import Nex2MeImg from "assets/home/nex2me.png";
import UVRobotsImg from "assets/home/uvrobots.png";
import VelvetImg from "assets/home/velvet.svg";

const data = [
  AppTownImg,
  PracifyImg,
  InuvestImg,
  VelvetImg,
  Nex2MeImg,
  UVRobotsImg,
];

const Experience = () => {
  return (
    <Container>
      {data.map((i, k) => (
        <Content key={k}>
          <Img src={i} alt="img" />
          <Label>Intern</Label>
        </Content>
      ))}
    </Container>
  );
};

export default Experience;
