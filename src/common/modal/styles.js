import styled from "styled-components";

import { Modal } from "antd";

import { Colors, Theme, Styles, BREAKPOINTS } from "constants/index";

import { MdClose } from "react-icons/md";

const { darkGrey, lightBluishGrey, veryDarkGray, white } = Colors;

export const StyledModal = styled(Modal)`
  .ant-modal-mask {
    z-index: 70;
    border-radius: 20px !important;
  }
  .ant-modal-body {
    height: 90vh;
    margin: auto;
    width: 100%;
    ${Styles.CBC}
  }
  .ant-modal-content {
    border-radius: 10px;
    width: 40vw;
    margin: auto;
    background: ${({ theme: { current } }) =>
      current === Theme.dark ? darkGrey : lightBluishGrey};
  }
  width: unset !important;
  top: 5vh !important;

  @media only screen and (max-width: ${BREAKPOINTS.xxl}) {
    .ant-modal-content {
      width: 70vw;
    }
  }

  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    .ant-modal-content {
      width: 80vw !important;
    }
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    .ant-modal-content {
      width: 90vw !important;
    }
    .ant-modal-body {
      height: 90vh;
      width: 100%;
      ${Styles.CBC}
    }
  }
`;

export const CloseIcon = styled(MdClose)`
  font-size: 1.26rem;
  align-self: flex-end;
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  cursor: pointer;
`;
