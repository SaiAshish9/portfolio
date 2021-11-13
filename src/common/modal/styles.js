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
    height: 80vh;
    margin: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .ant-modal-content {
    border-radius: 10px;
    width: 32vw;
    margin: auto;
    background: ${({ theme: { current } }) =>
      current === Theme.dark ? darkGrey : lightBluishGrey};
  }
  width: unset !important;
  top: 10vh !important;
  overflow-y: scroll;

  @media only screen and (max-width: ${BREAKPOINTS.xxl}) {
    .ant-modal-content {
      width: 45vw;
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
      height: 80vh;
      width: 100%;
      displat: flex;
      flex-direction: column;
    }
    top: 10vh !important;
  }
`;

export const CloseIcon = styled(MdClose)`
  font-size: 1.26rem;
  align-self: flex-end;
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  cursor: pointer;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin-bottom: 6% !important;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  text-align: center;
  font-weight: ${FontWeight.semiBold};
  margin: 0.5rem 0 !important;
`;

export const Img = styled.img`
  margin: auto;
  border-radius: 5px;
  margin-bottom: 1rem;
  object-fit: contain;
  ${({ slider }) =>
    slider &&
    css`
      height: 45vh !important;
      width: 80vw;
      margin: auto;
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

export const SubTitle = styled.a`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  text-align: center;
  font-weight: ${FontWeight.semiBold};
  margin: 1rem 0 !important;
  text-decoration: underline;
`;

export const IconContainer = css`
  ${Styles.RCC}
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 1.2rem;
  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
  font-size: 1.2rem;
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? darkGrey : lightBluishGrey};
  cursor: pointer;
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? darkGrey : lightBluishGrey};
  -webkit-box-shadow: 0 0 5px
    ${({ theme: { current } }) =>
      current !== Theme.dark ? darkGrey : lightBluishGrey};
  box-shadow: 0 0 5px
    ${({ theme: { current } }) =>
      current !== Theme.dark ? darkGrey : lightBluishGrey};
  position: absolute;
  top: 43%;
  z-index: 10;
`;

export const NextIconContainer = styled.div`
  ${IconContainer}
  right: -0.8rem;
  @media only screen and (max-width: ${BREAKPOINTS.xxl}) {
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 0.9rem;
  }
`;

export const PrevIconContainer = styled.div`
  ${IconContainer}
  left: -0.8rem;
  @media only screen and (max-width: ${BREAKPOINTS.xxl}) {
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 0.9rem;
  }
`;
