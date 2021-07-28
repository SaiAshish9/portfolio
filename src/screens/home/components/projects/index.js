import React from "react";

import { Container, StreamsTab, PlayerContainer } from "./styles";

import { Tabs } from "antd";

import { Colors, Theme } from "constants/index";

import { useStore } from "store";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineAmazon,
} from "react-icons/ai";

import { FaUserShield } from "react-icons/fa";

import ReactPlayer from "react-player";

const { TabPane } = Tabs;

// https://devfolio.co/submissions/feel-at-home

const Projects = () => {
  const {
    state: { theme },
  } = useStore();

  const { veryDarkGray, white } = Colors;

  const ICON_SIZE = 16;

  const ICON_COLOR = theme !== Theme.dark ? veryDarkGray : white;

  const links = [
    {
      key: "instagram",
      tab: <AiFillInstagram size={ICON_SIZE + 5} color={ICON_COLOR} />,
      url: "https://www.youtube.com/watch?v=gO_1CeJ2vT8",
    },
    {
      key: "amazon",
      tab: <AiOutlineAmazon size={ICON_SIZE + 5} color={ICON_COLOR} />,
      url: "https://www.youtube.com/watch?v=MKw83UXMtCQ",
    },
    {
      key: "linkedIn",
      tab: <AiFillLinkedin size={ICON_SIZE + 5} color={ICON_COLOR} />,
      url: "https://www.youtube.com/watch?v=HzqnOGj3qmc",
    },
    {
      key: "feelAtHome",
      tab: <FaUserShield size={ICON_SIZE + 5} color={ICON_COLOR} />,
      url: "https://www.youtube.com/watch?v=sU1mwLUPT34",
    },
  ];

  return (
    <Container>
      <StreamsTab defaultActiveKey="instagram" centered animated>
        {links.map((i) => (
          <TabPane tab={i.tab} key={i.key}>
            <PlayerContainer>
              <ReactPlayer controls height="100%" width="100%" url={i.url} />
            </PlayerContainer>
          </TabPane>
        ))}
      </StreamsTab>
    </Container>
  );
};

export default Projects;
