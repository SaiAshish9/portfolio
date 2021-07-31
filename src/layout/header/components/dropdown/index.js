import React from "react";

import { Dropdown } from "antd";

import { useHistory } from "react-router-dom";

import {
  Container,
  Label,
  Icon,
  StyledMenuItem,
  StyledMenu,
  MenuAvatar,
  Title,
  MenuContent,
  Content,
  SubTitle,
  LangugageIcon,
  Img,
  LanguageContent,
  Row,
} from "./styles";

import LightPulse from "assets/home/lightPulse.gif";
import DarkPulse from "assets/home/darkPulse.gif";

import { useStore } from "store";

import { Theme } from "constants/index";

const DropdownContainer = ({
  language,
  songs,
  selected,
  setSelected,
  languages,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  const history = useHistory();

  const {
    state: { theme },
  } = useStore();

  const menu = (
    <StyledMenu>
      {songs
        ?.filter((x) => x.id === selected)
        .map((i, k) => (
          <StyledMenuItem active={1} key={i.id}>
            <MenuContent>
              <MenuAvatar src={i.img} alt="img" />
              <Content>
                <Row>
                  <Img
                    src={theme === Theme.dark ? LightPulse : DarkPulse}
                    alt="img"
                  />
                  <Title>{i.title}</Title>
                </Row>
                <SubTitle>{i.subTitle}</SubTitle>
              </Content>
            </MenuContent>
          </StyledMenuItem>
        ))}
      {songs
        ?.filter((x) => x.id !== selected)
        .map((i, k) => (
          <StyledMenuItem onClick={() => setSelected(i.id)} key={i.id}>
            <MenuContent>
              <MenuAvatar src={i.img} alt="img" />
              <Content>
                <Title>{i.title}</Title>
                <SubTitle>{i.subTitle}</SubTitle>
              </Content>
            </MenuContent>
          </StyledMenuItem>
        ))}
      {languages
        ?.filter((x) => x.id === selectedLanguage)
        .map((i, k) => (
          <StyledMenuItem active={1} key={i.id}>
            <MenuContent>
              <Content>
                <Title>
                  <LangugageIcon>{i.icon}</LangugageIcon>
                  {i.title}
                </Title>
              </Content>
            </MenuContent>
          </StyledMenuItem>
        ))}
      {languages
        ?.filter((x) => x.id !== selectedLanguage)
        .map((i, k) => (
          <StyledMenuItem
            onClick={() => {
              setSelectedLanguage(i.id);
              history.push(i.code);
              localStorage.setItem("code", i.id);
            }}
            key={i.id}
          >
            <MenuContent>
              <Content>
                <Title>
                  <LangugageIcon>{i.icon}</LangugageIcon>
                  {i.title}
                </Title>
              </Content>
            </MenuContent>
          </StyledMenuItem>
        ))}
    </StyledMenu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight" arrow>
      <Container>
        <Label>
          <LangugageIcon>
            {language ? languages[selectedLanguage].icon : null}
          </LangugageIcon>
          <LanguageContent>
            {language && languages[selectedLanguage].title}
          </LanguageContent>
          {songs && (
            <Row>
              {songs && (
                <Img
                  src={theme === Theme.dark ? LightPulse : DarkPulse}
                  alt="img"
                />
              )}
              {songs[selected].title}
            </Row>
          )}
        </Label>
        <Icon />
      </Container>
    </Dropdown>
  );
};

export default DropdownContainer;
