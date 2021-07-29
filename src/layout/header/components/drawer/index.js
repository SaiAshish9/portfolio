import React from "react";

import { StyledDrawer, Container, CloseIcon, Label } from "./styles";

const Modal = ({ visible, setVisible }) => {
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
      </Container>
    </StyledDrawer>
  );
};

export default Modal;
