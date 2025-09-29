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

import { IoCall } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillMediumSquare,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { FaTwitter, FaCodeBranch } from "react-icons/fa";

import { SiGmail, SiLeetcode, SiCodeforces, SiTopcoder } from "react-icons/si";

import I18n from "common/I18n";

const Intro = () => {
  const ICON_SIZE = 16;

  // phone no. , linked in , github , email , location , medium ,
  // youtube , instagram , leetcode
  // https://www.remove.bg/upload

  const DATA = [
    {
      label: <I18n t="tel" />,
      icon: <IoCall size={ICON_SIZE} />,
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
      label: <I18n t="leetcodev2" />,
      icon: <SiLeetcode size={ICON_SIZE + 5} />,
    },
    {
      label: <I18n t="codeforces" />,
      icon: <SiCodeforces size={ICON_SIZE + 3} />,
    },
    {
      label: <I18n t="atcoder" />,
      icon: <FaCodeBranch size={ICON_SIZE + 3} />,
    },
    {
      label: <I18n t="topcoder" />,
      icon: <SiTopcoder size={ICON_SIZE + 3} />,
    },
    {
      label: "saiashish7777@gmail.com",
      icon: <SiGmail size={ICON_SIZE - 1} />,
    },
    {
      label: <I18n t="location" />,
      icon: <FiMapPin size={ICON_SIZE} />,
    },
    {
      label: "https://medium.com/@saiashish3760",
      icon: <AiFillMediumSquare size={ICON_SIZE + 5} />,
    },
    {
      label: "https://www.youtube.com/@saiashish9",
      icon: <AiFillYoutube size={ICON_SIZE + 5} />,
    },
    {
      label: "https://www.instagram.com/techie008/",
      icon: <AiFillInstagram size={ICON_SIZE + 5} />,
    },
    {
      label: "https://x.com/saiashish09/",
      icon: <FaTwitter size={ICON_SIZE + 3} />,
    },
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
          <InfoItem key={k}>
            <InfoImg>{i.icon}</InfoImg>
            {i.text ? (
              <InfoLabel>{i.label}</InfoLabel>
            ) : (
              <InfoLink
                href={
                  (k === 0
                    ? "tel:"
                    : k == 3
                    ? "https://leetcodev2.vercel.app/revision_sheet"
                    : k == 4
                    ? "https://github.com/SaiAshish9/CodeForces"
                    : k == 5
                    ? "https://github.com/SaiAshish9/AtCoder"
                    : k === 6
                    ? "mailto:"
                    : k === 7
                    ? "https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5272803,77.0688992,11z"
                    : "") +
                  (k !== 3 && k !== 6 && k !== 5 && k !== 4 ? i.label : "")
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "relative",
                  left: k == 6 ? "0px" : "0px",
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
