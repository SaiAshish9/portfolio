import styled from "styled-components";
import {
  Colors,
  Theme,
  FontWeight,
  Styles,
  BREAKPOINTS,
} from "constants/index";

import { AiFillEye } from "react-icons/ai";

import { BsDownload } from "react-icons/bs";

const { darkGrey, lightBluishGrey, white, veryDarkGray } = Colors;

export const Container = styled.div`
  height: 24rem;
  width: 18rem;
  margin: 1rem 0;
  overflow: hidden;
  background-color: ${({ theme: { current } }) =>
    current === Theme.dark ? darkGrey : lightBluishGrey};
  border-radius: 6px;
  &:hover {
    -webkit-box-shadow: 0 0 5px
      ${({ theme: { current } }) =>
        current !== Theme.dark ? darkGrey : lightBluishGrey};
    box-shadow: 0 0 5px
      ${({ theme: { current } }) =>
        current !== Theme.dark ? darkGrey : lightBluishGrey};
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
  color: ${({ theme: { current } }) =>
    current === Theme.dark ? white : veryDarkGray};
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
  color: ${({ theme: { current } }) =>
    current === Theme.dark ? lightBluishGrey : veryDarkGray};
  font-size: 0.8rem;
  font-weight: 300;
`;

export const Content = styled.div`
  padding: 0.8rem 0.7rem;
`;

export const Eye = styled(AiFillEye)`
  color: ${({ theme: { current } }) =>
    current === Theme.dark ? lightBluishGrey : veryDarkGray};
  font-size: 1.2rem;
  cursor: pointer;
`;

export const Download = styled(BsDownload)`
  color: ${({ theme: { current } }) =>
    current === Theme.dark ? lightBluishGrey : veryDarkGray};
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 1rem;
`;

export const Row = styled.div`
  ${Styles.RBC}
`;
