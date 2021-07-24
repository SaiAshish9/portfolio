import React from "react";

import { Tooltip } from "antd";

import {
  Container,
  Label,
  Moon,
  Sun,
  Row,
  Eye,
  ViewCountContainer,
  ContainerLabel,
} from "./styles";

import { useStore } from "store";

import { Theme } from "constants/index";

const Header = () => {
  const {
    state: { theme },
    actions: { setTheme },
  } = useStore();

  function handleIconClick() {
    setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
  }

  let iconContent = <Sun onClick={handleIconClick} />;

  if (theme === Theme.dark) {
    iconContent = <Moon onClick={handleIconClick} />;
  }

  return (
    <Container>
      <Tooltip placement="bottomLeft" title="D. D. V. Sai Ashish">
        <Label>Sai Ashish</Label>
      </Tooltip>
      <Row>
        {iconContent}
        <Tooltip placement="bottomRight" title="Viewer's Count">
          <ViewCountContainer>
            <Eye />
            <ContainerLabel>1</ContainerLabel>
          </ViewCountContainer>
        </Tooltip>
      </Row>
    </Container>
  );
};

export default Header;
