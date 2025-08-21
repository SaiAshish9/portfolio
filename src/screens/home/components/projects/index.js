import React, { useState, useRef } from "react";

import {
  Container,
  StreamsTab,
  PlayerContainer,
  Label,
  Content,
  Span,
} from "./styles";

import { Tabs } from "antd";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineAmazon,
  AiFillGithub,
  AiOutlineLink,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { FaUserShield } from "react-icons/fa";

import { SiMicrosoftteams, SiRazorpay } from "react-icons/si";

import ReactPlayer from "react-player";

import I18n from "common/I18n";

const { TabPane } = Tabs;

const ICON_SIZE = 16;

// https://devfolio.co/submissions/feel-at-home

const Projects = () => {
  const links = [
    {
      key: "instagram",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6763008828448620544/",
      label: <I18n t="instaClone" />,
      tab: <AiFillInstagram size={ICON_SIZE + 5} />,
      // url: "https://www.youtube.com/watch?v=gO_1CeJ2vT8",
      url: "https://res.cloudinary.com/saiashish/video/upload/v1627472940/Instagram_Clone_Using_React_Native_Postgres_Docker_And_Golang_bqznpc.mp4",
    },
    {
      key: "whatsApp",
      link: "https://www.linkedin.com/posts/%F0%9F%9A%80-sai-ashish-237784188_whatsapp-whatsappbusiness-meta-activity-6946370400566022144-aCK4?utm_source=linkedin_share&utm_medium=member_desktop_web",
      label: <I18n t="whatsappBusiness" />,
      tab: <AiOutlineWhatsApp size={ICON_SIZE + 5} />,
      url: "https://youtu.be/LTbq136e_Tc",
    },
    {
      key: "razorpay",
      link: "https://www.linkedin.com/posts/%F0%9F%9A%80-sai-ashish-237784188_razorpay-activity-6947766565572341760-wJI1?utm_source=linkedin_share&utm_medium=member_desktop_web",
      label: <I18n t="razorpay" />,
      tab: <SiRazorpay size={ICON_SIZE + 5} />,
      url: "https://youtu.be/fZUDUKjGOwU",
    },
    {
      key: "amazon",
      link: "https://bit.ly/3HATZ70",
      label: <I18n t="amazonClone" />,
      tab: <AiOutlineAmazon size={ICON_SIZE + 5} />,
      url: "https://www.youtube.com/watch?v=MKw83UXMtCQ",
    },
    {
      key: "linkedIn",
      link: "https://bit.ly/30HSWAY",
      label: <I18n t="linkedInClone" />,
      tab: <AiFillLinkedin size={ICON_SIZE + 5} />,
      url: "https://www.youtube.com/watch?v=HzqnOGj3qmc",
    },
    {
      key: "feelAtHome",
      link: "https://bit.ly/2Y3MQGx",
      label: <I18n t="feelAtHome" />,
      tab: <FaUserShield size={ICON_SIZE + 5} />,
      url: "https://www.youtube.com/watch?v=sU1mwLUPT34",
    },
    {
      key: "teams",
      link: "https://teams-sai.vercel.app/",
      label: <I18n t="teams" />,
      tab: <SiMicrosoftteams size={ICON_SIZE + 5} />,
      url: "https://www.youtube.com/watch?v=hztkTJnqWdI",
    },
    {
      key: "github",
      link: "https://github.com/saiashish9",
      label: <I18n t="github" />,
      tab: <AiFillGithub size={ICON_SIZE + 5} />,
      url: "https://youtu.be/BOjigJpvoDo",
    },
    // {
    //   key: "cred",
    //   link: "https://www.linkedin.com/posts/%F0%9F%9A%80-sai-ashish-237784188_i-just-tried-to-implement-the-animated-splash-activity-6946018268151197696-3OCa?utm_source=linkedin_share&utm_medium=member_desktop_web",
    //   label: <I18n t="github" />,
    //   tab: <AiOutlineCreditCard size={ICON_SIZE + 5} />,
    //   url: "https://youtube.com/shorts/r0gg1sFFROg",
    // },
  ];

  const [playing, isPlaying] = useState(false);
  const playerRef = useRef();

  function handleClick() {
    isPlaying((p) => isPlaying(!p));
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
              <ReactPlayer
                ref={playerRef}
                height="16rem"
                width="90%"
                loop
                muted
                controls
                src={links?.[0]?.url}
                playing={playing}
              />
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
                <ReactPlayer height="16rem" width="90%" src={i.url} />
              </PlayerContainer>
              <Label addMarginTop={1} onClick={() => onLableClick(i.link)}>
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
