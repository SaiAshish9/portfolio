import React, { useState } from "react";

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
} from "./styles";

import { useStore } from "store";

import { Theme } from "constants/index";

import Dropdown from "./components/dropdown";

const Header = () => {
  const {
    state: { theme },
    actions: { setTheme },
  } = useStore();

  function handleIconClick() {
    setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
  }

  const [isMuted, setIsMuted] = useState(false);

  let iconContent = <Sun onClick={handleIconClick} isMuted={isMuted} />;

  if (theme === Theme.dark) {
    iconContent = <Moon onClick={handleIconClick} isMuted={isMuted} />;
  }

  function handleMuteIconClick() {
    setIsMuted((muted) => setIsMuted(!muted));
  }

  let muteIconContent = <Mute onClick={handleMuteIconClick} />;

  if (isMuted) {
    muteIconContent = <UnMute onClick={handleMuteIconClick} />;
  }

  return (
    <Container>
      <Tooltip placement="bottomLeft" title="D. D. V. Sai Ashish">
        <Label>Sai Ashish</Label>
      </Tooltip>
      <Row>
        {muteIconContent}
        {isMuted && <Dropdown title="Despacito" />}
        {iconContent}
        <Tooltip placement="bottomRight" title="Viewer's Count">
          <ViewCountContainer>
            <Eye />
            <ContainerLabel>1</ContainerLabel>
          </ViewCountContainer>
        </Tooltip>
        <Dropdown title="English" />
      </Row>
    </Container>
  );
};

export default Header;
