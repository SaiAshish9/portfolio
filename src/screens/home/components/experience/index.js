import React from "react";

import {
  Container,
  Img,
  Label,
  Content,
  MContainer,
  SContainer,
  ParentContainer,
} from "./styles";

import AppTownImg from "assets/home/appTown.png";
import PracifyImg from "assets/home/pracify.png";
import InuvestImg from "assets/home/inuvest.png";
import Nex2MeImg from "assets/home/nex2me.png";
import UVRobotsImg from "assets/home/uvrobots.png";
import VelvetImg from "assets/home/velvet.svg";

const data = [
  {
    img: AppTownImg,
    label: "App Town Technologies",
  },
  {
    img: PracifyImg,
    label: "Pracify",
  },
  {
    img: InuvestImg,
    label: "Inuvest Technologies",
  },
  {
    img: VelvetImg,
    label: "Velvet Video",
  },
  {
    img: Nex2MeImg,
    label: "Nex2Me",
  },
  {
    img: UVRobotsImg,
    label: "UV Robots",
  },
];

const Experience = () => {
  return (
    <>
      <Container>
        {data.map((i, k) => (
          <Content key={k}>
            <Img src={i.img} alt="img" />
            <Label>{i.label}</Label>
          </Content>
        ))}
      </Container>
      <MContainer>
        <ParentContainer>
          {data.slice(0, 3).map((i, k) => (
            <Content key={k}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
            </Content>
          ))}
        </ParentContainer>
        <ParentContainer>
          {data.slice(3).map((i, k) => (
            <Content key={k}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
            </Content>
          ))}
        </ParentContainer>
      </MContainer>
      <SContainer>
        <ParentContainer>
          {data.slice(0, 2).map((i, k) => (
            <Content key={k}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
            </Content>
          ))}
        </ParentContainer>
        <ParentContainer>
          {data.slice(2, 4).map((i, k) => (
            <Content key={k}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
            </Content>
          ))}
        </ParentContainer>
        <ParentContainer>
          {data.slice(4).map((i, k) => (
            <Content key={k}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
            </Content>
          ))}
        </ParentContainer>
      </SContainer>
    </>
  );
};

export default Experience;
