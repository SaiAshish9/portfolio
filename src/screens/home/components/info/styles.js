import styled, { css } from "styled-components";

import { Styles, Colors, Theme } from "constants/index";

const { darkGrey, lightBluishGrey } = Colors;

export const Container = styled.div`
  width: 100vw;
  padding: 7rem 0 5rem !important;
  overflow: hidden !important;
  position: relative;
`;

export const IconContainer = css`
  ${Styles.RCC}
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 2rem;
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
`;

export const PrevIconContainer = styled.div`
  ${IconContainer}
  left: -0.8rem;
`;
