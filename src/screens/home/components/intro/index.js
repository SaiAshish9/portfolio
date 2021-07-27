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
  FabButton,
} from "./styles";

import LightAvatar from "assets/home/lightAvatar.png";
import DarkAvatar from "assets/home/darkAvatar.png";

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

const Intro = () => {
  const {
    state: { theme },
  } = useStore();

  const { veryDarkGray, white } = Colors;

  const ICON_SIZE = 16;

  const ICON_COLOR = theme !== Theme.dark ? veryDarkGray : white;

  //  phone no. , linked in , github , email , location , medium ,
  // youtube , instagram , leetcode

  const DATA = [
    {
      label: "+91 8920125544",
      icon: <IoCall size={ICON_SIZE} color={ICON_COLOR} />,
      text: true,
    },
    {
      label: "https://www.linkedin.com/in/sai-ashish-237784188/",
      icon: <AiFillLinkedin size={ICON_SIZE + 5} color={ICON_COLOR} />,
    },
    {
      label: "https://github.com/SaiAshish9",
      icon: <AiFillGithub size={ICON_SIZE + 5} color={ICON_COLOR} />,
    },
    {
      label: "saiashish7777@gmail.com",
      icon: <SiGmail size={ICON_SIZE - 1} color={ICON_COLOR} />,
    },
    {
      label: "New Delhi, India",
      icon: <FiMapPin size={ICON_SIZE} color={ICON_COLOR} />,
      text: true,
    },
    {
      label: "https://medium.com/@saiashish3760",
      icon: <AiFillMediumSquare size={ICON_SIZE + 5} color={ICON_COLOR} />,
    },
    {
      label: "https://www.youtube.com/channel/UCRrkV11YNkirkWEQSBTEtvg",
      icon: <AiFillYoutube size={ICON_SIZE + 5} color={ICON_COLOR} />,
    },
    {
      label: "https://www.instagram.com/saiashish99/",
      icon: <AiFillInstagram size={ICON_SIZE + 5} color={ICON_COLOR} />,
    },
    // {
    //   label: "https://leetcode.com/SaiAshish/",
    //   icon: <IoCall size={ICON_SIZE} color={ICON_COLOR} />,
    // },
  ];

  return (
    <Container>
      <ImgContainer>
        <AvatarImg src={theme === Theme.dark ? DarkAvatar : LightAvatar} />
        <Label>
          Full stack web, native / cross-platform <br />
          mobile app developer
        </Label>
        <SubTitle>Final year computer science student (20 yrs)</SubTitle>
      </ImgContainer>
      <InfoContainer>
        {DATA.map((i, k) => (
          <InfoItem style={{ left: k == 6 ? "0.4rem" : "0px" }} key={k}>
            <InfoImg>{i.icon}</InfoImg>
            {i.text ? (
              <InfoLabel>{i.label}</InfoLabel>
            ) : (
              <InfoLink
                href={i.label}
                target="_blank"
                rel="noopener noreferrer"
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
