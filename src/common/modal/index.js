import React from "react";

import { StyledModal, CloseIcon, Title, Img, Download, Row } from "./styles";

import { useStore } from "store";

const Overlay = ({ title, img, download }) => {
  const {
    state: { visible },
    actions: { setVisible },
  } = useStore();

  return (
    <StyledModal visible={visible} footer={null} closable={false}>
      <CloseIcon onClick={() => setVisible(false)} />
      <Title>{title}</Title>
      <Img alt="img" src={img} />
      {download && (
        <Row>
          <Download />
          <Title>Download</Title>
        </Row>
      )}
    </StyledModal>
  );
};

export default Overlay;
