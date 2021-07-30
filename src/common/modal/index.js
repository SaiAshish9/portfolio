import React, { useState, useCallback, useEffect } from "react";

import { StyledModal, CloseIcon, Title, Img, Download, Row } from "./styles";

const Overlay = ({ data: internalData, visible, setVisible }) => {
  return (
    <StyledModal visible={visible} footer={null} closable={false}>
      <CloseIcon
        onClick={() => {
          setVisible(false);
        }}
      />
      <Title>
        {internalData?.title} {internalData?.subTitle}{" "}
      </Title>
      <Img alt="img" src={internalData?.img} />
      {internalData?.download && (
        <Row>
          <Download />
          <Title>Download</Title>
        </Row>
      )}
    </StyledModal>
  );
};

export default Overlay;
