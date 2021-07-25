import React, { useState, useEffect } from "react";

import { Tooltip } from "antd";

import {
  Container,
  Label,
  Moon,
  Sun,
  Row,
  Eye,
  Mute,
  UnMute,
  ViewCountContainer,
  ContainerLabel,
  Player,
  SmallLabel,
} from "./styles";

import { useStore } from "store";

import { Theme } from "constants/index";

import Dropdown from "./components/dropdown";

import ReactPlayer from "react-player";

const Header = () => {
  const {
    state: { theme, count },
    actions: { setTheme },
  } = useStore();

  function handleIconClick() {
    const t = theme === Theme.dark ? Theme.light : Theme.dark;
    setTheme(t);
    localStorage.setItem("theme", t);
  }

  const [isMuted, setIsMuted] = useState(false);

  let iconContent = <Sun onClick={handleIconClick} ismuted={isMuted ? 1 : 0} />;

  if (theme === Theme.dark) {
    iconContent = <Moon onClick={handleIconClick} ismuted={isMuted ? 1 : 0} />;
  }

  function handleMuteIconClick() {
    setIsMuted((muted) => setIsMuted(!muted));
  }

  let muteIconContent = <Mute onClick={handleMuteIconClick} />;

  if (isMuted) {
    muteIconContent = <UnMute onClick={handleMuteIconClick} />;
  }

  const [scrolled, isScrolled] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", checkHeader);
    var checkHeader = setInterval(() => {
      let scrollPosition = Math.round(window.scrollY);
      if (scrollPosition > 10) {
        isScrolled("scrolled");
      } else {
        isScrolled(null);
      }
    }, 300);
    () => {
      window.removeEventListener("scroll");
      clearInterval(checkHeader);
    };
  }, []);

  return (
    <Container scrolled={scrolled}>
      <Tooltip placement="bottomLeft" title="D. D. V. Sai Ashish">
        <Label>Sai Ashish</Label>
        <SmallLabel>Sai</SmallLabel>
      </Tooltip>

      <Row>
        {muteIconContent}
        {isMuted && <Dropdown title="Despacito" />}
        {iconContent}
        <Tooltip placement="bottomRight" title="Viewer's Count">
          <ViewCountContainer>
            <Eye />
            <ContainerLabel>{count}</ContainerLabel>
          </ViewCountContainer>
        </Tooltip>
        <Dropdown title="English" />
      </Row>
      <Player>
        <ReactPlayer
          playing={isMuted}
          loop
          height="0px"
          width="0px"
          url="https://res.cloudinary.com/saiashish/raw/upload/v1589968447/i5mpqi6n6c4lsyhknucm.mp3"
        />
      </Player>
    </Container>
  );
};

export default Header;
