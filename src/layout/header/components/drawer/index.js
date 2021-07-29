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
} from "./styles";

import { useHistory } from "react-router-dom";

const Modal = ({ visible, setVisible, languages, selected, setSelected }) => {
  const history = useHistory();

  return (
    <StyledDrawer
      placement="bottom"
      closable={false}
      // onClose={onClose}
      visible={visible}
    >
      <Container>
        <CloseIcon onClick={() => setVisible(false)} />
        <Label>Select Language</Label>
        <LanguageContainer>
          {languages.map((i, k) => (
            <Content
              onClick={() => {
                setSelected(i.id);
                history.push(i.code);
              }}
              key={k}
              active={selected === i.id ? 1 : 0}
            >
              <Icon>{i.icon}</Icon>
              <Title>{i.title}</Title>
            </Content>
          ))}
        </LanguageContainer>
      </Container>
    </StyledDrawer>
  );
};

export default Modal;
