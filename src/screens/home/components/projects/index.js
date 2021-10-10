import React, { useState, useRef } from "react";

import {
  Container,
  StreamsTab,
  PlayerContainer,
  Label,
  Content,
  Img,
  PlayPauseBtn,
  Span,
} from "./styles";

import { Tabs } from "antd";

import { Colors, Theme } from "constants/index";

import { useStore } from "store";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineAmazon,
  AiFillGithub,
  AiOutlineLink,
} from "react-icons/ai";

import { FaUserShield } from "react-icons/fa";

import { BsPlayFill } from "react-icons/bs";

import { SiMicrosoftteams } from "react-icons/si";

import ReactPlayer from "react-player";

import I18n from "common/I18n";

import InstaThumbnailImg from "assets/home/insta-thumbnail.png";

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
      link: "https://bit.ly/3aDgCI8",
      label: <I18n t="instaClone" />,
      tab: <AiFillInstagram size={ICON_SIZE + 5} color={ICON_COLOR} />,
      // url: "https://www.youtube.com/watch?v=gO_1CeJ2vT8",
      url: "https://res.cloudinary.com/saiashish/video/upload/v1627472940/Instagram_Clone_Using_React_Native_Postgres_Docker_And_Golang_bqznpc.mp4",
    },
    {
      key: "amazon",
      link: "https://bit.ly/3o4HzsX",
      label: <I18n t="amazonClone" />,
      tab: <AiOutlineAmazon size={ICON_SIZE + 5} color={ICON_COLOR} />,
      url: "https://www.youtube.com/watch?v=MKw83UXMtCQ",
    },
    {
      key: "linkedIn",
      link: "https://bit.ly/3dVFzlk",
      label: <I18n t="linkedInClone" />,
      tab: <AiFillLinkedin size={ICON_SIZE + 5} color={ICON_COLOR} />,
      url: "https://www.youtube.com/watch?v=HzqnOGj3qmc",
    },
    {
      key: "feelAtHome",
      link: "https://bit.ly/2Y3MQGx",
      label: <I18n t="feelAtHome" />,
      tab: <FaUserShield size={ICON_SIZE + 5} color={ICON_COLOR} />,
      url: "https://www.youtube.com/watch?v=sU1mwLUPT34",
    },
    {
      key: "teams",
      link: "https://www.youtube.com/watch?v=sU1mwLUPT34",
      label: <I18n t="teams" />,
      tab: <SiMicrosoftteams size={ICON_SIZE + 5} color={ICON_COLOR} />,
      url: "https://www.youtube.com/watch?v=hztkTJnqWdI",
    },
    {
      key: "github",
      link: "https://github.com/saiashish9",
      label: <I18n t="github" />,
      tab: <AiFillGithub size={ICON_SIZE + 5} color={ICON_COLOR} />,
      url: "https://youtu.be/LeUUn7BJQ2I",
    },
  ];

  const [playing, isPlaying] = useState(true);
  const [clicked, isClicked] = useState(false);
  const playerRef = useRef();

  function handleClick() {
    isPlaying((p) => isPlaying(!p));
  }

  function handleImgClicked() {
    isPlaying((p) => isPlaying(!p));
    isClicked((c) => isClicked(!c));
  }

  function onLableClick(link) {
    const win = window.open(link, "_blank");
    win.focus();
  }

  return (
    <Container data-aos="flip-up">
      <StreamsTab defaultActiveKey="instagram" centered animated>
        <TabPane tab={links[0].tab} key={links[0].key}>
          <Content>
            <PlayerContainer
              onClick={handleClick}
              onKeyDown={null}
              tabIndex={-1}
              role="button"
            >
              {!clicked ? (
                <Img
                  src={InstaThumbnailImg}
                  alt="img"
                  onClick={handleImgClicked}
                />
              ) : (
                <ReactPlayer
                  ref={playerRef}
                  height="16rem"
                  width="100%"
                  loop
                  url={links[0].url}
                  playing={playing}
                />
              )}
              {!playing && clicked && (
                <PlayPauseBtn>
                  <BsPlayFill />
                </PlayPauseBtn>
              )}
            </PlayerContainer>
            <Label onClick={() => onLableClick(links[0].link)}>
              <AiOutlineLink /> <Span>{links[0].label}</Span>
            </Label>
          </Content>
        </TabPane>
        {links.slice(1).map((i) => (
          <TabPane tab={i.tab} key={i.key}>
            <Content>
              <PlayerContainer>
                <ReactPlayer height="16rem" width="100%" url={i.url} />
              </PlayerContainer>
              <Label onClick={() => onLableClick(i.link)}>
                <AiOutlineLink /> <Span>{i.label}</Span>
              </Label>
            </Content>
          </TabPane>
        ))}
      </StreamsTab>
    </Container>
  );
};

export default Projects;
