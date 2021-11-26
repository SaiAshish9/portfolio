import React from "react";

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
  StyledDropdown,
} from "./styles";

import { useStore } from "store";

import { Theme } from "constants/index";
import { StyledMusicIcon } from "../drawer/styles";

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
                  <StyledMusicIcon />
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
              if (history.location.pathname.split("/").includes("dsa")) {
                history.push(`/${i.code ?? "en"}/dsa`);
              } else {
                history.push(i.code);
              }
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
    <StyledDropdown
      overlay={menu}
      trigger={["click"]}
      placement="bottomRight"
      arrow
    >
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
              {songs && <StyledMusicIcon />}
              {songs[selected].title}
            </Row>
          )}
        </Label>
        <Icon />
      </Container>
    </StyledDropdown>
  );
};

export default DropdownContainer;
