import React from "react";

import {
  Container,
  Img,
  Label,
  Content,
  MContainer,
  SContainer,
  ParentContainer,
  Title,
} from "./styles";

import AppTownImg from "assets/home/appTown.png";
import PracifyImg from "assets/home/pracify.png";
import InuvestImg from "assets/home/inuvest.png";
import Nex2MeImg from "assets/home/nex2me.png";
import UVRobotsImg from "assets/home/uvrobots.png";
import VelvetImg from "assets/home/velvet.svg";

import I18n from "common/I18n";

const data = [
  {
    img: AppTownImg,
    label: <I18n t="appTown" />,
    position: <I18n t="reactIntern" />,
    exp: 8,
  },
  {
    img: PracifyImg,
    label: <I18n t="pracify" />,
    position: <I18n t="mernIntern" />,
    exp: 3,
  },
  {
    img: InuvestImg,
    label: <I18n t="inuvest" />,
    position: <I18n t="fullStackPyIntern" />,
    exp: 5,
  },
  {
    img: VelvetImg,
    label: <I18n t="velvet" />,
    position: <I18n t="applicationDevIntern" />,
    exp: 5,
  },
  {
    img: Nex2MeImg,
    label: <I18n t="nex2Me" />,
    position: <I18n t="javaIntern" />,
    exp: 1,
  },
  {
    img: UVRobotsImg,
    label: <I18n t="uvrobots" />,
    position: <I18n t="applicationDevIntern" />,
    exp: 5,
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
            <Title>{i.position}</Title>
            <Title>{i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}</Title>
          </Content>
        ))}
      </Container>
      <MContainer>
        <ParentContainer>
          {data.slice(0, 3).map((i, k) => (
            <Content key={k}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>{i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}</Title>
            </Content>
          ))}
        </ParentContainer>
        <ParentContainer>
          {data.slice(3).map((i, k) => (
            <Content key={k}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>{i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}</Title>
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
              <Title>{i.position}</Title>
              <Title>{i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}</Title>
            </Content>
          ))}
        </ParentContainer>
        <ParentContainer>
          {data.slice(2, 4).map((i, k) => (
            <Content key={k}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>{i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}</Title>
            </Content>
          ))}
        </ParentContainer>
        <ParentContainer>
          {data.slice(4).map((i, k) => (
            <Content key={k}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>{i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}</Title>
            </Content>
          ))}
        </ParentContainer>
      </SContainer>
    </>
  );
};

export default Experience;
