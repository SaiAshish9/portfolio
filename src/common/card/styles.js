import styled, { css } from "styled-components";
import {
  Colors,
  Theme,
  FontWeight,
  Styles,
  BREAKPOINTS,
} from "constants/index";

import { AiFillEye } from "react-icons/ai";

import { HiDownload } from "react-icons/hi";

const { darkGrey, lightBluishGrey, orange, red, white, veryDarkGray, blue } =
  Colors;

export const Container = styled.div`
  height: 24rem;
  width: 18rem;
  margin: 1rem 0;
  overflow: hidden;
  background-color: ${({ theme: { current } }) =>
    current === Theme.dark
      ? darkGrey
      : current === Theme.highContrast
      ? "yellow"
      : current === Theme.fire
      ? orange
      : current === Theme.love
      ? red
      : lightBluishGrey};
  border-radius: 6px;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #000;
    `}
  ${({ theme: { current } }) =>
    (current === Theme.love || current === Theme.fire) &&
    css`
      color: #fff;
    `}
  &:hover {
    -webkit-box-shadow: 0 0 5px
      ${({ theme: { current } }) =>
        current === Theme.light
          ? veryDarkGray
          : current === Theme.love
          ? "#eb4031"
          : current === Theme.highContrast
          ? blue
          : current === Theme.fire
          ? "#FF7600"
          : white};
    box-shadow: 0 0 5px
      ${({ theme: { current } }) =>
        current === Theme.light
          ? veryDarkGray
          : current === Theme.love
          ? "#eb4031"
          : current === Theme.highContrast
          ? blue
          : current === Theme.fire
          ? "#FF7600"
          : white};
  }
  @media only screen and (max-width: ${BREAKPOINTS.xxl}) {
    width: 16rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    width: 14.5rem;
    height: 18rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 11.5rem;
    height: 16rem;
  }
`;

export const CardImg = styled.img`
  height: 80%;
  width: 100%;
  object-fit: cover;
  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    height: 70%;
  }
`;

export const Title = styled.p`
  // font-weight: ${FontWeight.semiBold};
  text-overflow: ellipsis !important;
  white-space: no-wrap;
  width: 100%;
  height: 1.5rem;
  display: block;
  overflow: hidden;
`;

export const SubTitle = styled.p`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-weight: 300;
  text-overflow: hidden;
  overflow: hidden;
  width: 90%;
  height: 1rem;
`;

export const Content = styled.div`
  padding: 0.8rem 0.7rem;
`;

export const Eye = styled(AiFillEye)`
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  top: 0.27rem;
`;

export const Download = styled(HiDownload)`
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 1rem;
  position: relative;
  top: 0.27rem;
`;

export const Row = styled.div`
  ${Styles.RBC}
`;
