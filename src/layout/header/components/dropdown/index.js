import React, { useState } from "react";

import { Dropdown } from "antd";

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
} from "./styles";

const DropdownContainer = ({
  title,
  language,
  songs,
  selected,
  setSelected,
  languages,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  const menu = (
    <StyledMenu>
      {songs
        ?.filter((x) => x.id === selected)
        .map((i, k) => (
          <StyledMenuItem active key={k}>
            <MenuContent>
              <MenuAvatar src={i.img} alt="img" />
              <Content>
                <Title>{i.title}</Title>
                <SubTitle>{i.subTitle}</SubTitle>
              </Content>
            </MenuContent>
          </StyledMenuItem>
        ))}
      {songs
        ?.filter((x) => x.id !== selected)
        .map((i, k) => (
          <StyledMenuItem onClick={() => setSelected(i.id)} key={k}>
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
          <StyledMenuItem active key={k}>
            <MenuContent>
              <Content>
                <Title>{i.title}</Title>
              </Content>
            </MenuContent>
          </StyledMenuItem>
        ))}
      {languages
        ?.filter((x) => x.id !== selectedLanguage)
        .map((i, k) => (
          <StyledMenuItem onClick={() => setSelectedLanguage(i.id)} key={k}>
            <MenuContent>
              <Content>
                <Title>{i.title}</Title>
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
          {language ? languages[selectedLanguage].title : songs[selected].title}
        </Label>
        <Icon />
      </Container>
    </Dropdown>
  );
};

export default DropdownContainer;
