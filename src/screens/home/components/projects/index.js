import React, { useState, useRef } from "react";

import {
  Container,
  StreamsTab,
  PlayerContainer,
  Label,
  Content,
  PlayPauseBtn,
} from "./styles";

import { Tabs } from "antd";

import { Colors, Theme } from "constants/index";

import { useStore } from "store";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineAmazon,
} from "react-icons/ai";

import { FaUserShield } from "react-icons/fa";

import { BsPlayFill } from "react-icons/bs";

import ReactPlayer from "react-player";

const { TabPane } = Tabs;

const { veryDarkGray, white } = Colors;

const ICON_SIZE = 16;

// https://devfolio.co/submissions/feel-at-home

const Projects = () => {
  const {
    state: { theme },
  } = useStore();

  const ICON_COLOR = theme !== Theme.dark ? veryDarkGray : white;

  const links = [
    {
      key: "instagram",
      label: "Instagram Clone",
      tab: <AiFillInstagram size={ICON_SIZE + 5} color={ICON_COLOR} />,
      // url: "https://www.youtube.com/watch?v=gO_1CeJ2vT8",
      url: "https://res.cloudinary.com/saiashish/video/upload/v1627472940/Instagram_Clone_Using_React_Native_Postgres_Docker_And_Golang_bqznpc.mp4",
    },
    {
      key: "amazon",
      label: "Amazon Clone",
      tab: <AiOutlineAmazon size={ICON_SIZE + 5} color={ICON_COLOR} />,
      url: "https://www.youtube.com/watch?v=MKw83UXMtCQ",
    },
    {
      key: "linkedIn",
      label: "LinkedIn Clone",
      tab: <AiFillLinkedin size={ICON_SIZE + 5} color={ICON_COLOR} />,
      url: "https://www.youtube.com/watch?v=HzqnOGj3qmc",
    },
    {
      key: "feelAtHome",
      label: "FeelAtHome Clone",
      tab: <FaUserShield size={ICON_SIZE + 5} color={ICON_COLOR} />,
      url: "https://www.youtube.com/watch?v=sU1mwLUPT34",
    },
  ];

  const [playing, isPlaying] = useState(false);
  const playerRef = useRef();

  function handleClick() {
    isPlaying((p) => isPlaying(!p));
  }

  return (
    <Container>
      <StreamsTab defaultActiveKey="instagram" centered animated>
        <TabPane tab={links[0].tab} key={links[0].key}>
          <Content>
            <PlayerContainer
              onClick={handleClick}
              onKeyDown={null}
              tabIndex={-1}
              role="button"
            >
              <ReactPlayer
                ref={playerRef}
                height="100%"
                width="100%"
                loop
                url={links[0].url}
                playing={playing}
              />
              {!playing && (
                <PlayPauseBtn>
                  <BsPlayFill />
                </PlayPauseBtn>
              )}
            </PlayerContainer>
            <Label>{links[0].label}</Label>
          </Content>
        </TabPane>
        {links.slice(1).map((i) => (
          <TabPane tab={i.tab} key={i.key}>
            <Content>
              <PlayerContainer>
                <ReactPlayer height="100%" width="100%" url={i.url} />
              </PlayerContainer>
              <Label>{i.label}</Label>
            </Content>
          </TabPane>
        ))}
      </StreamsTab>
    </Container>
  );
};

export default Projects;
