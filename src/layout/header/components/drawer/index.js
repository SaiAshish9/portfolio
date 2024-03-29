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
  Row,
  StyledMusicIcon,
} from "./styles";

import I18n from "common/I18n";

const Modal = ({
  label,
  visible,
  setVisible,
  data,
  selected,
  onClick,
  language,
}) => {
  return (
    <StyledDrawer
      placement="bottom"
      closable={false}
      onClose={() => setVisible(false)}
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
              {<Icon>{i.icon}</Icon>}
              <Row>
                <Title>
                  {selected === i.id && !language && <StyledMusicIcon />}
                  {i.title}
                </Title>
              </Row>
            </Content>
          ))}
        </LanguageContainer>
      </Container>
    </StyledDrawer>
  );
};

export default Modal;
