import React, { useState } from "react";

import { StyledModal, CloseIcon } from "./styles";

const Overlay = () => {
  const [visible, setVisible] = useState(true);

  return (
    <StyledModal visible={visible} footer={null} closable={false}>
      <CloseIcon onClick={() => setVisible(false)} />
    </StyledModal>
  );
};

export default Overlay;
