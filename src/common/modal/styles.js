import styled, { css } from "styled-components";

import { Modal } from "antd";

import {
  Colors,
  Theme,
  Styles,
  BREAKPOINTS,
  FontWeight,
} from "constants/index";

import { MdClose } from "react-icons/md";

import { BsDownload } from "react-icons/bs";

import Slider from "react-slick";

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
    justify-content: flex-start;
  }
  .ant-modal-content {
    border-radius: 10px;
    width: 32vw;
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
      justify-content: flex-start;
    }
  }
`;

export const CloseIcon = styled(MdClose)`
  font-size: 1.26rem;
  align-self: flex-end;
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  cursor: pointer;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin-bottom: 15% !important;
  }
`;

export const Title = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  text-align: start;
  font-weight: ${FontWeight.semiBold};
  margin: 1rem 0 !important;
`;

export const Img = styled.img`
  height: 81%;
  min-width: 80%;
  border-radius: 5px;
  margin-bottom: 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin: 0 7rem;
    height: 55%;
  }
  object-fit: contain;
  ${({ slider }) =>
    slider &&
    css`
      height: 45vh !important;
      width: 80vw;
      object-fit: contain;
      margin-top: 3rem !important;
      padding-right: 1rem;
    `}
`;

export const Download = styled(BsDownload)`
  color: ${({ theme: { current } }) =>
    current === Theme.dark ? lightBluishGrey : veryDarkGray};
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 1rem;
`;

export const Row = styled.div`
  ${Styles.RBC}
`;

export const StyledSlider = styled(Slider)`
  width: 100%;
`;
