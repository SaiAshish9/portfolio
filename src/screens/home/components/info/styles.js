import styled, { css } from "styled-components";

import { Styles, Colors, Theme, BREAKPOINTS } from "constants/index";

const { darkGrey, lightBluishGrey } = Colors;

import Slider from "react-slick";

export const StyledSlider = styled(Slider)`
  width: 72vw;
  margin: auto;
  @media only screen and (max-width: ${BREAKPOINTS.xxl}) {
    width: 97vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;

export const MediumStyledSlider = styled(Slider)`
  width: 100vw;
  margin: auto;
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const SmallStyledSlider = styled(Slider)`
  width: 100vw;
  margin: auto;
  @media only screen and (min-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100vw;
  padding: 3.6rem 0;
  overflow: hidden !important;
  position: relative;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    padding: 2rem 0;
  }
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
    right: 2rem;
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 0.9rem;
  }
`;

export const PrevIconContainer = styled.div`
  ${IconContainer}
  left: -0.8rem;
  @media only screen and (max-width: ${BREAKPOINTS.xxl}) {
    left: 1rem;
    height: 1.8rem;
    width: 1.8rem;
    border-radius: 0.9rem;
  }
`;
