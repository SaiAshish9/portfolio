import React from "react";

import {
  Container,
  AvatarImg,
  Label,
  ImgContainer,
  SubTitle,
  InfoContainer,
  InfoItem,
  InfoLabel,
  InfoImg,
  InfoLink,
  AvatarImgContainer,
} from "./styles";

import LightAvatar from "assets/home/avatar.png";

import { useStore } from "store";

import { Theme, Colors } from "constants/index";

import { IoCall } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillMediumSquare,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import { SiGmail } from "react-icons/si";

import I18n from "common/I18n";

const Intro = () => {
  const {
    state: { theme },
  } = useStore();

  const { veryDarkGray, white } = Colors;

  const ICON_SIZE = 16;

  //  phone no. , linked in , github , email , location , medium ,
  // youtube , instagram , leetcode

  // https://www.remove.bg/upload

  const DATA = [
    {
      label: <I18n t="tel" />,
      icon: <IoCall size={ICON_SIZE} />,
      text: true,
    },
    {
      label: "https://www.linkedin.com/in/%F0%9F%9A%80-sai-ashish-237784188/",
      icon: <AiFillLinkedin size={ICON_SIZE + 5} />,
    },
    {
      label: "https://github.com/SaiAshish9",
      icon: <AiFillGithub size={ICON_SIZE + 5} />,
    },
    {
      label: "saiashish7777@gmail.com",
      icon: <SiGmail size={ICON_SIZE - 1} />,
      text: true,
    },
    {
      label: <I18n t="location" />,
      icon: <FiMapPin size={ICON_SIZE} />,
      text: true,
    },
    {
      label: "https://medium.com/@saiashish3760",
      icon: <AiFillMediumSquare size={ICON_SIZE + 5} />,
    },
    {
      label: "https://www.youtube.com/channel/UCRrkV11YNkirkWEQSBTEtvg",
      icon: <AiFillYoutube size={ICON_SIZE + 5} />,
    },
    {
      label: "https://www.instagram.com/saiashish99/",
      icon: <AiFillInstagram size={ICON_SIZE + 5} />,
    },
    // {
    //   label: "https://leetcode.com/SaiAshish/",
    //   icon: <IoCall size={ICON_SIZE} />,
    // },
  ];

  return (
    <Container>
      <ImgContainer className="animate__animated animate__pulse">
        <AvatarImgContainer>
          <AvatarImg src={LightAvatar} />
        </AvatarImgContainer>
        <Label>
          <I18n t="introDesc1" /> <br />
          <I18n t="introDesc2" />
        </Label>
        <SubTitle>
          <I18n t="introDesc3" />
        </SubTitle>
      </ImgContainer>
      <InfoContainer className="animate__animated animate__pulse">
        {DATA.map((i, k) => (
          <InfoItem
            style={{
              left: k == 6 ? "0.4rem" : "0px",
            }}
            key={k}
          >
            <InfoImg>{i.icon}</InfoImg>
            {i.text ? (
              <InfoLabel>{i.label}</InfoLabel>
            ) : (
              <InfoLink
                href={i.label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "relative",
                  left: k == 6 ? "0.28rem" : "0px",
                }}
              >
                {i.label}
              </InfoLink>
            )}
          </InfoItem>
        ))}
      </InfoContainer>
    </Container>
  );
};

export default Intro;
