import React from "react";

import { StyledModal, CloseIcon } from "./styles";

import { useStore } from "store";

const Overlay = () => {
  const {
    state: { visible },
    actions: { setVisible },
  } = useStore();

  return (
    <StyledModal visible={visible} footer={null} closable={false}>
      <CloseIcon onClick={() => setVisible(false)} />
    </StyledModal>
  );
};

export default Overlay;
