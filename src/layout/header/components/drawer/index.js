import React from "react";

import {
  StyledDrawer,
  Container,
  CloseIcon,
  Label,
  Content,
  LanguageContainer,
  Icon,
  Title,
  Img,
  MusicImg,
  Row,
} from "./styles";

import I18n from "common/I18n";

import LightPulse from "assets/home/lightPulse.gif";
import DarkPulse from "assets/home/darkPulse.gif";

import { Theme } from "constants/index";

import { useStore } from "store";

const Modal = ({ label, visible, setVisible, data, selected, onClick }) => {
  const {
    state: { theme },
  } = useStore();

  return (
    <StyledDrawer
      placement="bottom"
      closable={false}
      // onClose={onClose}
      visible={visible}
    >
      <Container>
        <CloseIcon onClick={() => setVisible(false)} />
        <Label>
          <I18n t={label} />
        </Label>
        <LanguageContainer>
          {data.map((i, k) => (
            <Content
              onClick={() => onClick(i)}
              key={k}
              active={selected === i.id ? 1 : 0}
            >
              {i.img && <Img src={i.img} alt="img" />}
              <Icon>{i.icon}</Icon>
              <Row>
                {i.id === selected && i.img && (
                  <MusicImg
                    src={
                      theme === Theme.dark || theme === Theme.highContrast
                        ? LightPulse
                        : DarkPulse
                    }
                    alt="img"
                  />
                )}

                <Title>{i.title}</Title>
              </Row>
            </Content>
          ))}
        </LanguageContainer>
      </Container>
    </StyledDrawer>
  );
};

export default Modal;
